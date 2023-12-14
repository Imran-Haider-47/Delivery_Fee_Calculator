from typing import List
from uuid import uuid4
from fastapi import FastAPI
from models import Gender, Role, User
app = FastAPI()

db: List[User] = [
    User(
        id=uuid4(),
        first_name="John",
        last_name= "Wick",
        gender= Gender.male,
        roles = [Role.admin]
    ),
    User(
        id=uuid4(),
        first_name="Alex",
        last_name= "Star",
        gender= Gender.female,
        roles = [Role.student]
    )
]

@app.get("/")
def root():
    return {
        "Hello": "World"
    }

@app.get("/api/v1/users")
async def fetch_users():
    return db
