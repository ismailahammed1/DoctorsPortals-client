// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const handleLogin = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-[700px] flex justify-center items-center ">
      <div className=" bg-white h-[600px] text-black w-96 p-7">
        <h2 className="text-xl">SignUp</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              className="input input-bordered w-ful"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-700 text-left" role="alert">
                Name Address is required
              </p>
            )}
          </div>

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
              {...register("password", {
                required: "password  is required",
                minLength: {
                  value: 6,
                  message: "password minimum 6 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message: "strong password",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-red-700 text-left" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="SignUp"
              placeholder="Type here"
              className="bg-slate-500 input-primary w-full btn btn-accent"
            />
          </div>
          <label className="label hover:underline">
            <Link to="/login" className="text-black">
              Already have an Account
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
