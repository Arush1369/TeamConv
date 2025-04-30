import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TemperatureInputProps {
  temperature: string;
  onChange: (value: string) => void;
  currentUnit: "celsius" | "fahrenheit" | "kelvin";
  error: string | null;
}

export default function TemperatureInput({ 
  temperature, 
  onChange, 
  currentUnit, 
  error 
}: TemperatureInputProps) {
  // Get the appropriate unit symbol
  const getUnitSymbol = () => {
    switch (currentUnit) {
      case "celsius": return "°C";
      case "fahrenheit": return "°F";
      case "kelvin": return "K";
      default: return "";
    }
  };

  return (
    <div className="mb-6">
      <Label htmlFor="temperature" className="block text-sm font-medium text-neutral-300 mb-1">
        Enter Temperature
      </Label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <Input
          type="number"
          id="temperature"
          className="block w-full py-3 px-4 text-lg rounded-md border-2 border-neutral-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="0"
          value={temperature}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <span className="text-neutral-300 pr-4 text-lg font-medium">
            {getUnitSymbol()}
          </span>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
