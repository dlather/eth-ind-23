import React, { Dispatch, SetStateAction } from "react";
import { HomeIcon, TrophyIcon, WalletIcon } from "@heroicons/react/24/outline";

const bottomNavConfig = [
  {
    icon: <HomeIcon />,
    title: "Home",
  },
  {
    icon: <TrophyIcon />,
    title: "My Matches",
  },
  // {
  //   icon: <WalletIcon />,
  //   title: "Wallet",
  // },
];

const PlayBottomNav = ({
  selectedIndex,
  setselectedIndex,
}: {
  selectedIndex: number;
  setselectedIndex: Dispatch<SetStateAction<number>>;
}) => {
  const safeIndex = selectedIndex > bottomNavConfig.length - 1 ? 0 : selectedIndex;
  return (
    <div className="btm-nav w-full md:max-w-lg mx-auto">
      {bottomNavConfig.map((config, i) => {
        return (
          <button
            key={config.title}
            className={i === safeIndex ? "active text-primary" : ""}
            onClick={() => setselectedIndex(i)}
          >
            {React.cloneElement(config.icon, {
              className: i === safeIndex ? "w-6 h-6" : "w-5 h-5",
            })}
            <span className="btm-nav-label">{config.title}</span>
          </button>
        );
      })}
    </div>
  );
  return (
    <div className="btm-nav btm-nav-md">
      <button>
        <HomeIcon className="w-5 h-5" />
        <span className="btm-nav-label">Home</span>
      </button>
      <button className="active text-primary">
        <TrophyIcon className="w-6 h-6" />
        <span className="btm-nav-label">My Matches</span>
      </button>
      <button>
        <WalletIcon className="w-5 h-5" />
        <span className="btm-nav-label">Wallet</span>
      </button>
    </div>
  );
};

export default PlayBottomNav;
