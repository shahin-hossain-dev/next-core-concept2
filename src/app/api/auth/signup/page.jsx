"use client";
import React from "react";

const SignUp = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.emails.value,
      image: event.target.image.value,
      type: event.target.type.value,
      password: event.target.password.value,
    };
    console.log(newUser);
    const resp = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
  };
  return (
    <div className="flex justify-center items-center mt-2 ">
      <div className="">
        <h2 className="text-lg font-semibold">
          Sign up with Email and Password
        </h2>
        <div>
          <form onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="email"
              placeholder="Full Name"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="emails"
              id="email"
              placeholder="your email"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="image URL"
              className="outline-none border-transparent p-3 text-slate-700"
            />

            <br />
            <br />
            <label htmlFor="" className="me-2">
              Type
            </label>
            <select defaultValue="select one" name="type" id="type">
              <option value="select one" disabled>
                Select One
              </option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <button className="bg-orange-500 p-3">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
