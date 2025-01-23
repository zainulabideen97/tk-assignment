from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import health_router, chat_router

# Application Factory
def create_app():
    app = FastAPI()

    # Enable CORS for all origins (if you want to restrict it to certain origins, you can specify them)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],  # List of origins that are allowed to make requests
        allow_credentials=True,
        allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
        allow_headers=["*"],  # Allow all headers
    )

    app.include_router(health_router)
    app.include_router(chat_router)

    return app
