'use client'
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded-md outline-none"
          />

          {/* Password */}
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded-md outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-green-600">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm">
          Don&apos;t Have An Account?{" "}
          <Link href="/register" className="text-green-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
