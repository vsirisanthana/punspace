__author__ = 'pique'


import re

from google.appengine.api import mail

from appenginevalidation import clean
from appengineserene.errors import Http4xx
from appengineserene.handlers import ListOrCreateHandler

from subscriber.models import Subscriber


class SubscriberListOrCreateHandler(ListOrCreateHandler):
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

        # Send email
        sender_address = 'Pique Sirisanthana <pique@punspace.com>'
        subject = 'Thank You for Subscribing to Punspace'
        body = """Thank you for subscribing to Punspace. We'll get in touch with you very soon."""
        mail.send_mail(sender_address, email, subject, body)

        return subscriber
