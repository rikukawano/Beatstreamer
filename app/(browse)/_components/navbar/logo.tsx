import Link from "next/link";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/beatstreamer-logo.svg"
            alt="Beatstreamer Logo"
            height="40"
            width="40"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Beatstreamer</p>
          <p className="text-xs text-muted-foreground">
            Tune in to live mixing sessions
          </p>
        </div>
      </div>
    </Link>
  );
};
