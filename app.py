from flask import Flask, send_from_directory, request, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
import openai

app = Flask(__name__)
CORS(app) #comment this on deployment
api = Api(app)

@app.route('/gendesc', methods = ['GET'])
def generate_description():
    
    args = request.args
    title = args['title'] + "\n\n###\n\n"

    description = openai.Completion.create(
    api_key="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",
    model="curie:ft-beacon-career-services-2022-04-27-00-29-18",
    prompt=title,
    stop = "\n\n###\n\n",
    max_tokens = 256
    )

    desc_text = description["choices"][0]["text"]

    return jsonify(desc_text)