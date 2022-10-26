from flask import (
    Flask,
    jsonify,
    render_template,
    send_from_directory,
    request,
)
import random 
import replicate

api = Flask(__name__)
REPLICATE_API_TOKEN = "579c90212aa863e9577ad4a9fcd30d962c8f7b89"


@api.route("/api/predict", methods=["POST"])
def predict():
    body = request.get_json()
    prompt = body['prompt']
    model = replicate.models.get("stability-ai/stable-diffusion")
    version = model.versions.get(
        "a826166bdfbd1c12981a2e914120aa8c19ab2b5474ff8c70f4e2923e6d6596cc"
    )
    
    # Create repliation prediction object
    prediction = replicate.predictions.create(
            version=version,
            input={
                "text":prompt,
                "grid": '1',
            },
    )
    return jsonify({"prediction_id": prediction.id})

@api.route("/api/predict/<prediction_id>", methods=["GET"])
def get_prediction(prediction_id):
    prediction = replicate.predictions.get(prediction_id)
    output = None
    print(prediction)
    
    if prediction.output:
        print('Prediction output', prediction.output)
        import time
        time.sleep(5)
    return jsonify({"output": prediction.output, "status": prediction.status})