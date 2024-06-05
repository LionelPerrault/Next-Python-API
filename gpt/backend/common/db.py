from pymongo import MongoClient

client = MongoClient(
    "mongodb+srv://ava_user:avaproject123$@clusterava.q5spv3z.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAva"
)
db = client["ava_gpt"]
