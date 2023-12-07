"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import CampSite from "./CampSite";
import Image from "next/image";
const Camp = () => {
  return (
    <section className="lg:max-container group  flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <Swiper
        navigation={true}
        spaceBetween={50}
        modules={[Navigation]}
        className="mySwiper  flex w-full h-[340px] items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] "
      >
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="putuk truno camp"
            subtitle="prigen pasuruan"
            peopleJoined="50+ joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Mountain View"
            subtitle="Somewhere in the wild"
            peopleJoined="50+ joined"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flexEnd mt-10 p-6  lg:-mt-60 lg:mr-[12px] lg:group-hover:mt-4   transition-all duration-150  ">
        <div className="bg-green-50  text-white   p-8 lg:max-w-[400px] xl:max-w-[734px] lg:rounded-5xl xl:px-16 xl:py-18 relative  z-10  rounded-3xl  w-full overflow-hidden ">
          <h2 className="capitalize  regular-24 md:regular-32  2xl:regular-64 ">
            {" "}
            <strong>Feeling Lost</strong> and not knowing the way
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 ">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
