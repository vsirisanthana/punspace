import webapp2

from webapp.handlers import AppHandler

app = webapp2.WSGIApplication([
    ('/.*/?', AppHandler),
],
debug=True)
