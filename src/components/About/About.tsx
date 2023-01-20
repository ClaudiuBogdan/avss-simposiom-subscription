import { FC } from "react";
import Image from "next/image";
import AboutImg from "../../../public/assets/images/about.jpeg";

export const About: FC = () => {
  return (
    <Image
      className="object-cover object-center w-full h-full"
      src={AboutImg}
      alt="mockup"
    />
  );
};
