"use client";

import { CustomErrorType } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
        method: "POST",
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw await response.json();

      Swal.fire({
        title: "Success",
        text: "Success Register",
        icon: "success",
      });
      route.push("/login");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: (error as CustomErrorType).message,
        icon: "error",
      });
    }
  }

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl font-bold  sm:text-4xl">Create an Account</h1>
          <p className="mt-4 text-gray-600">
            Join us and start your journey today.
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="mx-auto mt-8 max-w-md space-y-6 bg-white p-8 rounded-xl shadow-2xl"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="relative mt-1">
              <input
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="relative mt-1">
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                type="text"
                className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative mt-1">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Already have an account?
              <Link
                href={"/login"}
                className="ml-2 text-gray-500 hover:underline"
              >
                Sign in
              </Link>
            </p>
            <button
              type="submit"
              className="inline-block rounded-lg bg-gray-700 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-black"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
