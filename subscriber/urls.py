__author__ = 'pique'


import webapp2

from subscriber.handlers import SubscriberCreateHandler


app = webapp2.WSGIApplication([
    webapp2.Route(r'/api/subscribers<:/?>', handler=SubscriberCreateHandler),
], debug=True)