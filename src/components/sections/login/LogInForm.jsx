// import { useRef, useState, useEffect, useContext } from "react";
// import AuthContext from "../../../context/AuthProvider";
// import axios from "../../../api/axios";

// const LOGIN_URL

// const LogInForm = () => {
//   const { setAuth } = useContext(AuthContext);
//   const userRef = useRef();
//   const errRef = useRef();

//   // add three pieces of state user, password and error

//   const [user, setUser] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSucces] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useRef(() => {
//     setErrMsg("");
//   }, [user, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // prevents the default behavior of the form which reloads the page.

//     setUser("");
//     setPwd("");
//     setSucces(true);
//   };

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1> You are logged in</h1>

//           <br />

//           <p>
//             <a href="#"> Go to Home</a>
//           </p>
//         </section>
//       ) : (
//         <section className=" ml-10">
//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}{" "}
//           </p>
//           <h1 className="mt-10 text-2xl  font-semibold">Sign In</h1>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <label htmlFor="username">Username:</label>
//             <input
//               className="border border-gray-500"
//               type="text"
//               id="username" // must match htmlfor
//               ref={userRef}
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               required
//             />

//             <br />
//             <label htmlFor="password">Password:</label>
//             <input
//               className="border border-gray-500"
//               type="password"
//               id="password" // must match htmlfor
//               onChange={(e) => setPwd(e.target.value)}
//               value={pwd}
//               required
//             />

//             <br />

//             <button className=" px-4 py-2 bg-black text-white">Sign In</button>
//           </form>

//           <p className="mt-10">
//             Need an Account? <br />
//             <span className="line">
//               <a href="#">Sign Up</a>
//             </span>
//           </p>
//         </section>
//       )}
//     </>
//   );
// };
// export default LogInForm;
