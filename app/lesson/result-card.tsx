import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-400 border-orange-400",
        variant === "hearts" && "bg-rose-400 border-rose-400"
      )}
    >
      <div
        className={cn(
          "text-white p-1.5 rounded-t-xl font-bold text-center uppercase text-xs",
          variant === "hearts" && "bg-red-500",
          variant === "points" && "bg-orange-500"
        )}
      >
        {variant === "hearts" ? "Heart Left" : "Total XP"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
          variant === "hearts" && "text-red-500",
          variant === "points" && "text-orange-500"
        )}
      >
        <Image
          src={variant === "hearts" ? "/heart.svg" : "/points.svg"}
          alt="Icon"
          height={30}
          width={30}
          className="mr-1.5"
        />
      </div>
    </div>
  );
};
