from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def load_data():
    with open("db.json", "r", encoding="utf-8") as file:
        return json.load(file)

@app.get("/rooms")
def get_rooms(name_like: str = None, type: str = None):
    data = load_data()
    rooms = data["rooms"]

    if name_like:
        name_like = name_like.lower()
        rooms = [
            r for r in rooms
            if name_like in r["name"].lower() or name_like in r["description"].lower()
        ]

    if type:
        rooms = [r for r in rooms if r["type"] == type]

    return rooms

@app.get("/rooms/{room_id}")
def get_room_by_id(room_id: int):
    data = load_data()
    rooms = data["rooms"]

    for room in rooms:
        if room["id"] == room_id:
            return room

    raise HTTPException(status_code=404, detail="Room not found")
