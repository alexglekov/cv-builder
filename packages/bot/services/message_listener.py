from agents import AgentBase, agents
from typing import List

from .message_loop import MessageResponseLoop
from .interfaces import Message, Response, User
from helpers.words import get_words, to_normal

class MessageListener:
  agents: List[AgentBase]
  keywords: list

  def __init__(self):
    self.agents = agents
    self.loop: MessageResponseLoop = None

    self.commands = {
      ('привет'): self.agents['hello_agent'].execute,
      ('добрый', 'день'): self.agents['hello_agent'].execute,
      ('добрый', 'вечер'): self.agents['hello_agent'].execute,
      ('добрый', 'утро'): self.agents['hello_agent'].execute,
      ('салют'): self.agents['hello_agent'].execute,
      ('халло'): self.agents['hello_agent'].execute,
      ('хай'): self.agents['hello_agent'].execute,
      ('помощь'): self.agents['help_agent'].execute,
      ('помочь'): self.agents['help_agent'].execute,
      ('что', 'уметь'): self.agents['help_agent'].execute,
      ('добавить', 'вакансия'): self.agents['add_vacancy_agent'].execute,
      ('найти', 'вакансия'): self.agents['search_vacancy_agent'].execute,
      ('данные'): self.agents['profile_agent'].execute,
      ('профиль'): self.agents['profile_agent'].execute,
      ('фио'): self.agents['profile_agent'].execute,
      ('направление'): self.agents['profile_agent'].execute,
      ('опыт'): self.agents['profile_agent'].execute,
      ('биография'): self.agents['profile_agent'].execute,
      ('образование'): self.agents['profile_agent'].execute,
      ('сгенерировать', 'резюме'): self.agents['cv_agent'].execute,
    }
  
  def executeAgent(self, input_string: list, *args: list):
    answer = 'Привет'

    print(input_string)
    for keys in self.commands.keys():
      check = []
      if type(keys) is tuple:
        for key in keys:
          if key in input_string:
            check.append(1)
          else:
            check.append(0)
      else:
        if keys in input_string:
            check.append(1)
        else:
          check.append(0)

      if all(check):
        answer = self.commands[keys](*args)
        break
      else:
        answer = 'Не могу ответить на вопрос, я еще учусь... Но скорее всего не научусь...', {}, {}
        
    return answer
        

  def setLoop(self, messageResponseLoop: MessageResponseLoop):
    self.loop = messageResponseLoop


  async def done(self, response: Response):
    print(response.message)
    await self.loop.handleResponse(response)

  async def execute(self, message: Message, user: User):
    id = message.id
    body = message.message
    words = to_normal(get_words(body))

    user_id = user.id
    user_skills = user.skills

    input_dict = {'body': body, 'user_id': user_id, 'user': user }

    answer, action, additionalPayload = self.executeAgent(words, input_dict)

    response = Response(id, answer, action)
    response.json = additionalPayload

    await self.done(response)
