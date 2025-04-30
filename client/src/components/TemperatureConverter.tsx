import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import UnitToggle from "./UnitToggle";
import ConversionResult from "./ConversionResult";
import ActionButtons from "./ActionButtons";
import TemperatureInfo from "./TemperatureInfo";
import { Card, CardContent } from "@/components/ui/card";
import { 
  celsiusToFahrenheit, 
  fahrenheitToCelsius, 
  celsiusToKelvin,
  fahrenheitToKelvin,
  kelvinToCelsius,
  kelvinToFahrenheit,
  isValidCelsius,
  isValidFahrenheit,
  isValidKelvin
} from "@/lib/temperatureUtils";

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState<string>("");
  const [currentUnit, setCurrentUnit] = useState<"celsius" | "fahrenheit" | "kelvin">("celsius");
  const [error, setError] = useState<string | null>(null);
  
  // Derived state for the conversion results
  const convertedTemperatures = calculateConversions();
  
  function calculateConversions() {
    // Return default values if temperature is empty or invalid
    if (!temperature || isNaN(Number(temperature))) {
      return getDefaultConversions();
    }
    
    const tempValue = parseFloat(temperature);
    
    // Validate temperature based on current unit
    if (!validateTemperature(tempValue)) {
      return getDefaultConversions();
    }
    
    // Calculate conversions based on the current unit
    return calculateAllConversions(tempValue);
  }
  
  function validateTemperature(value: number): boolean {
    // Check if the temperature is valid for the current unit
    switch (currentUnit) {
      case "celsius":
        if (value < -273.15) {
          setError("Temperature below absolute zero (-273.15°C)");
          return false;
        }
        return true;
      case "fahrenheit":
        if (value < -459.67) {
          setError("Temperature below absolute zero (-459.67°F)");
          return false;
        }
        return true;
      case "kelvin":
        if (value < 0) {
          setError("Temperature below absolute zero (0K)");
          return false;
        }
        return true;
      default:
        return true;
    }
  }
  
  function getDefaultConversions() {
    // Return default values based on the current unit
    switch (currentUnit) {
      case "celsius":
        return {
          fahrenheit: 32,
          kelvin: 273.15
        };
      case "fahrenheit":
        return {
          celsius: 0,
          kelvin: 273.15
        };
      case "kelvin":
        return {
          celsius: -273.15,
          fahrenheit: -459.67
        };
      default:
        return {};
    }
  }
  
  function calculateAllConversions(value: number) {
    // Calculate conversions to all other units based on the current unit
    switch (currentUnit) {
      case "celsius":
        return {
          fahrenheit: celsiusToFahrenheit(value),
          kelvin: celsiusToKelvin(value)
        };
      case "fahrenheit":
        return {
          celsius: fahrenheitToCelsius(value),
          kelvin: fahrenheitToKelvin(value)
        };
      case "kelvin":
        return {
          celsius: kelvinToCelsius(value),
          fahrenheit: kelvinToFahrenheit(value)
        };
      default:
        return {};
    }
  }
  
  const handleTemperatureChange = (value: string) => {
    setTemperature(value);
    setError(null);
    
    // Validate input
    if (value && isNaN(Number(value))) {
      setError("Please enter a valid temperature");
    } else if (value) {
      const tempValue = parseFloat(value);
      
      if (currentUnit === "celsius" && !isValidCelsius(tempValue)) {
        setError("Temperature below absolute zero (-273.15°C)");
      } else if (currentUnit === "fahrenheit" && !isValidFahrenheit(tempValue)) {
        setError("Temperature below absolute zero (-459.67°F)");
      } else if (currentUnit === "kelvin" && !isValidKelvin(tempValue)) {
        setError("Temperature below absolute zero (0K)");
      }
    }
  };
  
  const handleUnitChange = (unit: "celsius" | "fahrenheit" | "kelvin") => {
    if (unit !== currentUnit) {
      setCurrentUnit(unit);
      setError(null);
      
      // Re-validate with new unit
      if (temperature) {
        const tempValue = parseFloat(temperature);
        if (unit === "celsius" && !isValidCelsius(tempValue)) {
          setError("Temperature below absolute zero (-273.15°C)");
        } else if (unit === "fahrenheit" && !isValidFahrenheit(tempValue)) {
          setError("Temperature below absolute zero (-459.67°F)");
        } else if (unit === "kelvin" && !isValidKelvin(tempValue)) {
          setError("Temperature below absolute zero (0K)");
        }
      }
    }
  };
  
  const handleClear = () => {
    setTemperature("");
    setError(null);
  };
  
  const handleConvert = () => {
    // The conversion happens automatically whenever temperature or unit changes
    // This function mainly validates the input
    if (!temperature) {
      setError("Please enter a temperature");
      return;
    }
    
    if (isNaN(Number(temperature))) {
      setError("Please enter a valid temperature");
      return;
    }
  };
  
  return (
    <Card className="rounded-xl shadow-lg p-6 w-full max-w-md">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-medium text-neutral-400">Temperature Converter</h1>
          <p className="text-neutral-300 mt-2">Convert between Celsius, Fahrenheit, and Kelvin with ease</p>
        </div>
        
        <TemperatureInput 
          temperature={temperature}
          onChange={handleTemperatureChange}
          currentUnit={currentUnit}
          error={error}
        />
        
        <UnitToggle 
          currentUnit={currentUnit}
          onUnitChange={handleUnitChange}
        />
        
        <ConversionResult 
          convertedTemperatures={convertedTemperatures}
          sourceUnit={currentUnit}
        />
        
        <ActionButtons 
          onClear={handleClear}
          onConvert={handleConvert}
        />
        
        <TemperatureInfo />
      </CardContent>
    </Card>
  );
}
