import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedRemember = localStorage.getItem("rememberMe") === "true";

    if (savedRemember && savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("تم تسجيل الدخول بنجاح!");
      navigate("/");
    } catch (error) {
      setErrorMessage("فشل تسجيل الدخول! الرجاء التأكد من البريد وكلمة المرور.");
    }

    setLoading(false);

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberMe");
    }
  };

  const handleRememberMe = () => {
    const newState = !rememberMe;
    setRememberMe(newState);
    localStorage.setItem("rememberMe", newState.toString());
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black bg-cover bg-center bg-no-repeat px-6 sm:px-0" style={{ backgroundImage: `url('/images/background.jpg')` }}>
      <nav className="py-4 pt-6 fixed top-0 left-0 w-full z-50 flex justify-center sm:justify-start sm:pl-16"
           style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(75, 74, 74, 0.5), rgba(0, 0, 0, 0))" }}>
        <Link to="/" className="text-red-600 text-[60px] sm:text-[50px] font-bold hover:text-red-800">Netflix</Link>
      </nav>

      <div className="bg-black bg-opacity-80 p-8 sm:p-12 rounded-lg shadow-lg w-full sm:w-[400px] text-white border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Sign In</h2>

        {errorMessage && <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>}

        <form onSubmit={handleLogin} className="flex flex-col space-y-6">
          <div className="relative">
            <input
              type="text"
              id="email"
              className="peer p-4 w-full text-white bg-[#ffffff2d] outline-none border border-white focus:border-red-600 transition duration-300 placeholder-transparent rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              autoComplete="email"
            />
            <label htmlFor="email" className="absolute left-4 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-gray-400">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer p-4 w-full text-white bg-[#ffffff2d] outline-none border border-white focus:border-red-600 transition duration-300 placeholder-transparent rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="current-password"
            />
            <label htmlFor="password" className="absolute left-4 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-gray-400">
              Password
            </label>
          </div>

          <button type="submit" disabled={loading} className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-md font-bold transition">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
            Remember me
          </label>
        </div>

        <div className="mt-6 text-gray-400 text-center sm:text-left">
          New to Netflix?{" "}
          <Link to="/signup" className="text-white hover:underline">
            Sign up now
          </Link>
          .
        </div>
        <p className="pb-5 text-gray-400 text-left text-sm mt-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <a href="#" className="underline text-blue-700 ">
          Learn more.
        </a>
      </div>
    </div>
  );
};

export default Login;
