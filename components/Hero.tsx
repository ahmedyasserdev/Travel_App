import Image from "next/image";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="max-container    gap-20 md:gap-28 flex-col flex   py-10 pb-32  lg:py-20 lg:flex-row ">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] "
        />
        <h1 className="bold-52 lg:bold-88 ">Putuk Truno Camp Area</h1>
        <p className="regural-16 mt-5 lg:max-w-[520px] text-gray-30">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regural-16 lg:regural-20 ml-1 ">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 w-[268px]  flex-col  rounded-3xl gap-8 bg-green-90 px-7 py-8 ">
          <div className="flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" width={24} height={24} alt="close" />
            </div>
            <p className="bold-20 text-white">Aguas Calientas</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
