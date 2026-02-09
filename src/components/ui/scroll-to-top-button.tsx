import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton({ onClick }: { onClick: () => void }) {
  return (
    <Button 
      onClick={onClick}
      className="group relative overflow-hidden bg-primary hover:bg-primary/90 w-12 h-12 p-0" 
      size="icon"
    >
      <ArrowUp size={20} strokeWidth={2.5} aria-hidden="true" className="text-white transition-transform duration-300 group-hover:scale-110" />
    </Button>
  );
}
