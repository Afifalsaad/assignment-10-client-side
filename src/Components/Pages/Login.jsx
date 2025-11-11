import React, { use, useState } from "react";
import { Link } from "react-router";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const { createUser, googleLogIn , user } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUser(email, password)
      .then(() => {
        console.log("Login Successful");
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  const handleGoogleLogin = () => {
    googleLogIn()
    .then(()=>{
        console.log('user')
    })
    .catch(error=>console.log(error));
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left mb-3">
          <h1 className="text-5xl font-bold">Login now!</h1>
          {
            user && <h1>User is here</h1>
          }
        </div>
        <div className="card bg-[#f1fefe] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  //   value={userEmail}
                  onChange={(e) => {
                    // setUserEmail(e.target.value);
                    e.target.reset();
                  }}
                  // required
                />

                {/* Password */}
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    onFocus='border'
                  />
                  <button
                    onClick={handleShowPassword}
                    className="btn border-none btn-xs absolute top-2 right-2">
                    {showPassword ? (
                      <IoMdEyeOff className="text-xl" />
                    ) : (
                      <IoMdEye className="text-xl" />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="btn btn-neutral border-none bg-black text-white mt-4 mb-2">
                  Login
                </button>
                <p className="link link-hover underline">Forgot password?</p>
              </fieldset>
            </form>
            <button
              onClick={() => handleGoogleLogin()}
              className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
