__author__ = 'pique'


import json

import unittest2
import webtest
from google.appengine.datastore import datastore_stub_util
from google.appengine.ext import testbed

from subscriber.models import Subscriber
from subscriber.urls import app


class BaseTestHandler(unittest2.TestCase):

    def setUp(self):
        self.testapp = webtest.TestApp(app)
        self.testbed = testbed.Testbed()
        self.testbed.activate()
        self.policy = datastore_stub_util.PseudoRandomHRConsistencyPolicy(probability=1)
        self.testbed.init_datastore_v3_stub(consistency_policy=self.policy)
        self.testbed.init_user_stub()
        self.testbed.init_mail_stub()
        self.mail_stub = self.testbed.get_stub(testbed.MAIL_SERVICE_NAME)

        self.subscriber_adele_kwargs = {
            'email': 'adele@punspace.com',
            'first_name': 'Adele',
            'last_name': 'Adkins',
        }

        self.subscriber_bono_kwargs = {
            'email': 'bono@punspace.com',
            'first_name': 'Bono',
            'last_name': 'Hewson',
        }

    def tearDown(self):
        self.testbed.deactivate()

    def assertEqualSubscriberAdele(self, subscriber):
        self.assertEqual(subscriber.email, 'adele@punspace.com')
        self.assertEqual(subscriber.first_name, 'Adele')
        self.assertEqual(subscriber.last_name, 'Adkins')

    def assertEqualSubscriberAdeleDict(self, subscriber_dict):
        self.assertEqual(subscriber_dict['email'], 'adele@punspace.com')
        self.assertEqual(subscriber_dict['first_name'], 'Adele')
        self.assertEqual(subscriber_dict['last_name'], 'Adkins')

    def assertEqualSubscriberBono(self, subscriber):
        self.assertEqual(subscriber.email, 'bono@punspace.com')
        self.assertEqual(subscriber.first_name, 'Bono')
        self.assertEqual(subscriber.last_name, 'Hewson')

    def assertEqualSubscriberBonoDict(self, subscriber_dict):
        self.assertEqual(subscriber_dict['email'], 'bono@punspace.com')
        self.assertEqual(subscriber_dict['first_name'], 'Bono')
        self.assertEqual(subscriber_dict['last_name'], 'Hewson')

    def assertEqualMessageSubscribe(self, message):
        self.assertEqual(message.to, 'adele@punspace.com')
        self.assertEqual(message.sender, 'Pique Sirisanthana <pique@punspace.com>')
        self.assertEqual(message.subject, 'Thank You for Subscribing to Pun Space')


class TestSubscriberListHandler(BaseTestHandler):

    def test_list_subscribers(self):
        subscriber_adele = Subscriber(key_name=self.subscriber_adele_kwargs['email'], **self.subscriber_adele_kwargs)
        subscriber_adele.put()
        subscriber_bono = Subscriber(key_name=self.subscriber_bono_kwargs['email'], **self.subscriber_bono_kwargs)
        subscriber_bono.put()

        response = self.testapp.get('/api/subscribers')
        self.assertEqual(response.status_int, 200)
        self.assertEqual(response.content_type, 'application/json')

        subscriber_dicts = json.loads(response.normal_body)
        self.assertEqual(len(subscriber_dicts), 2)
        self.assertEqualSubscriberAdeleDict(subscriber_dicts[0])
        self.assertEqualSubscriberBonoDict(subscriber_dicts[1])

    def test_list_subscribers__no_subscribers(self):
        response = self.testapp.get('/api/subscribers')
        self.assertEqual(response.status_int, 200)
        self.assertEqual(response.content_type, 'application/json')

        subscriber_dicts = json.loads(response.normal_body)
        self.assertEqual(subscriber_dicts, [])

    def test_list_subscribers__one_subscriber(self):
        subscriber_adele = Subscriber(key_name=self.subscriber_adele_kwargs['email'], **self.subscriber_adele_kwargs)
        subscriber_adele.put()

        response = self.testapp.get('/api/subscribers')
        self.assertEqual(response.status_int, 200)
        self.assertEqual(response.content_type, 'application/json')

        subscriber_dicts = json.loads(response.normal_body)
        self.assertEqual(len(subscriber_dicts), 1)
        self.assertEqualSubscriberAdeleDict(subscriber_dicts[0])


