import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className=" relative  cursor-pointer  ">
      <Image alt="" src="/images/startup.png"  width={40} height={40} objectFit="cover"/>
    </Link>
  );
};

export default Logo;