import requests, json, uuid, random, re

HH_RU_URL = 'https://api.hh.ru/vacancies/'


def extract_word(text: str):
    x = re.findall(r'[A-Z][A-z\+\-\#]+', text)
    x = [word.capitalize() for word in x]
    return x

def get_vacancy_info(item: dict, user_id: str, vacancies: list):
    key_list = ['id', 'name', ['salary', 'from'], ['salary', 'to'], ['salary', 'currency'], ['type', 'id'], ['type', 'name'], ['address', 'city'], ['address', 'street'], ['address', 'raw'], 
                    'published_at', 'created_at', 'archived', 'alternate_url', ['employer', 'name'], ['employer', 'id'], ['employer', 'alternate_url'], 
                    ['employer', 'alternate_url'], ['snippet', 'requirement'], ['snippet', 'responsibility'], ['schedule', 'id'], ['schedule', 'name'], ['professional_roles', 'name'], ['professional_roles', 'id'], 
                    ['employment', 'id'], ['employment','name'], ['key_skills', 'name'], 'description']
        
    vacancy_keys = ['vacancyId', 'name', 'salaryFrom', 'salaryTo', 'currency', 'typeId', 'typeName',
                    'addressCity', 'addressStreet', 'addressRaw', 'publishedAt', 'createdAt', 'archived', 
                    'vacancyUrl', 'employerName', 'employerId', 'employerUrl', 'employerLogoUrl', 
                    'requirements', 'responsibilities', 'scheduleId', 'scheduleName', 'professionalRoleId', 
                    'professionalRoleName', 'experienceId', 'experienceName', 'keySkills', 'description', 'passLevel', 'profileId', 'advice']

    vacancy_values = []
    item_keys = item.keys()
    for i in range(len(key_list)):
        add_value = ''
        if type(key_list[i]) is list:
            if key_list[i][0] in item_keys:
                if key_list[i][0] != 'professional_roles' and key_list[i][0] != 'key_skills':
                    try:
                        add_value = item[key_list[i][0]][key_list[i][1]]
                    except TypeError:
                        add_value = ''
                elif key_list[i][0] == 'professional_roles':
                    try:
                        add_value = item[key_list[i][0]][0][key_list[i][1]]
                    except TypeError:
                        add_value = ''
                elif key_list[i][0] == 'key_skills':
                    try:
                        add_value = []
                        for j in range(len(item[key_list[i][0]])):
                            add_value.append(item[key_list[i][0]][j][key_list[i][1]].capitalize())
                    except TypeError:
                        add_value = ''
        else:
            if key_list[i] in item_keys:
                try:
                    add_value = item[key_list[i]]
                except TypeError:
                    add_value = ''
                
        vacancy_values.append(add_value)
        
    vacancy_values.extend([0, user_id, ('Не в избранном', ""), int(uuid.uuid4())])

    vacancy_dict = dict(zip(vacancy_keys, vacancy_values))

    if vacancy_dict["salaryFrom"] == "":
      vacancy_dict["salaryFrom"] = 0

    if vacancy_dict["salaryTo"] == "":
      vacancy_dict["salaryTo"] = 0

    if vacancy_dict.get("employmentId") is None:
      vacancy_dict["employmentId"] = "12312312"

    if vacancy_dict.get("employmentName") is None:
      vacancy_dict["employmentName"] = "No name"

    vacancies.append(vacancy_dict)


def get_request(url: str, request_params: dict, vacancies: list, user_id: str):
    response = requests.get(url, params=request_params)
    print(response.status_code)
    print(response.text)
    response_json = json.loads(response.text)

    try:
        for item in response_json['items']:
            get_vacancy_info(item, user_id, vacancies)
    except:
        get_vacancy_info(response_json, user_id, vacancies)
    
        


def find_vacancies(user_id: str, skills: list):
    answer, vacancies = {}, []
    try:
        get_request(HH_RU_URL, {'page': 0, 'per_page': 100, 'text': ''.join(skills)}, vacancies, user_id)
    except:
        answer['exception'] = 'We have some problems'
        return answer
    
    answer['vacancies'] = vacancies
    answer['user_id'] = user_id

    # print(json.dumps(answer, ensure_ascii=False, indent=4))
    # print(len(answer['vacancies']))

    return answer

async def analize_vacancy_info(user_id: str, skills: list, vacancy_id: str):
    answer, vacancies = {}, []

    print(user_id, skills, vacancy_id)

    # try:
    get_request(HH_RU_URL + vacancy_id, {}, vacancies, user_id)
    # except:
    #     answer['exception'] = 'We have some problems'
    #     return answer

    req_skills = set(extract_word(vacancies[0]['requirements']))
    desk_skills = set(extract_word(vacancies[0]['description']))
    key_skills = set(vacancies[0]['keySkills'])

    skills_for_vacancy = req_skills | desk_skills | key_skills

    user_skills = set([skill.capitalize() for skill in skills])

    appropriate_skills = skills_for_vacancy & user_skills
    inappropriate_skills = skills_for_vacancy - user_skills

    appropriate = int(len(appropriate_skills)/(len(skills_for_vacancy) or 1) * 100)

    if len(skills_for_vacancy) == 0:
        choice_ = '0'
        advice = [f'У вакансии отсутствуют ключевые навыки для оценки', ""]
    elif appropriate <= 50:
        choice_ = '1'
        advice = [f'{appropriate}% подходит по вашим навыкам', f'Советуем подтянуть ' + ', '.join(inappropriate_skills)]
    elif appropriate <= 90:
        choice_ = '2'
        advice = [f'{appropriate}% подходит по вашим навыкам', f'Советуем подтянуть ' + ', '.join(inappropriate_skills)]
    else:
        choice_ = '3'
        advice = [f'{appropriate}% подходит по вашим навыкам']

    vacancies[0]['passLevel'] = choice_
    vacancies[0]["passMessage"] = advice[0]
    vacancies[0]["advice"] = advice[1]

    answer['vacancies'] = vacancies
    answer['user_id'] = user_id

    print("post", vacancies[0])

    response = requests.post("http://localhost:3000/api/vacancies", json = vacancies[0])
    print(response.status_code)
    print(response.json())

    return answer

# find_vacancies('asda', ['Python'])

# analize_vacancy_info('asda', {'Python': '234', 'FastAPI':'234'}, '89141530')

# response = requests.get(HH_RU_URL + '89215036', params={'page': 0})
# response_json = json.loads(response.text)
# print(json.dumps(response_json, ensure_ascii=False, indent=4))
