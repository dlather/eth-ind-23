import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Testimoni from "./Testimoni";
import { REVIEWS, STORIES_BY_STRING, TRUSTED_BY_CUSTOMERS_STRING } from "./constants";
import { motion } from "framer-motion";

const Reviews = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="pt-12 pb-4 bg-base-100" id={REVIEWS}>
      <ScrollAnimationWrapper childrens={undefined} className={undefined}>
        <motion.h3
          variants={scrollAnimation}
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium text-base-content leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
        >
          {TRUSTED_BY_CUSTOMERS_STRING}
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="text-center text-base-content mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
        >
          {STORIES_BY_STRING}
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="w-full flex flex-col py-12">
        <motion.div variants={scrollAnimation}>
          <Testimoni />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Reviews;
