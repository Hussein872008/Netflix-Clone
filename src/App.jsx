import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home-Page/Home";
import Login from "./pages/Login-Page/Login"; 
import SignUp from "./pages/Login-Page/SignUp"; 
import { AuthProvider } from "./pages/Login-Page/AuthContext.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Watch from "./pages/Watch.jsx";
import Movies from "./pages/Movies.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
