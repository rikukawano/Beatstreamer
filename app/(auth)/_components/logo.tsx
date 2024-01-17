import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-white rounded-full">
        <Image
          src="/beatstreamer-logo.svg"
          alt="Beatstreamer Logo"
          width={220}
          height={220}
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-4xl font-semibold mt-2">Beatstreamer</p>
        <p className="text-xl text-muted-foreground">
          Tune in to live mixing sessions
        </p>
      </div>
    </div>
  );
};
