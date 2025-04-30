"""Temperature conversion utility functions"""

def celsius_to_fahrenheit(celsius):
    """
    Converts a temperature from Celsius to Fahrenheit
    
    Args:
        celsius (float): Temperature in Celsius
        
    Returns:
        float: Temperature in Fahrenheit
    """
    return (celsius * 9/5) + 32


def fahrenheit_to_celsius(fahrenheit):
    """
    Converts a temperature from Fahrenheit to Celsius
    
    Args:
        fahrenheit (float): Temperature in Fahrenheit
        
    Returns:
        float: Temperature in Celsius
    """
    return (fahrenheit - 32) * 5/9


def celsius_to_kelvin(celsius):
    """
    Converts a temperature from Celsius to Kelvin
    
    Args:
        celsius (float): Temperature in Celsius
        
    Returns:
        float: Temperature in Kelvin
    """
    return celsius + 273.15


def kelvin_to_celsius(kelvin):
    """
    Converts a temperature from Kelvin to Celsius
    
    Args:
        kelvin (float): Temperature in Kelvin
        
    Returns:
        float: Temperature in Celsius
    """
    return kelvin - 273.15


def fahrenheit_to_kelvin(fahrenheit):
    """
    Converts a temperature from Fahrenheit to Kelvin
    
    Args:
        fahrenheit (float): Temperature in Fahrenheit
        
    Returns:
        float: Temperature in Kelvin
    """
    return celsius_to_kelvin(fahrenheit_to_celsius(fahrenheit))


def kelvin_to_fahrenheit(kelvin):
    """
    Converts a temperature from Kelvin to Fahrenheit
    
    Args:
        kelvin (float): Temperature in Kelvin
        
    Returns:
        float: Temperature in Fahrenheit
    """
    return celsius_to_fahrenheit(kelvin_to_celsius(kelvin))


def is_valid_celsius(celsius):
    """
    Validates if a temperature in Celsius is above absolute zero
    
    Args:
        celsius (float): Temperature in Celsius
        
    Returns:
        bool: True if valid, False otherwise
    """
    return celsius >= -273.15


def is_valid_fahrenheit(fahrenheit):
    """
    Validates if a temperature in Fahrenheit is above absolute zero
    
    Args:
        fahrenheit (float): Temperature in Fahrenheit
        
    Returns:
        bool: True if valid, False otherwise
    """
    return fahrenheit >= -459.67


def is_valid_kelvin(kelvin):
    """
    Validates if a temperature in Kelvin is above absolute zero
    
    Args:
        kelvin (float): Temperature in Kelvin
        
    Returns:
        bool: True if valid, False otherwise
    """
    return kelvin >= 0