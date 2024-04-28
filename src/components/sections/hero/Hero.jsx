import IMAGES from "../../images/Images";
const Hero = () => {
  return (
    <div className=" mt-36">
      <div className=" flex  justify-around ">
        {" "}
        <img src={IMAGES.heroImg1} alt="" className=" w-[30%]" />
        <img src={IMAGES.heroImg2} alt="" className=" w-[30%]" />
        <img src={IMAGES.heroImg3} alt="" className=" w-[30%]" />
      </div>
    </div>
  );
};

export default Hero;
