import nltk
from nltk.chat.util import Chat, reflections

patterns = [
    # Add your chatbot patterns and responses here
    (r'hello|hi|hey', ['Hello!', 'Hi there!', 'Hey!']),
    (r'how are you', ['I am good, thank you.', 'I am doing well.']),
    (r'what is your name', ["I'm a chatbot.", "I don't have a name."]),
    (r'bye|goodbye', ['Goodbye!', 'See you later.']),
    (r'tell me a joke', ['Why did the chicken cross the road? To get to the other side!']),
    (r'what time is it', ['I am sorry, I cannot tell the time.😢']),
    (r'who created you', ['I was created by a team of developers.']),
    (r'how can you help', ['I can provide information, answer questions, or just chat with you.']),
    (r'what is your purpose', ['My purpose is to assist and provide information.']),
    (r'thanks|thank you', ['You\'re welcome!👍', 'No problem.👍']),
]

def create_chatbot():
    return Chat(patterns, reflections)