class TestSubscriberCreateHandler(BaseTestHandler):

    def test_create_subscriber(self):
        response = self.testapp.post_json('/api/subscribers', self.subscriber_adele_kwargs)
        self.assertEqual(response.status_int, 201)
        self.assertEqual(response.content_type, 'application/json')

        subscriber_dict = json.loads(response.normal_body)
        self.assertEqualSubscriberAdeleDict(subscriber_dict)

        self.assertEqual(Subscriber.all().count(), 1)
        subscriber = Subscriber.get_by_key_name('adele@punspace.com')
        self.assertEqualSubscriberAdele(subscriber)

        messages = self.mail_stub.get_sent_messages(to='adele@punspace.com')
        self.assertEqual(1, len(messages))
        self.assertEqualMessageSubscribe(messages[0])

    def test_create_subscriber__only_email(self):
        response = self.testapp.post_json('/api/subscribers', {
            'email': 'adele@punspace.com',
        })
        self.assertEqual(response.status_int, 201)
        self.assertEqual(response.content_type, 'application/json')

        subscriber_dict = json.loads(response.normal_body)
        self.assertEqual(subscriber_dict['email'], 'adele@punspace.com')
        self.assertEqual(subscriber_dict['first_name'], None)
        self.assertEqual(subscriber_dict['last_name'], None)

        self.assertEqual(Subscriber.all().count(), 1)
        subscriber = Subscriber.get_by_key_name('adele@punspace.com')
        self.assertEqual(subscriber.email, 'adele@punspace.com')
        self.assertEqual(subscriber.first_name, None)
        self.assertEqual(subscriber.last_name, None)

        messages = self.mail_stub.get_sent_messages(to='adele@punspace.com')
        self.assertEqual(1, len(messages))
        self.assertEqualMessageSubscribe(messages[0])

    def test_create_subscriber__no_email(self):
        response = self.testapp.post_json('/api/subscribers', {}, status=400)
        self.assertEqual(response.status_int, 400)
        self.assertEqual(response.content_type, 'application/json')
        self.assertEqual(json.loads(response.normal_body), 'Error 400 Bad Request: Email is required.')
        self.assertEqual(Subscriber.all().count(), 0)

    def test_create_subscriber__invalid_email(self):
        response = self.testapp.post_json('/api/subscribers', {
            'email': 'adele',
        }, status=400)
        self.assertEqual(response.status_int, 400)
        self.assertEqual(response.content_type, 'application/json')
        self.assertEqual(json.loads(response.normal_body), 'Error 400 Bad Request: Email is invalid.')
        self.assertEqual(Subscriber.all().count(), 0)

    def test_create_subscriber__overwrite_subscriber(self):
        subscriber = Subscriber(
            key_name='adele@punspace.com',
            email='adele@punspace.com',
            first_name='',
            last_name='',
        )
        subscriber.put()

        response = self.testapp.post_json('/api/subscribers', self.subscriber_adele_kwargs)
        self.assertEqual(response.status_int, 201)
        self.assertEqual(response.content_type, 'application/json')

        subscriber_dict = json.loads(response.normal_body)
        self.assertEqualSubscriberAdeleDict(subscriber_dict)

        self.assertEqual(Subscriber.all().count(), 1)
        subscriber = Subscriber.get_by_key_name('adele@punspace.com')
        self.assertEqualSubscriberAdele(subscriber)

        messages = self.mail_stub.get_sent_messages(to='adele@punspace.com')
        self.assertEqual(1, len(messages))
        self.assertEqualMessageSubscribe(messages[0])
