import os

import jinja2
import webapp2

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates')),
    variable_start_string='{$',
    variable_end_string='$}',
)

class AppHandler(webapp2.RequestHandler):

    def get(self, name):
        name = name if name else 'comingsoon.html'
        template = jinja_environment.get_template(name)
        self.response.out.write(template.render())
