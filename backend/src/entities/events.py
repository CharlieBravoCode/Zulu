
from dataclasses import field
from marshmallow import Schema, fields
from sqlalchemy import Column, String

from .entity import Entity, Base


class Events(Entity, Base):
    __tablename__ = 'events'

    identifier = Column(String)
    title = Column(String)
    location = Column(String)

    def __init__(self, identifier, title, location):
        Entity.__init__(self)
        self.identifier = identifier
        self.title = title
        self.location = location
    


class EventsSchema(Schema):
    id = fields.Number()
    identifier = fields.Str()
    title = fields.Str()
    location = fields.Str()

