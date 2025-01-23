import React from "react";

const Educationlist = () => {
  return (
    <div className="border border-muted-foreground/10 relative h-64 p-4 rounded-lg">
      <div className="border border-gray-300 w-0 h-5/6 absolute top-1/2 lg:left-1/2  -translate-x-1/2 -translate-y-1/2" />
      {/* highschool */}
      {/* <div className="absolute border top-[12.5%] lg:left-1/4 left-1/4 lg:-translate-x-1/4 -translate-x-[25%] bg-card shadow-md rounded-xl p-4 justify-center flex flex-col lg:items-end">
        <p className="text-muted-foreground text-xs">2015 - 2019</p>
        <p>Nyambaria HighSchool</p>
        <h2 className="font-semibold text-xs gap-1">Secondary School </h2>
      </div> */}

      <div className="absolute border top-[12.5%] lg:left-1/4 left-1/4 -translate-x-[37.5%] lg:-translate-x-2/4 bg-card shadow-md rounded-xl p-4 justify-center flex flex-col items-start">
        <p className="text-muted-foreground text-xs">2021 - 2024</p>
        <p>Moi University</p>
        <h2 className="font-semibold text-xs gap-1">Bsc Statistics</h2>
      </div>

      <div className="absolute top-[25%] lg:left-1/2  lg:-translate-x-1/2 -translate-x-1  rounded-full p-4 justify-center flex flex-col items-end">
        <div className="absolute top-1/2 lg:left-1/2 bg-gray-500 p-1.5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute top-[62.5%] lg:left-1/2  lg:-translate-x-1/2 -translate-x-1  rounded-full p-4 justify-center flex flex-col items-end">
        <div className="absolute top-1/2 lg:left-1/2 bg-gray-500 p-1.5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* University */}
      <div className="absolute border top-2/4 lg:left-2/4 left-1/4 -translate-x-[37.5%] lg:translate-x-2/4 bg-card shadow-md rounded-xl p-4 justify-center flex flex-col items-start">
        <p className="text-muted-foreground text-xs">2021 - 2024</p>
        <p>Moi University</p>
        <h2 className="font-semibold text-xs gap-1">Bsc Statistics</h2>
      </div>
    </div>
  );
};

export default Educationlist;
