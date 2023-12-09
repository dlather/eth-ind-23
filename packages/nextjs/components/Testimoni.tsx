import React, { RefObject, useRef } from "react";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import { testimoniList } from "./constants";
import Slider from "react-slick";

const Testimoni = () => {
  const settings = {
    dots: false,
    customPaging: function () {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef: RefObject<Slider> = useRef<Slider>(null);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <>
      <Slider {...settings} arrows={false} ref={sliderRef} className="flex items-stretch justify-items-stretch">
        {testimoniList.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch card bg-base-100" key={index}>
            <div className="border-2 border-base-300 hover:border-primary transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image src={listTestimonis.image} height={50} width={50} alt="Icon People" />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-primary font-medium capitalize">{listTestimonis.name}</p>
                    <p className="text-sm text-base-content capitalize">{listTestimonis.city}</p>
                  </div>
                </div>
                {/* <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm text-base-content">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div> */}
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-10 w-10 rounded-full bg-base-100 border-primary border hover:bg-primary hover:text-base-100 transition-all text-primary cursor-pointer"
            onClick={goToPrevSlide}
          >
            <ArrowBack className="h-4 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-10 w-10 rounded-full bg-base-100 border-primary border hover:bg-primary hover:text-base-100 transition-all text-primary cursor-pointer"
            onClick={goToNextSlide}
          >
            <ArrowNext className="h-4 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
