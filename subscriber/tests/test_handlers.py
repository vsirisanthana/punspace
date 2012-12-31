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

    def tearDown(self):
        self.testbed.deactivate()


class TestSubscriberCreateHandler(BaseTestHandler):

    def test_create_subscriber(self):
        response = self.testapp.post_json('/api/subscribers', {
            'email': 'adele@punspace.com',
            'first_name': 'Adele',
            'last_name': 'Adkins',
        })
        self.assertEqual(response.status_int, 201)
        self.assertEqual(response.content_type, 'application/json')

        subscriber_dict = json.loads(response.normal_body)
        self.assertEqual(subscriber_dict['email'], 'adele@punspace.com')
        self.assertEqual(subscriber_dict['first_name'], 'Adele')
        self.assertEqual(subscriber_dict['last_name'], 'Adkins')

        subscriber = Subscriber.get(subscriber_dict['key'])
        self.assertEqual(subscriber.email, 'adele@punspace.com')
        self.assertEqual(subscriber.first_name, 'Adele')
        self.assertEqual(subscriber.last_name, 'Adkins')

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

        subscriber = Subscriber.get(subscriber_dict['key'])
        self.assertEqual(subscriber.email, 'adele@punspace.com')
        self.assertEqual(subscriber.first_name, None)
        self.assertEqual(subscriber.last_name, None)

    def test_create_subscriber__no_email(self):
        response = self.testapp.post_json('/api/subscribers', {}, status=400)
        self.assertEqual(response.status_int, 400)
        self.assertEqual(response.content_type, 'application/json')
        self.assertEqual(json.loads(response.normal_body), 'Error 400 Bad Request: Email is required.')

    def test_create_subscriber__invalid_email(self):
        response = self.testapp.post_json('/api/subscribers', {
            'email': 'adele',
        }, status=400)
        self.assertEqual(response.status_int, 400)
        self.assertEqual(response.content_type, 'application/json')
        self.assertEqual(json.loads(response.normal_body), 'Error 400 Bad Request: Email is invalid.')