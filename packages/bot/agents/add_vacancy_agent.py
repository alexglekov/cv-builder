import random
import re
from requests import post
from .agent_base import AgentBase

class AddVacancyAgent(AgentBase):
  def __init__(self):
    super().__init__()

  def execute(self, input_dict: dict) -> str:
    answer = ""
    user_id = input_dict['user_id']
    user = input_dict['user']
    responses = user.responses

    json = None
    for response in responses:
      if response.action.get("action") == 'searchVacancies':
        json = response.json


    if json is None:
      answer = 'В контексте не заметил, что спрашивали о поиске вакансий...'
    else:
      print(json)
      body = input_dict["body"]
      vacancy_number = None

      for word in re.findall(r'[А-яЁё0-9][а-яё\-]*', body):
        print(word)
        if word.isnumeric():
          vacancy_number = int(word)
          break

      if vacancy_number is None:
        answer = 'Номер вакансии не указан'
      else:
        vacancy_number = vacancy_number - 1
        vacancy = json[vacancy_number]
        vacancyId = vacancy["vacancyId"]
        try:
          response = post(f"http://127.0.0.1:8001/vacancy/{vacancyId}/analize/{user_id}")

          if response.status_code >= 200 and response.status_code < 300:
            answer = "Вакансия успешно добавлена!"
          else:
            answer = "Упс... Произошла ошибка при добавлении вакансии!"
        except BaseException:
          answer = "Упс... Произошла ошибка при добавлении вакансии!"


    return answer, {}, {}