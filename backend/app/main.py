from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .db import SessionLocal
from .models import Campaign

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# GET /campaigns
@app.get("/campaigns")
def get_campaigns(db: Session = Depends(get_db)):
    campaigns = db.query(Campaign).all()
    return campaigns

@app.get("/")
def read_root():
    return {"message": "Campaign Analytics Dashboard back-end is running."}