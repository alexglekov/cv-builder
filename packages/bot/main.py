from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from uuid import uuid4

from services import ConnectionManager, MessageResponseLoop, MessageListener
from helpers import corrector, translator
from pydantic import BaseModel

app = FastAPI()

class Text(BaseModel):
  text: str

manager = ConnectionManager()
messageListener = MessageListener()
messageLoop =  MessageResponseLoop(manager, messageListener)
messageListener.setLoop(messageLoop)

@app.post('/text/translate/from_russian')
async def translate_text_from_russian(text: Text):
  text = text.text
  result = translator.translator_from_russian(text)

  return {'answer': result}

@app.post('/text/translate/from_english')
async def translate_text_from_english(text: Text):
  text = text.text
  result = translator.translator_from_english(text)

  return {'answer': result}

@app.post('/text/correct')
async def correct_text(text: Text):
  text = text.text
  result = corrector.spelling_correction(text)

  return {'answer': result}

@app.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: int):
    id = uuid4()
    try:
      await websocket.accept()

      print(user_id)

      manager.connect(websocket, id)

      while True:
        data = await websocket.receive_text()
        print("message from", id)
        await messageLoop.handleMessage(id, data, user_id, [])
    except WebSocketDisconnect:
      manager.disconnect(id)
      print("client disconnected")