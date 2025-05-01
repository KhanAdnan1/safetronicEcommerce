import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "@/store/auth-slice";

function ForgotPassword() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState(""); // 'green' or 'red'

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(forgotPassword(formData)).unwrap();
      setMessage(result.message || "Password updated successfully");
      setMessageColor("green");
    } catch (err) {
      const errorMessage = err?.response?.data || "Failed to reset password";
      setMessage(errorMessage);

      // If it's a user-not-found error (400), still show it in green
      if (err?.response?.status === 400) {
        setMessageColor("green");
      } else {
        setMessageColor("red");
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Reset Your Password
        </h1>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md transition"
        >
          Update Password
        </button>
      </form>

      {message && (
        <p className={`text-center text-sm mt-2 ${messageColor === "green" ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}

      <p className="mt-2 text-center">
        Remembered your password?
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/login"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
