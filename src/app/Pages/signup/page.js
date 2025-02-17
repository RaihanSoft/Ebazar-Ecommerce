"use client";
import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");
      alert("Registration successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 mb-3 border rounded-md outline-none"
            onChange={handleChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded-md outline-none"
            onChange={handleChange}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 mb-3 border rounded-md outline-none"
            onChange={handleChange}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border rounded-md outline-none"
            onChange={handleChange}
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 mb-3 border rounded-md outline-none"
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
