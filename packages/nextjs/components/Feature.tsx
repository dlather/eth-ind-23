import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { FEATURES, PROBLEMS_CAROUSEL_DATA as carouselData } from "./constants";
import { motion } from "framer-motion";

const Feature = () => {
  const { items } = carouselData;
  return (
    <>
      <div id={FEATURES} className="bg-primary">
        <h1 className="text-3xl pt-10 pb-10 lg:text-4xl xl:text-5xl font-medium text-white leading-normal flex items-center justify-center">
          Features
        </h1>
      </div>
      <div key="features" className="carousel w-full carousel-center max-w-12 p-8 max-h-200 space-x-4 bg-primary">
        {items.map((item, index) => (
          <div
            key={"feature_slide" + index}
            id={"feature_slide" + index}
            className="carousel-item center relative w-full lg:w-3/4"
          >
            <ScrollAnimationWrapper childrens={undefined} className={undefined}>
              <div className="card lg:card-side bg-base-100 w-full h-full p-8 flex shadow-xl">
                <motion.div className="card-body text-clip flex-2 w-10px relative text-base-content">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.text}</p>
                </motion.div>
                <figure className="flex-none relative">
                  <Image
                    src={item.imageUrl}
                    className="object-contain h-200 lg:ml-20"
                    height={200}
                    width={300}
                    alt="Picture of the feature"
                  />
                </figure>
              </div>
            </ScrollAnimationWrapper>
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a
              href={"#feature_slide" + (index == 0 ? noOfItems : index - 1)}
              className="btn h-10 w-10 btn-circle bg-base-200 text-base-content"
            >
              ❮
            </a>
            <a
              href={"#feature_slide" + (index == noOfItems ? 0 : index + 1)}
              className="btn h-10 w-10 btn-circle bg-base-200 text-base-content"
            >
              ❯
            </a>
          </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Feature;
