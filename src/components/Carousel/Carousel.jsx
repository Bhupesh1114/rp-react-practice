import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Carousel.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Carousel = () => {
  const ref = useRef(null);

  const timmer = useRef(null);

  const style = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url('https://i.pinimg.com/originals/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg')",
  };

  const goToNextSlide = () => {
    gsap.to(".swiper .description-wrapper", 2, {
      y: 1000,
      ease: "power4.out",
      delay: 0.1,
    });

    gsap.to(".swiper .bgImageWrapper", 2, { "clip-path": "inset(36% 31% 34% 32%)" });

    if (ref.current !== null && ref.current.swiper !== null) {
      gsap.to(".swiper .description-wrapper", 1.8, {
        y: 0,
        ease: "power4.out",
        delay: 1.2,
      });
      

      setTimeout(() => {
        ref.current.swiper.slideNext();
      }, 1200);

      setTimeout(() => {
        gsap.to(".swiper .bgImageWrapper", 2, { "clip-path": "inset(0% 0% 0% 1%)" });
      }, 2400);
    }
  };

  const goToPreviousSlide = () => {
    gsap.to(".swiper .description-wrapper", 2, {
      y: -1000,
      ease: "power4.out",
      delay: 0.1,
    });
    gsap.to(".swiper .bgImageWrapper", 2, { "clip-path": "inset(36% 31% 34% 32%)" });
    if (ref.current !== null && ref.current.swiper !== null) {
      gsap.to(".swiper .description-wrapper", 1.8, {
        y: 0,
        ease: "power4.out",
        delay: 1.2,
      });
      setTimeout(() => {
        ref.current.swiper.slidePrev();
      }, 1200);
      setTimeout(() => {
        gsap.to(".swiper .bgImageWrapper", 2, { "clip-path": "inset(0% 0% 0% 1%)" });
      }, 2400);
    }
  };

  // const startAutoPlay = () => {
  //   if (timmer.current === null) {
  //     timmer.current = setInterval(() => {
  //       goToNextSlide();
  //       console.log("Go");
  //     }, autoPlaySlide);
  //     return () => clearInterval(timmer.current);
  //   }
  // };

  useEffect(() => {
    gsap.to(".swiper .description-wrapper", 1, {
      y: 0,
      ease: "power4.out",
      delay: 0,
    });

    gsap.to(".swiper .bgImageWrapper", 0, { "clip-path": "inset(0% 0% 0% 1%)" });

    // startAutoPlay();
  }, []);

  // const stopSlider = () => {
  //   console.log("Stop");
  //   clearInterval(timmer.current);
  //   timmer.current = null;
  // };

  // const startSlider = () => {
  //   setAutoPlaySlide(7500);
  //   startAutoPlay();
  // };

  return (
    <div>
      <Swiper
        ref={ref}
        slidesPerView={1}
        loop={true}
        //  autoplay={{
        //   delay: 5000
        // }}
        pagination={{
          type: "fraction",
        }}
        speed={2000}
        direction={"vertical"}
        allowTouchMove={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <h3 className="heading">Success Stories</h3>
        {new Array(10).fill(1).map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="textContainer">
                <div className="description-container">
                  <div className="description-wrapper">
                    <h1 className="description">
                      Changing the lifes of 17K kids
                    </h1>
                    <a
                      href=""
                      className="operationSmile"
                      aria-label="operation smile"
                    >
                      Operation Smile &gt;
                    </a>
                  </div>
                </div>
              </div>
              <div className="bgImageWrapper">
                <div className="bgImage" style={style}></div>
              </div>
            </SwiperSlide>
          );
        })}
        <a className="viewMore" href="" aria-label="view more">
          View all<span className="logo"> &gt;</span>
        </a>
        <div className="swiper-btns">
          <button
            className="prev-btn"
            onClick={goToPreviousSlide}
            aria-label="previous slide"
          >
            {" "}
            &lt;
          </button>
          <button
            className="next-btn"
            onClick={goToNextSlide}
            aria-label="next slide"
          >
            &gt;
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
