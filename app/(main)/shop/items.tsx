"use client";
import { useTransition } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { refillHearts } from "@/actions/user-progress";
// import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();
  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < 50) {
      return;
    }

    startTransition(() => {
      refillHearts()
        .then(() => toast.success("Hearts successfully refilled !"))
        .catch(() => toast.error("Something went wrong !"));
    });
  };

  return (
    <ul className="w-full">
      <li className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/heart.svg" alt="Heart" width={60} height={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || hearts === 5 || points < 50}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image src="/points.svg" alt="Points" height={20} width={20} />
              <p>50</p>
            </div>
          )}
        </Button>
      </li>
    </ul>
  );
};
export default Items;
