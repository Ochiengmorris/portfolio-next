import React from "react";

function LanguageProficiency({
  language,
  dotsFilled,
  totalDots,
  proficiency,
}: {
  language: string;
  dotsFilled: number;
  totalDots: number;
  proficiency: string;
}) {
  const dots = [];

  for (let i = 0; i < totalDots; i++) {
    dots.push(
      <span key={i} className={`dot ${i < dotsFilled ? "filled" : ""}`}></span>
    );
  }

  return (
    <div className="language-proficiency">
      <div className="language-label">{language}</div>
      <div className="dots-container">
        {dots}
        <span className="proficiency-label">{proficiency}</span>
      </div>
    </div>
  );
}

export default LanguageProficiency;
