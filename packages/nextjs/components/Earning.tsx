import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { EARNINGS, HOW_TO_EARN as howToEarnData } from "./constants";
import { motion } from "framer-motion";

const Earning = () => {
  const { items } = howToEarnData;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="pt-12 pb-12 bg-primary" id={EARNINGS}>
      <h1 className="text-3xl mb-20 lg:text-4xl xl:text-5xl font-medium text-white leading-normal flex items-center justify-center">
        3 Ways to Earn
      </h1>
      {items.map((item, index) => {
        return (
          <div key={"learning" + index} className="w-full bg-light pt-12 p-4">
            <div className="rounded-xl bg-base-100 p-4 pb-2 pt-0 text-left shadow-xl">
              <div className="flex pb-0 mb-0">
                <div className="ml-8 mt-18 h-12 w-12 -translate-x-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-accent shadow-lg shadow-accent text-accent-content flex">
                  {item.index}
                </div>
              </div>
              <ScrollAnimationWrapper childrens={undefined} className={undefined}>
                <div className="w-full flex justify-center">
                  <div className="bg-base-100 lg:mx-8 lg:flex justify-between items-start lg:max-w-5xl rounded-lg">
                    <motion.div className="lg:w-1/3" variants={scrollAnimation}>
                      <div className="lg:scale-110 flex items-center justify-center  lg:mb-8 bg-cover lg:h-full rounded-b-none lg:rounded-lg">
                        <img height={200} width={300} className="object-contain lg:h-40" src={item.imageUrl} />
                      </div>
                    </motion.div>
                    <motion.div
                      className="pt-6 md:pt-0 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 mb-10  rounded-t-none lg:rounded-lg"
                      variants={scrollAnimation}
                    >
                      <h2 className="text-3xl text-base-content font-bold">{item.title}</h2>
                      <p className="mt-4 text-base-content">{item.text}</p>
                    </motion.div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Earning;
