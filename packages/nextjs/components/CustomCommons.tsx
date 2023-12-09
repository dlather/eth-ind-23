import { ReactNode } from "react";

const CustomCenter = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen flex items-center justify-center">{children}</div>;
};

const CustomLoading = () => {
  return (
    <CustomCenter>
      <span className="loading loading-ring loading-md"></span>
    </CustomCenter>
  );
};

export { CustomCenter as default, CustomLoading };
