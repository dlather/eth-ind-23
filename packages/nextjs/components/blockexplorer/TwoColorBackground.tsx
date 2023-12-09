import React from "react";

const TwoColorDivWithSlantLink: React.FC = () => {
  return (
    <div className="justify-center items-center">
      <div className="relative w-full ">
        <div
          className="bg-primary relative"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 40%)",
            paddingTop: "calc(100% / (100 / 25))",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TwoColorDivWithSlantLink;
