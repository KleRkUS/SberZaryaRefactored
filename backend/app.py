import os
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json

from ach_utils import check_achievements

app = Flask(__name__)
app.config.from_object(__name__)
cors = CORS(app)

SEC_CHKPT = 30

@app.route('/write_brushing/<uid>', methods=['POST'])
def write_brushing(uid):
    response_object = {'status': 'success'}
    request_data = request.get_json()
    local_datetime = request_data["datetime"]
    checkpoints = request_data["checkpoints"]
    has_tongue = request_data["has_tongue"]
    if not os.path.exists(f"user_db/{uid}.csv"):
        user_data = pd.DataFrame({
            "local_datetime": [local_datetime], 
            "duration": [int(checkpoints) * SEC_CHKPT],
            "has_tongue": [has_tongue],
        })
    else:
        user_data = pd.read_csv(f"user_db/{uid}.csv")
        user_data = user_data.append({
            "local_datetime": local_datetime, 
            "duration": int(checkpoints) * SEC_CHKPT,
            "has_tongue": has_tongue,
        }, ignore_index=True)
    user_data.to_csv(f"user_db/{uid}.csv", index=False)
    return jsonify(response_object)

@app.route('/achievements/<uid>', methods=['GET', 'POST'])
def achievements(uid):
    response_object = {'status': 'success'}
    if request.method == 'POST':
        request_data = request.get_json()
        local_datetime = request_data["datetime"]
        ach_response = check_achievements(uid, local_datetime)
        response_object["result"] = ach_response
        return jsonify(response_object)
    elif request.method == 'GET':
        ach_asset = json.load(open("./assets/achievements.json"))
        if not os.path.exists(f"user_db/{uid}_a.csv"):
            response_object['status'] = 'no_such_uid'
        else:
            user_ach = pd.read_csv(f"user_db/{uid}_a.csv")
            response_object["user_ach"] = list(user_ach.T.to_dict().values())
            response_object["descr"] = ach_asset
        return jsonify(response_object)

# VOVA
# @app.route('/achievments/<uid>', methods=['GET'])
# # вернуть json по всем ачивментам юзера

# @app.route('/history/<uid>', methods=['GET'])
# # вернуть последние 10 чисток в json

# @app.route('/recommendation', methods=['GET'])
# # сэмплировать рандомную рекомендацию из recommendations.json 