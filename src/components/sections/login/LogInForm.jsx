import IMAGES from "../../images/Images";
import { useForm } from "react-hook-form";

const LogInForm = () => {
  //   const [formData, setFormData] = useState({
  //     userName: "",
  //     password: "",
  //   });

  //   const [errors, setErrors] =
  //     useState <
  //     {
  //       email: string,
  //       password: string,
  //     } >
  //     {
  //       email: "",
  //       password: "",
  //     };

  //   function handleChange(e: React.FormEvent) {
  //     e.preventDefault();

  //     setErrors({ email: "", password: "" });

  // // manual validation

  //   if (!email.includes("@")) {
  //     setErrors({ ...errors, email: "Email must include @" });
  //     return;

  //   }

  //     if (password.length < 8) {
  //       setErrors({ ...errors, password: "password must be atleast 8 chars" });
  //       return;
  //     }

  //     console.log("form submitted")
  //   }
  // }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    console.log(data);
  }

  return (
    <section className="absolute bg-neutral-400 ">
      <div className=" register leading-10">
        <div>
          <h1 className=" text-4xl mt-10">Sign In</h1>
          <form onSubmit={handleSubmit(submitHandler)} className="">
            <label htmlFor="username"> Username: </label>
            <input
              {...register("username", {
                required: true,
              })}
              type="text"
              placeholder="Username"
              id="username"
              className="mb-8"
            />

            {/* {errors.username && (
              <div className=" font-normal text-neutral-900">
                {errors.username}
              </div>
            )} */}

            <br></br>

            <label htmlFor="password"> Password: </label>
            <input
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              type="password"
              id="password"
            />

            <br></br>

            <button className="px-6 py-2 mt-10 bg-blue-200">Log In</button>
          </form>
        </div>
        <p>
          forgot password? <a href="#">click here</a>
        </p>
      </div>
    </section>
  );
};

export default LogInForm;
