from pymongo import MongoClient

client = MongoClient(
    "mongodb+srv://sohamingle:JaSWrwZEyoMC85OB@cluster0.np0rypr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
db = client["ava_gpt"]
