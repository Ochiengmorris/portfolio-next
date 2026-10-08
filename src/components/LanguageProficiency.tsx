// import React from "react";

// function LanguageProficiency({
//   language,
//   dotsFilled,
//   totalDots,
//   proficiency,
// }: {
//   language: string;
//   dotsFilled: number;
//   totalDots: number;
//   proficiency: string;
// }) {
//   const dots = [];

//   for (let i = 0; i < totalDots; i++) {
//     dots.push(
//       <span key={i} className={`dot ${i < dotsFilled ? "filled" : ""}`}></span>
//     );
//   }

//   return (
//     <div className="language-proficiency">
//       <div className="language-label">{language}</div>
//       <div className="dots-container">
//         {dots}
//         <span className="proficiency-label">{proficiency}</span>
//       </div>
//     </div>
//   );
// }

// export default LanguageProficiency;
import { cn } from "@/lib/utils";

type LanguageProficiencyProps = {
  language: string;
  dotsFilled: number;
  totalDots: number;
  proficiency: string;
};

const LanguageProficiency = ({
  language,
  dotsFilled,
  totalDots,
  proficiency,
}: LanguageProficiencyProps) => {
  return (
    <li className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div>
        <span className="font-semibold text-neu-fg">{language}</span>
        <span className="ml-2 text-sm capitalize text-neu-muted">
          {proficiency}
        </span>
      </div>

      <div
        role="img"
        aria-label={`${language}: ${dotsFilled} of ${totalDots}`}
        className="flex gap-1.5"
      >
        {Array.from({ length: totalDots }, (_, i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              i < dotsFilled
                ? "bg-neu-accent shadow-[2px_2px_4px_rgb(163,177,198,0.6),-2px_-2px_4px_rgba(255,255,255,0.5)]"
                : "shadow-[inset_2px_2px_3px_rgb(163,177,198,0.7),inset_-2px_-2px_3px_rgba(255,255,255,0.6)]",
            )}
          />
        ))}
      </div>
    </li>
  );
};

export default LanguageProficiency;
