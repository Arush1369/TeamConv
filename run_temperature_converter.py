"""
Main script to run the Temperature Converter Flask application
"""
import os
from python_temperature_converter.app import app

if __name__ == '__main__':
    # Get port from environment variable or use 8000 as default
    port = int(os.environ.get('PORT', 8000))
    # Run the Flask application
    app.run(host='0.0.0.0', port=port, debug=True)