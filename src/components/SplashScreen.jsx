import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 3000);

    return () => clearTimeout(timeout); 
  }, [navigate]);

  return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-black">
        <h1 className="text-6xl font-extrabold text-red-600 animate-pulse">
          Netflix
        </h1>
    
        <div className="mt-6 flex space-x-2" aria-label="Loading">
          <div className="dot w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="dot w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="dot w-3 h-3 bg-red-600 rounded-full"></div>
        </div>
      </div>
    );
    
  
};

export default SplashScreen;

