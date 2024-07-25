import { useState } from "react";
const LogInForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const proceedLogin = (e) => {
    e.preventDefault();
  };

  return (
    <section className="absolute bg-neutral-200   w-96 h-96 flex  justify-center ">
      <div className=" register leading-10">
        <div>
          <h1 className=" text-4xl mt-6">Sign In</h1>

          <form className="mt-6" onSubmit={proceedLogin}>
            <label htmlFor="username"> Username: </label>
            <input type="text" name="usename" placeholder=" Enter Username" />

            <br></br>

            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />

            <br></br>

            <button type="submit" className="px-6 mt-10 bg-black text-white">
              <span>submit</span>
            </button>
          </form>
        </div>

        <div>
          <p className=" text-lg text-white">Data:</p>
        </div>
        <p>
          forgot password? <a href="#">click here</a>
        </p>
      </div>
    </section>
  );
};

export default LogInForm;
