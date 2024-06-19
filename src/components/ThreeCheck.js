import Image from "next/image";
import React from "react";

export default function ThreeCheck() {
  return (
    <>
      <div className="h-[24px] w-[165.59px] text-center text-[17px]"></div>
      <div className="h-[24px] w-[165.59px] text-center text-[17px]">
        <Image
          src="/imgs/ic-check.png"
          alt="ic-check"
          width={19.5}
          height={19.5}
          objectFit="cover"
          className="mx-auto"
        />
      </div>
      <div className="h-[24px] w-[165.59px] text-center text-[17px]">
        <Image
          src="/imgs/ic-check.png"
          alt="ic-check"
          width={19.5}
          height={19.5}
          objectFit="cover"
          className="mx-auto"
        />
      </div>
      <div className="h-[24px] w-[165.59px] text-center text-[17px]">
        <Image
          src="/imgs/ic-check.png"
          alt="ic-check"
          width={19.5}
          height={19.5}
          objectFit="cover"
          className="mx-auto"
        />
      </div>
    </>
  );
}
