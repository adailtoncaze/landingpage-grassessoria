'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay } from "swiper";
import Image from "next/image";

export const CarouselHeader = () => {
    return (
        <>
            <Swiper className="h-screen"
                spaceBetween={30}
                effect={"fade"} 
                speed={1000}           
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, EffectFade]}

            >
                <SwiperSlide>
                    <Image 
                       fill
                        src="/images/slide1.jpg"
                        alt="teste"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                       fill
                        src="/images/slide2.jpg"
                        alt="teste"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                       fill
                        src="/images/slide3.jpg"
                        alt="teste"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                       fill
                        src="/images/slide4.jpg"
                        alt="teste"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                       fill
                        src="/images/slide5.jpg"
                        alt="teste"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}