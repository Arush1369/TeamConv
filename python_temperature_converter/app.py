"""
Temperature Converter - Python Flask Application
"""
from flask import Flask, render_template, request, jsonify
from python_temperature_converter import utils

app = Flask(__name__)

@app.route('/')
def index():
    """Render the main page"""
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    """
    API endpoint to convert temperature between different units
    
    Expected JSON input:
    {
        "temperature": "23.5",
        "from_unit": "celsius",  # One of: celsius, fahrenheit, kelvin
    }
    
    Returns JSON with converted values to other units
    """
    data = request.get_json()
    
    if not data or 'temperature' not in data or 'from_unit' not in data:
        return jsonify({
            "error": "Invalid request. Must include temperature and from_unit."
        }), 400
    
    # Get temperature value
    try:
        temp = float(data['temperature'])
    except ValueError:
        return jsonify({
            "error": "Temperature must be a valid number."
        }), 400
    
    # Validate from_unit
    from_unit = data['from_unit'].lower()
    if from_unit not in ['celsius', 'fahrenheit', 'kelvin']:
        return jsonify({
            "error": "from_unit must be one of: celsius, fahrenheit, kelvin"
        }), 400
    
    # Validate temperature based on unit
    if from_unit == 'celsius' and not utils.is_valid_celsius(temp):
        return jsonify({
            "error": "Temperature below absolute zero (-273.15°C)"
        }), 400
    elif from_unit == 'fahrenheit' and not utils.is_valid_fahrenheit(temp):
        return jsonify({
            "error": "Temperature below absolute zero (-459.67°F)"
        }), 400
    elif from_unit == 'kelvin' and not utils.is_valid_kelvin(temp):
        return jsonify({
            "error": "Temperature below absolute zero (0K)"
        }), 400
    
    # Calculate conversions
    result = {}
    
    if from_unit == 'celsius':
        result = {
            "fahrenheit": utils.celsius_to_fahrenheit(temp),
            "kelvin": utils.celsius_to_kelvin(temp)
        }
    elif from_unit == 'fahrenheit':
        result = {
            "celsius": utils.fahrenheit_to_celsius(temp),
            "kelvin": utils.fahrenheit_to_kelvin(temp)
        }
    elif from_unit == 'kelvin':
        result = {
            "celsius": utils.kelvin_to_celsius(temp),
            "fahrenheit": utils.kelvin_to_fahrenheit(temp)
        }
    
    return jsonify({
        "from": {
            "value": temp,
            "unit": from_unit
        },
        "converted": result
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)