# routes/chat.py
from fastapi import APIRouter
from app.models import ChatRequest

router = APIRouter()


PREDEFINED_RESPONSES = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a server, but I'm doing fine!",
    "bye": "Goodbye! Have a great day!"
}


@router.post("/api/chat")
def chat(request: ChatRequest):
    message_lower = request.message.lower()
    response = PREDEFINED_RESPONSES.get(message_lower, "I'm not sure how to respond to that.")
    return {"response": response}
