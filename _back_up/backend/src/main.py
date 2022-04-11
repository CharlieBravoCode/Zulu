
from asyncio import events
from multiprocessing import Event
from subprocess import call
from flask import Flask, jsonify, request
from flask_cors import CORS

from .entities.entity import Session, engine, Base
from .entities.events import Events, EventsSchema


# creating the Flask application
app = Flask(__name__)
CORS(app)


@app.route('/events', methods=['GET'])
def get_events():
    # fetching from the database
    session = Session()
    events_objects = session.query(Events).all()

    # transforming into JSON-serializable objects
    schema = EventsSchema(many=True)
    events = schema.dump(events_objects)

    # serializing as JSON
    session.close()
    return jsonify(events)


@app.route('/events', methods=['POST'])
def add_event():
    # mount event object
    posted_event = EventsSchema(only=('identifier', 'title', 'location'))\
        .load(request.get_json())

    event = Events(**posted_event)
    print(posted_event)

    # persist event
    session = Session()
    session.add(event)
    session.commit()

    # return created event
    new_event = EventsSchema().dump(event)
    session.close()
    return jsonify(new_event), 201



@app.route('/events/<int:events_id>', methods=['PUT'])
def edit_event(events_id):
    # mount event object
    session = Session()
    data = request.get_json()
    get_events = session.query(Events).filter(id = events_id).first()

    get_events.id = data['id']
    get_events.identifier = data['identifier']
    get_events.title = data['title']
    # persist event

    session.add(get_events)
    session.commit()

    # return created event
    new_event = EventsSchema().dump(event)
    session.close()
    return jsonify(new_event), 201



#Testing the content of the db table events with 
# "python -m src.main"
session = Session()
testEvents = session.query(Events).all()

print('### Events:')
for event in testEvents:
    print(f'({event.id}) {event.identifier} - {event.title} - {event.location}')

    