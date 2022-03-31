
from dataclasses import field
from marshmallow import Schema, fields
from sqlalchemy import Column, String

from .entity import Entity, Base


class Events(Entity, Base):
    __tablename__ = 'events'

    identifier = Column(String)
    title = Column(String)

    def __init__(self, identifier, title):
        self.identifier = identifier
        self.title = title
    


class EventsSchema(Schema):
    id = fields.Number()
    identifier = fields.Str()
    title = fields.Str()

