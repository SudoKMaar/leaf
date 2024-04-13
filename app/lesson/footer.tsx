import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: string;
};

export const Footer = ({ status, onCheck, disabled, lessonId }: Props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");
  return (
    <footer
      className={cn(
        "lg:-h[140px] h-[100px] border-t-2",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100"
      )}
    >
      <div className="h-full px-6 lg:px-10 flex items-center justify-between max-w-[1140px] mx-auto">
        <div
          className={cn(
            "flex items-center justify-between text-2xl font-bold",
            status === "correct" && "text-green-500",
            status === "wrong" && "text-rose-500"
          )}
        >
          {status === "correct" && (
            <>
              <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
              Nicely done!
            </>
          )}
          {status === "wrong" && (
            <>
              <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
              Try again.
            </>
          )}
          {status === "completed" && (
            <Button
              size={isMobile ? "sm" : "lg"}
              onClick={() => (window.location.href = `/lesson/${lessonId}`)}
            >
              Practice again
            </Button>
          )}
        </div>
        <Button
          disabled={disabled}
          variant={status === "wrong" ? "danger" : "secondary"}
          size={isMobile ? "sm" : "lg"}
          className="ml-auto"
          onClick={onCheck}
        >
          {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
          {status === "completed" && "Continue"}
        </Button>
      </div>
    </footer>
  );
};
