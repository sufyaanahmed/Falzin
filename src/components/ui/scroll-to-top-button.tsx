import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton({ onClick }: { onClick: () => void }) {
  return (
    <Button 
      onClick={onClick}
      className="group relative overflow-hidden bg-primary hover:bg-primary/90" 
      size="lg"
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0 text-white font-bold uppercase tracking-widest text-xs">
        Back to Top
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
        <ArrowUp size={16} strokeWidth={2} aria-hidden="true" className="text-white" />
      </i>
    </Button>
  );
}
