// import profile_image from "@/assets/profile-img.jpg";
// import Image from "next/image";
// import { FaInstagramSquare } from "react-icons/fa";
// import {
//   FaLinkedin,
//   FaSquareFacebook,
//   FaSquareGithub,
//   FaXTwitter,
// } from "react-icons/fa6";

// const ImageHolder = ({ imageClassses }: { imageClassses: string }) => {
//   return (
//     <div className="w-full bg-[#050816] py-6 flex flex-col justify-center items-center">
//       <div
//         className={` mb-4 lg:mx-4 rounded-full overflow-hidden ${imageClassses}`}
//       >
//         <Image src={profile_image} className="w-full h-full" alt="My image" />
//       </div>

//       <div className="flex flex-col items-center text-white gap-1 justify-center mb-4">
//         <h3 className="text-sm md:text-lg lg:text-xl font-bold tracking-widest">
//           JOHN OCHIENG&apos; ODUYA
//         </h3>
//         <p className="text-xs lg:text-sm lg:tracking-wider">
//           FullStack Web Developer / Statistician
//         </p>
//       </div>

//       <div className="flex list-none text-white justify-center gap-2 lg:gap-6">
//         <li>
//           <a href="https://facebook.com" target="_blank">
//             <FaSquareFacebook size={24} />
//           </a>
//         </li>
//         <li>
//           <a href="https://instagram.com" target="_blank">
//             <FaInstagramSquare size={24} />
//           </a>
//         </li>
//         <li>
//           <a href="https://www.linkedin.com/in/johnochieng/" target="_blank">
//             <FaLinkedin size={24} />
//           </a>
//         </li>
//         <li>
//           <a href="https://x.com/oduyajohn66" target="_blank">
//             <FaXTwitter size={24} />
//           </a>
//         </li>
//         <li>
//           <a href="https://github.com/OchiengMorris" target="_blank">
//             <FaSquareGithub size={24} />
//           </a>
//         </li>
//       </div>
//     </div>
//   );
// };

// export default ImageHolder;
import profile_image from "@/assets/profile-img.jpg";
// import { neuButton } from "./Neum";
import { cn } from "@/lib/utils";
import { neuButton } from "@/sections/Neumo";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaSquareFacebook },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: FaInstagramSquare,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johnochieng/",
    Icon: FaLinkedin,
  },
  { label: "X (Twitter)", href: "https://x.com/oduyajohn66", Icon: FaXTwitter },
  {
    label: "GitHub",
    href: "https://github.com/OchiengMorris",
    Icon: FaSquareGithub,
  },
];

const ImageHolder = ({ imageClassses }: { imageClassses: string }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      {/* Nested depth: extruded ring -> inset-deep well -> portrait */}
      <div className="mb-6 rounded-full p-4 shadow-neu-extruded">
        <div className="rounded-full p-3 shadow-neu-inset-deep">
          <div className={cn("overflow-hidden rounded-full", imageClassses)}>
            <Image
              src={profile_image}
              className="h-full w-full object-cover"
              alt="John Ochieng' Oduya"
            />
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col items-center justify-center gap-1 text-center">
        <h3 className="font-display text-sm font-extrabold tracking-widest text-neu-fg md:text-lg lg:text-xl">
          JOHN OCHIENG&apos; ODUYA
        </h3>
        <p className="text-xs text-neu-muted lg:text-sm lg:tracking-wider">
          Web & Systems Developer / Statistician
        </p>
      </div>

      <ul className="flex list-none flex-wrap justify-center gap-4">
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={neuButton("icon")}
            >
              <Icon aria-hidden size={20} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageHolder;
