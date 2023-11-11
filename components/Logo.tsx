"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <span
      className="font-bold text-neutral-700 text-3xl cursor-pointer"
      onClick={() => {
        router.refresh();
      }}
    >
      Arman
    </span>
  );
};

export default Logo;
