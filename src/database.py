from pymongo import MongoClient

uri = "mongodb+srv://trajarshi:vthacks@vthacks.td4ds.mongodb.net/?retryWrites=true&w=majority&appName=VTHacks"
# Create a new client and connect to the server
client = MongoClient(uri)
db = client.vthacks
col = db.vthacks

# Send a dictionary "doc" to mongodb
def send(doc):
    col.insert_one(doc)

# Retrieve all cards and send an array of dict
def get():
    posts = []
    for i in col.find():
        posts.append(i)
    return posts
