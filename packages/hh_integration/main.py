from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from requests import get
from typing import List, Optional
import random
from help import find_vacancies, analize_vacancy_info

class Skill:
  name: str
  exp: str

class User(BaseModel):
    user_id: str

class Vacancy(BaseModel):
    vacancy_id: str


app = FastAPI()

origins = [
   "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/vacancy/for_user/{user_id}')
async def get_vacancy(user_id: int):
    response = get(f"http://localhost:3000/api/projects/techtable/{user_id}")
    techtable = response.json()

    response = get('http://localhost:3000/api/projects/skills')
    possibleskills = response.json()

    print(techtable)
    print(possibleskills)

    skills = []

    for tech in techtable:
      skill = Skill()
      for possibleskill in possibleskills:
         if tech["id"] == possibleskill["id"]:
            skill.name = possibleskill["name"]
            break
      skill.exp = tech["total"]
      skills.append(skill)

    # skills = user.skills
    skills = [skill.name for skill in skills]

    answer = find_vacancies(user_id, random.SystemRandom().sample(skills, min(len(skills), 3)))

    return answer

@app.post('/vacancy/{vacancy_id}/analize/{user_id}')
async def analize_vacancy(vacancy_id: str, user_id: int):
    print("vacancy_id", vacancy_id)
    print("user_id", user_id)
    
    response = get(f"http://localhost:3000/api/projects/techtable/{user_id}")
    techtable = response.json()

    response = get('http://localhost:3000/api/projects/skills')
    possibleskills = response.json()

    print(techtable)
    print(possibleskills)

    skills = []

    for tech in techtable:
      skill = Skill()
      for possibleskill in possibleskills:
         if tech["id"] == possibleskill["id"]:
            skill.name = possibleskill["name"]
            break
      skill.exp = tech["total"]
      skills.append(skill)


    skills_n = [skill.name for skill in skills]

    answer = await analize_vacancy_info(user_id, skills_n, vacancy_id)

    return answer
