from .agent_base import AgentBase

class ProfileAgent(AgentBase):
  def __init__(self):
    super().__init__()
    self.process = 0

  def execute(self, input_dict: dict) -> str:
    body = input_dict['body']

    if self.process == 0:
      if 'данные' in body or 'профиль' in body:
        self.process = 1
        return 'Что именно Вы хотите поменять? Я могу помочь изменить следующие данные: ФИО, направление работы, образование, опыт работы, биографию', {}
      else:
        return 'Я не понимаю вопрос. Попробуйте повторить его', {}
      
    elif self.process == 1:
      new_body = body.split(sep=' на ')
      if len(new_body) < 2:
        return 'Видимо, произошел сбой. Попробуйте еще раз сначала', {}
      else:
        text = new_body[len(new_body) - 1]

      if 'ФИО' in body:
        self.process = 0
        return f'Изменяю ФИО на {text}', {'action': 'change_name', 'text': text}
      elif 'направление' in body:
        self.process = 0
        return f'Изменяю направление работы на {text}', {'action': 'change_direction', 'text': text}
      elif 'образование' in body:
        self.process = 0
        return f'Изменяю образование на {text}', {'action': 'change_education', 'text': text}
      elif 'опыт' in body:
        self.process = 0
        return f'Изменяю опыт работы на {text}', {'action': 'change_experience', 'text': text}
      elif 'биография' in body:
        self.process = 0
        return f'Изменяю биографию на {text}', {'action': 'change_biography', 'text': text}
      else:
        self.process = 0
        return 'Видимо, произошел сбой. Попробуйте еще раз сначала', {}, {}
