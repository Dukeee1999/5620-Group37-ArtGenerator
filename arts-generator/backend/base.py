from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "YUNQI SHA",
        "about" :"Hello! The basic setup for the website is done :)"
    }

    return response_body