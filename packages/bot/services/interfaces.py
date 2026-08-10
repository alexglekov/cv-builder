from typing import List

class Message:
  id: str
  message: str

  def __init__(self, id: str, message: str):
    self.id = id
    self.message = message

class Response:
  id: str
  message: str
  action: dict
  json: dict

  def __init__(self, id: str, message: str, action: str):
    self.id = id
    self.message = message
    self.action = action

class User:
  id: int
  skills: dict
  responses: List[Response]

  def __init__(self, id: int, skills: dict):
    self.id = id
    self.skills = skills
    self.responses = []
