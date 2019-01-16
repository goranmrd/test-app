
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Variation(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    label = db.Column(db.String(250))
    keyword = db.Column(db.String)

    @property
    def to_dict(self):
        return dict(
            id=self.id,
            label=self.label,
            keyword=self.keyword)
