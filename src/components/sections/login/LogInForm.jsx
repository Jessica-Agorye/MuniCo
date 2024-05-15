import { useState } from "react";
import { useForm } from "react-hook-form";

const LogInForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setData(data);
    setTimeout(
      () => {
        setIsSubmitted(true);
      },
      1000
    );
  };

  return (
    <section className="absolute bg-neutral-200   w-96 h-96 flex  justify-center ">
      {isSubmitted ? (
        <p> Form Submitted</p>
      ) : (
        <div className=" register leading-10">
          <div>
            <h1 className=" text-4xl mt-6">Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <label htmlFor="username"> Username: </label>
              <input
                placeholder=" Enter Username"
                className="mb-6"
                type="text"
                {...register("username")}
              />

              <br></br>

              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: true,
                  maxLength: 8,
                })}
              />

              <br></br>

              <button type="submit" className="px-6 mt-10 bg-black text-white">
                <span>submit</span>
              </button>
            </form>
          </div>

          <div>
            <p className=" text-lg text-white">Data: {JSON.stringify(data)}</p>
          </div>
          <p>
            forgot password? <a href="#">click here</a>
          </p>
        </div>
      )}
    </section>
  );
};

export default LogInForm;
