import { RefreshCw, RotateCcw } from "lucide-react";

interface ActionButtonsProps {
  onClear: () => void;
  onConvert: () => void;
}

export default function ActionButtons({ 
  onClear, 
  onConvert 
}: ActionButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        className="py-3 px-4 bg-white border-2 border-neutral-200 rounded-lg text-neutral-400 font-medium hover:bg-neutral-100 transition-colors flex items-center justify-center"
        onClick={onClear}
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Clear
      </button>
      <button
        className="py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
        onClick={onConvert}
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Convert
      </button>
    </div>
  );
}
