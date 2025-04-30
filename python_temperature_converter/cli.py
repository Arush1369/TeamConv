"""
Command Line Interface for Temperature Converter
"""
import argparse
from python_temperature_converter import utils

def main():
    """
    Main function for the CLI temperature converter
    """
    parser = argparse.ArgumentParser(description='Convert temperatures between Celsius, Fahrenheit, and Kelvin')
    parser.add_argument('temperature', type=float, help='The temperature value to convert')
    parser.add_argument('--from', dest='from_unit', choices=['celsius', 'fahrenheit', 'kelvin'], 
                        default='celsius', help='The unit to convert from (default: celsius)')
    parser.add_argument('--to', dest='to_unit', choices=['celsius', 'fahrenheit', 'kelvin', 'all'],
                        default='all', help='The unit to convert to (default: all)')
    
    args = parser.parse_args()
    
    # Validate temperature based on from_unit
    valid = True
    if args.from_unit == 'celsius' and not utils.is_valid_celsius(args.temperature):
        print(f"Error: Temperature {args.temperature}°C is below absolute zero (-273.15°C)")
        valid = False
    elif args.from_unit == 'fahrenheit' and not utils.is_valid_fahrenheit(args.temperature):
        print(f"Error: Temperature {args.temperature}°F is below absolute zero (-459.67°F)")
        valid = False
    elif args.from_unit == 'kelvin' and not utils.is_valid_kelvin(args.temperature):
        print(f"Error: Temperature {args.temperature}K is below absolute zero (0K)")
        valid = False
    
    if not valid:
        return
    
    # Convert temperature
    if args.to_unit == 'all':
        # Convert to all other units
        if args.from_unit == 'celsius':
            fahrenheit = utils.celsius_to_fahrenheit(args.temperature)
            kelvin = utils.celsius_to_kelvin(args.temperature)
            print(f"{args.temperature}°C = {fahrenheit:.2f}°F = {kelvin:.2f}K")
        elif args.from_unit == 'fahrenheit':
            celsius = utils.fahrenheit_to_celsius(args.temperature)
            kelvin = utils.fahrenheit_to_kelvin(args.temperature)
            print(f"{args.temperature}°F = {celsius:.2f}°C = {kelvin:.2f}K")
        elif args.from_unit == 'kelvin':
            celsius = utils.kelvin_to_celsius(args.temperature)
            fahrenheit = utils.kelvin_to_fahrenheit(args.temperature)
            print(f"{args.temperature}K = {celsius:.2f}°C = {fahrenheit:.2f}°F")
    else:
        # Convert to specific unit
        result = None
        from_symbol = '°C' if args.from_unit == 'celsius' else ('°F' if args.from_unit == 'fahrenheit' else 'K')
        to_symbol = '°C' if args.to_unit == 'celsius' else ('°F' if args.to_unit == 'fahrenheit' else 'K')
        
        if args.from_unit == 'celsius' and args.to_unit == 'fahrenheit':
            result = utils.celsius_to_fahrenheit(args.temperature)
        elif args.from_unit == 'celsius' and args.to_unit == 'kelvin':
            result = utils.celsius_to_kelvin(args.temperature)
        elif args.from_unit == 'fahrenheit' and args.to_unit == 'celsius':
            result = utils.fahrenheit_to_celsius(args.temperature)
        elif args.from_unit == 'fahrenheit' and args.to_unit == 'kelvin':
            result = utils.fahrenheit_to_kelvin(args.temperature)
        elif args.from_unit == 'kelvin' and args.to_unit == 'celsius':
            result = utils.kelvin_to_celsius(args.temperature)
        elif args.from_unit == 'kelvin' and args.to_unit == 'fahrenheit':
            result = utils.kelvin_to_fahrenheit(args.temperature)
        else:
            # Same unit, no conversion needed
            result = args.temperature
        
        print(f"{args.temperature}{from_symbol} = {result:.2f}{to_symbol}")

if __name__ == '__main__':
    main()