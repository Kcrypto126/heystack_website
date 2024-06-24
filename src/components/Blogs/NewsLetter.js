"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toastSuccess, toastError } from "@/utils/toast";
import { toast } from "react-toastify";

export function Form() {
  const [email, setEmail] = useState();
  const [disabled, setDisabled] = useState(false);
  const [showSuccessMessage, setSuccssMessage] = useState("");
  const [error, setError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toastError("Please enter a valid email address");
      return;
    }
    setDisabled(true);

    const formData = {
      email,
      type: "newsletter",
    };

    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        query: { type: "career " },
      });

      if (!response.ok) {
        toastError("Oops!! Server responded with an error");
      } else {
        setDisabled(false);
        setSuccssMessage("Thanks for Subscribing to our newsletter");
        toastSuccess("Thanks for  Subscribing to our newsletter ");
      }
    } catch (error) {
      setDisabled(false);
      toastError("Oops!! An error occurred while fetching");
    }
  };

  return (
    <form>
      {!showSuccessMessage ? (
        <div>
          <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
            <button
              className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={handleSubmit}
              disabled={disabled}
            >
              Follow
            </button>
            <input
              type="email"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              required
              onChange={handleEmailChange}
              value={email}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email Address
            </label>
          </div>
          <div className="w-full px-1 mb-8 mx-auto text-[11px] pb-2">
            {error && (
              <p className="text-red-600 text-xs font-semibold pt-1">{error}</p>
            )}

            <div className=" text-gray-700 py-1">
              By signing up you agree to our,
              <a
                className="text-page font-semibold"
                href="https://hey-stack.com/terms-conditions"
                target="_blank"
              >
                Terms of Use
              </a>
              <span className="px-1">and</span>
              <a
                href="https://hey-stack.com/privacy-policy"
                className="text-page font-semibold"
                target="_blank"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-green-400">{showSuccessMessage}</p>
      )}
    </form>
  );
}

const NewsLetter = () => {
  return (
    <div className="max-w-6xl lg:mx-auto md:mx-8 mx-5 relative my-10 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center lg:gap-10 gap-5 lg:p-10 md:p-8 p-5 bg-white shadow-md rounded-3xl lg:h-80 h-auto">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4">
          Hey Stack Articles Delivered straight to your inbox
        </h1>

        <Form />
      </div>

      <div className="bg-sky-200 rotate-2 w-full lg:h-80 h-auto rounded-3xl absolute top-0 -z-10 shadow-xl"></div>
    </div>
  );
};

export default NewsLetter;
