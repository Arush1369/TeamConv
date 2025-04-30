/**
 * Converts a temperature from Celsius to Fahrenheit
 * @param celsius Temperature in Celsius
 * @returns Temperature in Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

/**
 * Converts a temperature from Fahrenheit to Celsius
 * @param fahrenheit Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5/9;
}

/**
 * Converts a temperature from Celsius to Kelvin
 * @param celsius Temperature in Celsius
 * @returns Temperature in Kelvin
 */
export function celsiusToKelvin(celsius: number): number {
  return celsius + 273.15;
}

/**
 * Converts a temperature from Kelvin to Celsius
 * @param kelvin Temperature in Kelvin
 * @returns Temperature in Celsius
 */
export function kelvinToCelsius(kelvin: number): number {
  return kelvin - 273.15;
}

/**
 * Converts a temperature from Fahrenheit to Kelvin
 * @param fahrenheit Temperature in Fahrenheit
 * @returns Temperature in Kelvin
 */
export function fahrenheitToKelvin(fahrenheit: number): number {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

/**
 * Converts a temperature from Kelvin to Fahrenheit
 * @param kelvin Temperature in Kelvin
 * @returns Temperature in Fahrenheit
 */
export function kelvinToFahrenheit(kelvin: number): number {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

/**
 * Validates if a temperature in Celsius is above absolute zero
 * @param celsius Temperature in Celsius
 * @returns True if valid, false otherwise
 */
export function isValidCelsius(celsius: number): boolean {
  return celsius >= -273.15;
}

/**
 * Validates if a temperature in Fahrenheit is above absolute zero
 * @param fahrenheit Temperature in Fahrenheit
 * @returns True if valid, false otherwise
 */
export function isValidFahrenheit(fahrenheit: number): boolean {
  return fahrenheit >= -459.67;
}

/**
 * Validates if a temperature in Kelvin is above absolute zero
 * @param kelvin Temperature in Kelvin
 * @returns True if valid, false otherwise
 */
export function isValidKelvin(kelvin: number): boolean {
  return kelvin >= 0;
}
