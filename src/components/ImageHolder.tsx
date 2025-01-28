import profile_image from "@/assets/profile-img.jpg";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";

const ImageHolder = ({ imageClassses }: { imageClassses: string }) => {
  return (
    <div className="w-full bg-[#050816] py-6 flex flex-col justify-center items-center">
      <div
        className={` mb-4 lg:mx-4 rounded-full overflow-hidden ${imageClassses}`}
      >
        <Image src={profile_image} className="w-full h-full" alt="My image" />
      </div>

      <div className="flex flex-col items-center text-white gap-1 justify-center mb-4">
        <h3 className="text-sm md:text-lg lg:text-xl font-bold tracking-widest">
          JOHN OCHIENG&apos; ODUYA
        </h3>
        <p className="text-xs lg:text-sm lg:tracking-wider">
          FullStack Web Developer / Statistician
        </p>
      </div>

      <div className="flex list-none text-white justify-center gap-2 lg:gap-6">
        <li>
          <a href="#">
            <FaSquareFacebook size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagramSquare size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/johnochieng/">
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a href="https://x.com/oduyajohn66">
            <FaXTwitter size={24} />
          </a>
        </li>
        <li>
          <a href="https://github.com/OchiengMorris">
            <FaSquareGithub size={24} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default ImageHolder;
