import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CuteButtonProps = React.ComponentProps<typeof Button>;

export default function CuteButton({ children, className, ...props }: CuteButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        className,
        "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg active:scale-95 active:shadow-none transition-transform duration-150"
      )}>
      <div className="flex items-center">
        <StarIcon className="h-6 w-6 mr-2 animate-spin" />
        {children}
        <StarIcon className="h-6 w-6 ml-2 animate-spin" />
      </div>
    </Button>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
