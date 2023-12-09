import React from "react";

const ButtonPrimary = ({ children, addClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "btn-primary btn py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
