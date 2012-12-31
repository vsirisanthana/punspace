__author__ = 'pique'


import re

from gaevalidate import clean
from serene.errors import Http4xx
from serene.handlers import CreateHandler

from subscriber.models import Subscriber


class SubscriberCreateHandler(CreateHandler):
    model = Subscriber

    def do_post(self, parent_key=None, **kwargs):
        content = clean(self.request.CONTENT, self.model)
        email = content.get('email')
        if not email:
            raise Http4xx(400, 'Error 400 Bad Request: Email is required.')
        if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            raise Http4xx(400, 'Error 400 Bad Request: Email is invalid.')
        subscriber = Subscriber(key_name=email, **content)
        subscriber.put()
        return subscriber
