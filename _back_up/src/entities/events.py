
from dataclasses import field
from logging.config import IDENTIFIER
from marshmallow import Schema, fields
from sqlalchemy import Column, String, Integer

from .entity import Entity, Base


class Events(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True)
    identifier = Column(String)
    title = Column(String)
    location = Column(String)


    def __init__(self, identifier, title, location):
        Entity.__init__(self)
        self.identifier = identifier
        self.title = title
        self.location = location

    

#class EventsSchema(Schema):
class EventsSchema(Schema):
    identifier = fields.Str()
    title = fields.Str()
    location = fields.Str()
    id = fields.Number()

