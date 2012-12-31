import os

import jinja2
import webapp2

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates')),
    variable_start_string='{$',
    variable_end_string='$}',
)

class AppHandler(webapp2.RequestHandler):

    def get(self):
        template = jinja_environment.get_template('comingsoon.html')
        self.response.out.write(template.render())
