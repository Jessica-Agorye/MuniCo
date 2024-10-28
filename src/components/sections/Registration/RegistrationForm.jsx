import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const proceedRegistration = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        toast.success("Registered Successfully");
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Failed: " + err.message);
      });
  };

  return (
    <section className="absolute bg-neutral-200 w-96 h-96 flex justify-center">
      <div className="register leading-10">
        <div>
          <h1 className="text-4xl mt-6">Sign In</h1>
          <form className="mt-6" onSubmit={proceedRegistration}>
            <label htmlFor="username">Username:</label>
            <input
              className="text-center mb-10"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
              value={data.username}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              className="text-center"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              value={data.email}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              className="text-center"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              value={data.password}
            />
            <br />
            <button type="submit" className="px-6 mt-10 bg-black text-white">
              <span>Submit</span>
            </button>
          </form>
        </div>
        <p>
          Forgot password? <a href="#">Click here</a>
        </p>
      </div>
      <ToastContainer />
    </section>
  );
};

export default RegistrationForm;
