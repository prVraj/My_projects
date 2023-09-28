from flask import Flask, render_template, request

app = Flask(__name__)
from chatbot import create_chatbot

chatbot = create_chatbot()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form['user_input']
    response = chatbot.respond(user_input)
    return response

if __name__ == '__main__':
    app.run(debug=True)