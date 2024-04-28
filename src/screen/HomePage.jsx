import { Menubar, Hero, AboutPage } from "../components";

const HomePage = () => {
  return (
    <>
      <div className="  bg-slate-100">
        <Menubar />

        <Hero />
      </div>

      <AboutPage />
    </>
  );
};

export default HomePage;
