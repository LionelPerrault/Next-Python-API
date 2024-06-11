import os
from dotenv import load_dotenv
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS

from controllers.auth_routes import auth_blueprint
from controllers.gpt_routes import gpt_blueprint
from controllers.payment_routes import payment_blueprint
from controllers.users_routes import users_blueprint
from controllers.orgs_routes import orgs_blueprint

app = Flask(__name__)
bcrypt = Bcrypt(app)
origins = [
    "*",
    "http://localhost/",
    "http://localhost:8000/",
    "http://localhost:3000/*",  # Add any other origins you want to allow
    "https://your-frontend-domain.com/",
]

CORS(
    app,
    origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.register_blueprint(auth_blueprint, url_prefix="/auth")
app.register_blueprint(gpt_blueprint, url_prefix="/gpt")
app.register_blueprint(payment_blueprint, url_prefix="/payment")
app.register_blueprint(users_blueprint, url_prefix="/users")
app.register_blueprint(orgs_blueprint, url_prefix="/organizations")

load_dotenv(".env")
HOST = str(os.getenv("HOST"))
PORT = int(os.getenv("PORT"))
print(HOST, PORT)
if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=True)
