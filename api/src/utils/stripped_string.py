"""Utility Function for Stripping Whitespace in Database String"""
from api import db
from sqlalchemy.types import TypeDecorator


class StrippedString(TypeDecorator):

    impl = db.String

    def process_bind_param(self, value, dialect):
        # In case you have nullable string fields and pass None
        return value.strip() if value else value

    def copy(self, **kw):
        return StrippedString(self.impl.length)