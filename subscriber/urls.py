__author__ = 'pique'


import webapp2

from subscriber.handlers import SubscriberListOrCreateHandler


app = webapp2.WSGIApplication([
    webapp2.Route(r'/api/subscribers<:/?>', handler=SubscriberListOrCreateHandler),
], debug=True)