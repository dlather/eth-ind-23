import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-primary text-primary bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary hover:text-white transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
