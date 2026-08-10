from random import randint
from .agent_base import AgentBase

class HelloAgent(AgentBase):
  def __init__(self):
    super().__init__()

  def execute(self, input_dict: dict) -> str:
    answer_a = ['Привет! Чем могу помочь?', 'Добрый день! Чем могу помочь?', 'Здравствуй! Чем могу быть полезен?']
    return answer_a[randint(0, len(answer_a) - 1)], {}, {}
