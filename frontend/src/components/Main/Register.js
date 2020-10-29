import React, { useState, useRef, useEffect } from "react";
function Register() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h1 class="mt-6 text-center text-5xl leading-9 font-extrabold text-red-800">
            BeLekker
          </h1>
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Cooking Together App
          </h2>
        </div>
        <form class="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
            </div>
            <div class="mt-5">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                for="remember_me"
                class="ml-2 block text-sm leading-5 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div class="text-sm leading-5">
              <a
                href="#"
                class="font-medium text-red-800 hover:text-red-600 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-800 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-red-300 group-hover:text-red-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              LOGIN
            </button>
          </div>
        </form>
        <div class="text-sm leading-5 mt-16 flex items-center justify-center">
          <footer class="cursor-pointer font-medium text-gray-900 hover:text-red-600 focus:outline-none focus:underline transition ease-in-out duration-150">
            Don't have an account <strong>Sign Up</strong>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Register;