import React from "react";

function SkillProgressBar({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) {
  return (
    <div className="skill-progress-bar">
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default SkillProgressBar;
