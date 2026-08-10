from typing import Dict, List
from .interfaces import Response
from fastapi import WebSocket

class ConnectionManager:
  def __init__(self):
    self.connections: Dict[str, WebSocket] = dict()
    self.responses: Dict[str, List[Response]] = dict()

  def connect(self, websocket: WebSocket, id: str):
    self.connections.setdefault(id, websocket)
    self.responses[id] = []

  def disconnect(self, id: str):
    self.connections.pop(id)
    self.responses[id] = None

  async def sendTo(self, response: Response):
    connection = self.connections.get(response.id)
    self.responses[response.id].append(response)
    if connection is not None:
      await connection.send_text(response.message)

  async def broadcast(self, message: str):
    for connection in self.connections.values():
      await connection.send_text(message)

  def getMessages(self, id: str):
    return self.responses[id]