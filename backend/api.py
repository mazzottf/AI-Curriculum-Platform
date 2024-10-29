from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/check-answer', methods=['POST'])
def check_answer():
    data = request.json
    return jsonify({"correct": True})  # Simple response for now

if __name__ == '__main__':
    app.run(port=5000)
