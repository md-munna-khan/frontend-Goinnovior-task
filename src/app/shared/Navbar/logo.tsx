import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo.png"
    alt="Company logo"
    width={120}
    height={67}
    className=""
    priority
  />
);

