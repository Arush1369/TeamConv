import { ArrowDown01, ArrowUp10, ThermometerSnowflake } from "lucide-react";

interface UnitToggleProps {
  currentUnit: "celsius" | "fahrenheit" | "kelvin";
  onUnitChange: (unit: "celsius" | "fahrenheit" | "kelvin") => void;
}

export default function UnitToggle({ 
  currentUnit, 
  onUnitChange 
}: UnitToggleProps) {
  return (
    <div className="flex rounded-lg mb-6 overflow-hidden border border-neutral-200">
      <button
        className={`flex-1 py-3 font-medium transition-colors flex items-center justify-center ${
          currentUnit === "celsius" 
            ? "bg-primary text-white" 
            : "bg-white text-neutral-400 hover:bg-neutral-100"
        }`}
        onClick={() => onUnitChange("celsius")}
      >
        <ArrowDown01 className="mr-2 h-4 w-4" />
        Celsius
      </button>
      <button
        className={`flex-1 py-3 font-medium transition-colors flex items-center justify-center ${
          currentUnit === "fahrenheit" 
            ? "bg-primary text-white" 
            : "bg-white text-neutral-400 hover:bg-neutral-100"
        }`}
        onClick={() => onUnitChange("fahrenheit")}
      >
        <ArrowUp10 className="mr-2 h-4 w-4" />
        Fahrenheit
      </button>
      <button
        className={`flex-1 py-3 font-medium transition-colors flex items-center justify-center ${
          currentUnit === "kelvin" 
            ? "bg-primary text-white" 
            : "bg-white text-neutral-400 hover:bg-neutral-100"
        }`}
        onClick={() => onUnitChange("kelvin")}
      >
        <ThermometerSnowflake className="mr-2 h-4 w-4" />
        Kelvin
      </button>
    </div>
  );
}
