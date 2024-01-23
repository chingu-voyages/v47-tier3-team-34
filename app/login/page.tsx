"use client";
import React, { useState } from "react";

const Login: React.FC = () => {
  interface FormState {
    email: string;
    password: string;
  }
  const inputClass =
    "mt-2 ps-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm p-8 sm:bg-gray-700 bg-transparent rounded-md shadow-md w-full sm:w-96">
        <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-white">
          Login
        </h2>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email Address
              </label>
              <input
                className={inputClass}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <input
                className={inputClass}
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
          </form>
          <hr className="my-5" />
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login with Google
          </button>

          <p className="mt-10 text-center text-sm text-white">
            New to Appname?
            <a
              href="/register"
              className="ms-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
