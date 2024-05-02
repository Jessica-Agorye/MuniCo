import IMAGES from "../../images/Images";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faTags } from "@fortawesome/free-solid-svg-icons";

import Aos from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-12">
      <div data-aos="fade-down">
        <p className=" text-4xl text-center">SHOP</p>
        <div className="flex justify-center text-3xl mt-4">
          <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </div>
      </div>

      <div className=" text-center mt-10  mb-10">
        <p className=" text-2xl  leading-10">
          Shop Fashionable Items - Elevate Your Shopping Experience at Our
          <br></br> Sophisticated Boutique.
        </p>

        <p className="mt-6 text-xl  text-slate-400">
          20% off your first purchase.
        </p>
      </div>

      <div className=" relative">
        <div className="absolute right-[345px]  top-0 text-6xl mt-4  ">
          <FontAwesomeIcon icon={faTags}> </FontAwesomeIcon>
        </div>
        <div className="grid grid-cols-3  gap-4 mx-auto  w-1/2">
          <img src={IMAGES.blacKbag} alt="" className=" h-96 " />
          <img src={IMAGES.perfume} alt="" className=" h-96 " />
          <img src={IMAGES.shoe} alt="" className=" h-96 " />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
