import React from "react";

import { GoFileMedia } from "react-icons/go";
import { IoBriefcaseOutline, IoMailOutline } from "react-icons/io5";
import { BsChatLeftQuote, BsInfoSquare } from "react-icons/bs";
import { GiLeafSkeleton } from "react-icons/gi";
import Link from "next/link";

const HeaderLinks = ({ mediaClasses }: { mediaClasses: string }) => {
  return (
    <div
      className={`list-none ${mediaClasses} gap-4 md:gap-10 justify-center items-center p-5`}
    >
      <li>
        <Link href={""}>
          <BsInfoSquare size={32} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <GoFileMedia size={32} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <IoBriefcaseOutline size={32} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <BsChatLeftQuote size={32} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <GiLeafSkeleton size={32} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <IoMailOutline size={32} />
        </Link>
      </li>
    </div>
  );
};

export default HeaderLinks;
