import DatabaseMD
from fastapi import FastAPI
app = FastAPI()

@app.post("/")
def add_item(request: dict):
    db = DatabaseMD.DatabaseMD()
    db.send(request)
    return {"status": "ok"}

@app.get("/")
def get_items():
    db = DatabaseMD.DatabaseMD()
    return db.get()