import { ArrowUp10 } from "lucide-react";

interface ConversionResultProps {
  convertedTemperatures: {
    celsius?: number;
    fahrenheit?: number;
    kelvin?: number;
  };
  sourceUnit: "celsius" | "fahrenheit" | "kelvin";
}

export default function ConversionResult({ 
  convertedTemperatures, 
  sourceUnit 
}: ConversionResultProps) {
  // Get target units to display (all except source unit)
  const getTargetUnits = () => {
    const allUnits = ["celsius", "fahrenheit", "kelvin"] as const;
    return allUnits.filter(unit => unit !== sourceUnit);
  };

  // Get unit symbol
  const getUnitSymbol = (unit: string) => {
    switch (unit) {
      case "celsius": return "°C";
      case "fahrenheit": return "°F";
      case "kelvin": return "K";
      default: return "";
    }
  };

  const targetUnits = getTargetUnits();
  
  return (
    <div className="bg-neutral-100 rounded-lg p-5 mb-6">
      <p className="text-neutral-300 text-sm mb-3">Converted Temperature</p>
      
      {targetUnits.map((unit) => (
        <div className="flex justify-between items-center mb-3 last:mb-0" key={unit}>
          <div>
            <p className="text-neutral-400 text-sm capitalize">{unit}</p>
            <div className="flex items-end mt-1">
              <span className="text-2xl font-medium text-neutral-400">
                {convertedTemperatures[unit]?.toFixed(2)}
              </span>
              <span className="text-lg text-neutral-300 ml-1">
                {getUnitSymbol(unit)}
              </span>
            </div>
          </div>
          <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-sm">
            <ArrowUp10 className="text-primary h-5 w-5 transform rotate-90" />
          </div>
        </div>
      ))}
    </div>
  );
}
