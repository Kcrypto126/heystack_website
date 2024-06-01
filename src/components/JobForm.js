"use client";
import React from "react";
import { useState } from "react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    linkedIn: "",
    message: "",
    type: "career",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        query: { type: "career " },
      });

      console.log(response);

      if (!response.ok) {
        console.error("Server responded with an error", response);
      } else {
        alert("Thanks for submitting the form! we will get back to you soon.");
      }
    } catch (error) {
      console.error("An error occurred while fetching", error);
    }
  };

  return (
    <form className="bg-gray-50 px-4 py-3 sm:p-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-4">
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            id="name"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-semibold text-gray-700"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-4">
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-semibold text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="linkedIn"
            className="block text-sm font-semibold text-gray-700"
          >
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#415082] text-base font-medium text-white hover:bg-[#415082] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#415082]"
      >
        Submit
      </button>
    </form>
  );
};

export default JobForm;
