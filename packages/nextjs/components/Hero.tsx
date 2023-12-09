import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { ABOUT_PAGE } from "./constants";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import ReactTextTransition, { presets } from "react-text-transition";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [textIndex, setTextIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);
  const texts = ["By ", "For"];
  const events = ["Politics", "Crypto", "Cricket", "Football", "ESports", "Tennis", "Horse Racing", "NFL"];

  useEffect(() => {
    const textinterval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      setEventIndex(prevIndex => (prevIndex + 1) % events.length);
    }, 2000);

    return () => {
      clearInterval(textinterval);
    };
  }, []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id={ABOUT_PAGE}>
      <ScrollAnimationWrapper childrens={undefined} className={undefined}>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-2 py-2 sm:py-16 pb-12"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Betting Platform
              <ReactTextTransition springConfig={presets.gentle} style={{ margin: "0 8px" }} inline>
                <strong className="text-primary">{texts[textIndex]}</strong>
              </ReactTextTransition>
              users on{" "}
              <ReactTextTransition springConfig={presets.gentle} style={{ margin: "0 8px" }} inline>
                <strong className="text-primary">{events[eventIndex]}</strong>
              </ReactTextTransition>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Web3 Platform, for global, no-limits betting with best odds and lowest fees.
            </p>
            <Link href={"./providers"}>
              <ButtonPrimary addClass={undefined} onClick={undefined}>
                Get Started
              </ButtonPrimary>
            </Link>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image src="/assets/socialfriends.svg" alt="Social Friends" quality={100} width={612} height={383} />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
