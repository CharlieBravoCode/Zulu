from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask import Flask, jsonify,request, abort
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:seglniosi3ng9834ogno3ngkldowuez!$rmfmrRJjmelsmfdjUfnerurnfsegom490zj498t23nto(ugneukgbekgdj@localhost/zulu_db_postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

if __name__ == '__main__':
  app.run(debug=True)


class Events(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key = True)
    identifier = db.Column(db.String)
    title = db.Column(db.String)
    location = db.Column(db.Integer())

    def __repr__(self):
        return "<Event %r>" % self.title 


@cross_origin()
@app.route('/events', methods = ['POST'])
def create_event():
    event_data = request.json

    identifier = event_data['identifier']
    title  = event_data['title']
    location = event_data['location']
  
    event = Events(identifier = identifier, title = title, location = location)
    db.session.add(event)
    db.session.commit()
    

    return jsonify({"success": True,"response":"Event added"})



@cross_origin()    
@app.route('/events', methods = ['GET'])
def getevents():
     all_events = []
     events = Events.query.all()
     for event in events:
          results = {
                    "id":event.id,
                    "identifier":event.identifier,
                    "title":event.title,
                    "location":event.location
          }
          all_events.append(results)

     return jsonify(all_events)



@cross_origin()  
@app.route("/events/<int:event_id>", methods = ["PUT"])
def update_event(event_id):
    event = Events.query.get(event_id)
    identifier = request.json['identifier']
    title = request.json['title']
    location = request.json['location']

    if event is None:
        abort(404)
    else:
        event.identifier = identifier
        event.title = title
        event.location = location
        db.session.add(event)
        db.session.commit()
        return jsonify({"success": True, "response": "Event Details updated"})





