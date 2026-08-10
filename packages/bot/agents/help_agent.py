from .agent_base import AgentBase

class HelpAgent(AgentBase):
  def __init__(self):
    super().__init__()

  def execute(self, input_dict: dict) -> str:
    answer = '''Я могу помочь тебе со следующимим операциями:\n Могу помочь с поиском вакансий\n Могу помочь с обновлением профиля\n Могу помочь с генерацией резюме\n Могу помочь с переводом резюме\n Могу помочь с исправлением ошибок'''
    return answer, {}, {}
