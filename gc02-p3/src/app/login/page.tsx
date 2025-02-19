"use client";

import { CustomErrorType } from "@/types";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw await response.json();

      window.location.href = "/";

      Swal.fire({
        title: "Success",
        text: "Success Login, Welcome",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: (error as CustomErrorType).message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center sm:text-4xl">
            Welcome Back
          </h2>
          <p className="mt-4 text-gray-600 text-center">
            Please login to access your account.
          </p>
          <form
            onSubmit={handleLogin}
            className="mx-auto mt-8 max-w-md space-y-6 bg-white p-8 rounded-xl shadow-2xl"
          >
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
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
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
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <Link
                  href="/register"
                  className="ml-2 text-grey-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
              <button
                disabled={loading}
                type="submit"
                className="inline-block rounded-lg bg-gray-700 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-black"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <Link href={"/"}>
            <img
              alt=""
              src="https://i.pinimg.com/736x/67/a9/d3/67a9d33795d1bbbfc561f260c60d8f42.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
