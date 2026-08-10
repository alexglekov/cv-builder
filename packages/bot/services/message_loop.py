import re
from .interfaces import Message, Response, User

from .connection_manager import ConnectionManager

class MessageResponseLoop:
  def __init__(self, connectionManager: ConnectionManager, messageListener):
    self.connectionManager: ConnectionManager = connectionManager
    self.messageListener = messageListener

  async def handleMessage(self, id: str, text: str, user_id: int, skills: dict):
    user = User(user_id, skills)
    user.responses = self.connectionManager.getMessages(id)
    # разбиваем текст на предложения
    split_regex = re.compile(r'[.?…]')
    sentences = filter(lambda t: t, [t.strip() for t in split_regex.split(text)])
    for s in sentences:
      msg = Message(id, s)
      await self.messageListener.execute(msg, user)

  async def handleResponse(self, response: Response):
    await self.connectionManager.sendTo(response)
