import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import BaseHeader from "~~/components/Layout/BaseHeader";
import PlayBottomNav from "~~/components/playLayout/bottomNav";
import PlayHomeComponent from "~~/components/playLayout/home/playHome";
import PlayMyMatches from "~~/components/playLayout/myMatches/playMyMatches";

const playComponents = [
  <PlayHomeComponent key="PlayHomeComponent" />,
  <PlayMyMatches key="my-matches" />,
  //   <PlayWallet key="play-wallet" />,
];

const PlayPage: NextPageWithLayout = () => {
  const [selectedIndex, setselectedIndex] = useState(0);
  return (
    <div className="w-full md:max-w-lg mx-auto">
      {playComponents[selectedIndex]}
      <PlayBottomNav selectedIndex={selectedIndex} setselectedIndex={setselectedIndex} />
    </div>
  );
};

PlayPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseHeader>{page}</BaseHeader>;
  //   return page;
};

export default PlayPage;
