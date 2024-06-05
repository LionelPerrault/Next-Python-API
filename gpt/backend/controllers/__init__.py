from flask_bcrypt import Bcrypt
import stripe
import os
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationSummaryMemory
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from twilio.rest import Client
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import UnstructuredExcelLoader

# Load environment variables from .env file
load_dotenv()
bcrypt = Bcrypt()
stripe.api_key = os.getenv("STRIPE_KEY")

twilio_client = Client(os.getenv("TWILIO_ACCOUNT_SID"), os.getenv("TWILIO_AUTH_TOKEN"))

# Get the OpenAI API key from the environment variables
openai_api_key = os.getenv("OPENAI_API_KEY")

# Check if the API key is available
#loader data
loader = UnstructuredExcelLoader(
    "Organizations.xlsx"
)
docs = loader.load()
#print(docs)

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1500,
    chunk_overlap=500,
)

documents = text_splitter.split_documents(docs)
# Store Data into ChromaDB
db = Chroma.from_documents(documents, OpenAIEmbeddings(disallowed_special=()))
retriever = db.as_retriever(
    search_type="mmr",
    search_kwargs={"k": 8},
)

llm = ChatOpenAI(openai_api_key=openai_api_key, model_name="gpt-4")
memory = ConversationSummaryMemory(
    llm=llm, memory_key="chat_history", return_messages=True
)
qa = ConversationalRetrievalChain.from_llm(llm, retriever=retriever, memory=memory)
