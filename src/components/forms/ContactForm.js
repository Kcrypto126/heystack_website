"use client";
import React from "react";
import { useState } from "react";
import { toastError, toastSuccess } from "@/utils/toast";

const ContactForm = ({ setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "demo",
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
        query: { type: "demo " },
      }).then((res) => res.json());

      toastSuccess(response?.status || "Thank you for reaching out!");
    } catch (error) {
      toastError("Oops!! An error occurred while fetching");
    }
    setOpen(false);
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

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-gray-700"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={handleChange}
          required
        />
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

export default ContactForm;
