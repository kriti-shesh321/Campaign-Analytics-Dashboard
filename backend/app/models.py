from sqlalchemy import Column, Integer, String, Float
from .db import Base

class Campaign(Base):
    __tablename__ = "campaigns"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    status = Column(String, nullable=True)
    clicks = Column(Integer, nullable=False, default=0)
    cost = Column(Float)
    impressions = Column(Integer, nullable=False, default=0)