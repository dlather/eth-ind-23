import React, { ReactNode, useState } from "react";
import { RainbowKitCustomConnectButton } from "../scaffold-eth";

const BaseHeader = ({ children }: { children: ReactNode }) => {
  const [open, setopen] = useState(false);
  return (
    <div className="bg-white w-full md:max-w-lg mx-auto">
      <div className="drawer">
        <input
          id="my-drawer-3"
          type="checkbox"
          checked={open}
          onChange={() => setopen(true)}
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-white-500">
            <div className="flex-none lg:px-2 mx-2">
              <RainbowKitCustomConnectButton />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseHeader;
