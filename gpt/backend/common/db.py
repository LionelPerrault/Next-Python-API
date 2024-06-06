from pymongo import MongoClient

client = MongoClient(
    # "mongodb+srv://sohamingle:JaSWrwZEyoMC85OB@cluster0.np0rypr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    "mongodb+srv://ava_user:avaproject123$@clusterava.q5spv3z.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAva"
)

db = client["ava_gpt"]
