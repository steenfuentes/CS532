from flask_testing import TestCase
from api.config import TestingConfig

from api import db
from api import create_app



class BaseTestCase(TestCase):
    """ Base Tests """

    def create_app(self):
        app = create_app(TestingConfig)
        print('test1')
        return app

    def setUp(self):
        db.create_all(app = create_app(TestingConfig))
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()