// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();

  const from = location.state?.form?.pathname || "/";
  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result;
        console.log(user);
        navigate = (from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[700px] flex justify-center items-center ">
      <div className=" bg-white h-[600px] text-black w-96 p-7">
        <h2 className="text-xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-ful"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-700 text-left" role="alert">
                Email Address is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-ful"
              {...register("password", { required: "password  is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-red-700 text-left" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div>
            {loginError && (
              <p className="text-red-600">Wrong Email and Password</p>
            )}
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="login"
              placeholder="Type here"
              className="bg-slate-500 input-primary w-full btn btn-accent"
            />
          </div>
          <div className="text-left mt-2">
            <label className="label hover:underline">
              <Link to={"/"} className="label-text">
                Forget Password
              </Link>
            </label>
          </div>

          <p>Register</p>

          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <div>
            <label className="label hover:underline">
              <Link to="/signup" className="text-black">
                Create an Account
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
