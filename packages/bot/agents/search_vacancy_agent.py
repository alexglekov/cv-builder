import random
from .agent_base import AgentBase

from requests import post


class SearchVacancyAgent(AgentBase):
  def __init__(self):
    super().__init__()

  def execute(self, input_dict: dict) -> str:
    print(input_dict)
    user_id = input_dict['user_id']

    response = post(f"http://localhost:8001/vacancy/for_user/{user_id}")

    vacancies = response.json()

    print(vacancies)

    answer = 'Я нашел список подходящих для твоего резюме вакансий:'

    i = 1
    for vacancy in vacancies["vacancies"]:
      name = vacancy["name"]
      answer += f"\n\t{i}. {name}."
      if i == 5:
        break
      i += 1

    lent = len(vacancies["vacancies"])
    answer += f" Всего я нашел {lent} подходящих вакансий."

    return answer, { "action": "searchVacancies" }, vacancies["vacancies"]


# vac = VacancyAgent().execute({'user_id': 'ads', 'user_skills': {'Python': '12', 'FastAPI': '123'}})
