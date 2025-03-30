import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    const errors = {
      invalidEmail: "❌ Please enter a valid email address.",
      weakPassword: "❌ Password must be at least 6 characters.",
      passwordMismatch: "❌ Passwords do not match!",
      emailInUse: "❌ Email is already in use.",
      generalError: "❌ An error occurred. Please try again."
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErrorMessage(errors.invalidEmail);
    if (password.length < 6) return setErrorMessage(errors.weakPassword);
    if (password !== confirmPassword) return setErrorMessage(errors.passwordMismatch);

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("✅ Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setErrorMessage(error.code === "auth/email-already-in-use" ? errors.emailInUse : errors.generalError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black bg-cover bg-center bg-no-repeat px-6 sm:px-0" 
         style={{ backgroundImage: `url('/images/background.jpg')` }}>
      <nav className="py-4 pt-6 fixed top-0 left-0 w-full z-50 flex justify-center sm:justify-start sm:pl-16"
           style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(75, 74, 74, 0.5), rgba(0, 0, 0, 0))" }}>
        <Link to="/" className="text-red-600 text-[60px] sm:text-[50px] font-bold">Netflix</Link>
      </nav>

      <div className="bg-black bg-opacity-80 p-8 sm:p-12 rounded-lg shadow-lg w-full sm:w-[400px] text-white border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Sign Up</h2>

        {errorMessage && <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4 text-sm">{successMessage}</p>}

        <form onSubmit={handleSignUp} className="flex flex-col space-y-6">
          <div className="relative w-full">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email address"
              className="peer p-4 w-full rounded-md text-white bg-[#ffffff2d] outline-none border border-white focus:border-red-600 transition duration-300 placeholder-transparent"
              required
              disabled={loading}
            />
            <label className="absolute left-4 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-red-500">
              Email address
            </label>
          </div>

          <div className="relative w-full">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="peer p-4 w-full rounded-md text-white bg-[#ffffff2d] outline-none border border-white focus:border-red-600 transition duration-300 placeholder-transparent"
              required
              disabled={loading}
            />
            <label className="absolute left-4 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-red-500">
              Password
            </label>
          </div>

          <div className="relative w-full">
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Password"
              className="peer p-4 w-full rounded-md text-white bg-[#ffffff2d] outline-none border border-white focus:border-red-600 transition duration-300 placeholder-transparent"
              required
              disabled={loading}
            />
            <label className="absolute left-4 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-red-500">
              Confirm Password
            </label>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-md font-bold transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-gray-400 text-center sm:text-left">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Sign in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
