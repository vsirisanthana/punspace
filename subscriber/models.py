__author__ = 'pique'


from google.appengine.ext import db


class Subscriber(db.Model):
    email = db.EmailProperty(required=True)
    first_name = db.StringProperty()
    last_name = db.StringProperty()