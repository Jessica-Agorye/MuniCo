import IMAGES from "../../images/Images";

const AboutPage = () => {
  return (
    <div className="  mt-60 mb-8 ">
      <div className="grid grid-cols-2  gap-12 w-[70%] h-[700px] bg-slate-100 mx-auto">
        <div className=" font-semibold text-2xl mt-10 ml-8 text-black leading-10">
          <p className="mt-8">High-Fashion - Luxury is a LifeStyle.</p>
          <p>Get access to the latest trends.</p>
          <p className=" text-lg mt-8">
            Subscribe to get instant updates when <br></br> new pieces arrive.{" "}
          </p>

          <form
            action=""
            className="  text-base   border border-none mt-10 rounded-md"
          >
            <input type="text" className="  h-8" />
            <button className="  h-8  w-28 bg-black text-white">
              Subscribe
            </button>
          </form>
        </div>

        <div className="  mt-20 mb-10">
          <img src={IMAGES.heroImg3} alt="" className="w-[50%] pb-2" />
          <img src={IMAGES.heroImg3} alt="" className="w-[50%] ml-32 pb-2" />
          <img src={IMAGES.heroImg3} alt="" className="w-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
