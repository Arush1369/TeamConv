import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TemperatureInfo() {
  return (
    <div className="mt-6 border-t border-neutral-200 pt-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="info">
          <AccordionTrigger className="text-primary font-medium">
            Temperature Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm text-neutral-300 space-y-2">
              <p>• <span className="font-medium">Absolute Zero:</span> -273.15°C / -459.67°F / 0K</p>
              <p>• <span className="font-medium">Freezing Point of Water:</span> 0°C / 32°F / 273.15K</p>
              <p>• <span className="font-medium">Boiling Point of Water:</span> 100°C / 212°F / 373.15K</p>
              <p>• <span className="font-medium">Room Temperature:</span> ~20-25°C / ~68-77°F / ~293-298K</p>
              <p className="mt-4 text-xs text-neutral-400">Note: Kelvin (K) is an absolute temperature scale with no negative values, starting at absolute zero (0K).</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
