from flask import Flask
from flask_sqlalchemy import SQLAlchemy

import toml

api = Flask(__name__)

# Connection credential
# NOTE: it tries to read from config.toml in ./backend before connecting the database
# if the file does not exist, THE CONNECTION WILL FAIL
info = toml.load("./config.toml")
print(info)

db_sql = info["database"]["db_sql"]
db_host = info["database"]["db_host"]
db_user = info["database"]["db_user"]
db_pass = info["database"]["db_pass"]
db_name = info["database"]["db_name"]

# configuring our database uri
api.config["SQLALCHEMY_DATABASE_URI"] = "{0}://{1}:{2}@{3}/{4}".format(db_sql, db_user, db_pass, db_host, db_name)

db = SQLAlchemy(api)

# The ORM class
class User(db.Model):
    __tablename__ = "user"

    userId = db.Column(db.Integer, primary_key=True, nullable=False)
    userName = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)

# NOTE: This is an api for TEST
@api.route("/testMySQL")
def test():
    users = db.session.execute(db.select(User)).scalars()
    user_names = []
    for user in users:
        user_names.append(user.userName)

    response_body = {
        "result": user_names
    }
    
    return response_body

# The api to validate the username and the password
@api.route("/login", methods = ["POST", "GET"])
def vaildate():
    # TODO: Validate the username and the password
    print("TEST")

    response_body = {
        "username": "natsunoyoru",
        "password": "elec5620saikou"
    }
    
    return response_body

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "YUNQI SHA",
        "about" :"Hello! The basic setup for the website is done :)"
    }

    return response_body