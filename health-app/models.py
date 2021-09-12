from CalculatorApp import db

class Mod(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symbol = db.Column(db.String(10), unique=True, nullable=False)
    name = db.Column(db.String(20), unique=True, nullable=False)
    mw = db.Column(db.Float, unique=False, nullable=False)

    def __repr__(self):
        return f"Modification('{self.symbol}', '{self.name}', '{self.mw}')"
