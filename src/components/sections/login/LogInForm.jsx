import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogInForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Corrected the variable name

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("proceed");

      // Adjusted URL to query users by username
      fetch(`http://localhost:3000/users?username=${data.username}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((users) => {
          // Assuming the response is an array of users
          if (users.length === 0) {
            toast.error("Invalid username");
          } else {
            const user = users[0];
            if (user.password === data.password) {
              toast.success("Login successful");
              navigate("/"); // Fixed the navigation method
            } else {
              toast.error("Invalid password");
            }
          }
        })
        .catch((err) => {
          toast.error("Login failed due to: " + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;

    if (data.username === "") {
      result = false;
      toast.warning("Please enter username");
    }

    if (data.password === "") {
      result = false;
      toast.warning("Please enter password");
    }

    return result;
  };

  return (
    <section className="absolute bg-neutral-200 w-96 h-96 flex justify-center">
      <div className="register leading-10">
        <div>
          <h1 className="text-4xl mt-6">Sign In</h1>
          <form className="mt-6" onSubmit={proceedLogin}>
            <label htmlFor="username">Username:</label>
            <input
              className="text-center mb-10"
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
              value={data.username}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              className="text-center"
              type="password"
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

export default LogInForm;
