import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/Login-Page/AuthContext"; 

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { user } = useAuth(); 

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=8575fd1d48fa1a89e2aeb1dc248d2a36"
            );
            const data = await response.json();
            setMovies(data.results || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleMovieClick = (movieId) => {
        if (user) {
            navigate(`/movie/${movieId}`); // إذا كان المستخدم مسجلاً دخوله، اذهب إلى صفحة الفيلم
        } else {
            alert("Please sign in to watch the movie.");
            navigate("/login"); // إذا لم يكن مسجلاً، اذهب إلى صفحة تسجيل الدخول
        }
    };

    return (
        <div className="bg-black min-h-screen text-white px-6 sm:px-10 py-10">
            <nav className="flex justify-between items-center mb-6">
                <button
                    onClick={() => navigate("/home")}
                    className="text-red-600 text-[40px] sm:text-[50px] font-bold hover:text-red-800 transition"
                >
                    Netflix
                </button>
            </nav>

            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="px-4 py-2 w-full md:w-1/2 rounded-lg text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="text-center text-gray-400 text-xl">Loading movies...</div>
            ) : filteredMovies.length === 0 ? (
                <div className="text-center text-gray-400 text-xl">No movies found.</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {filteredMovies.map((movie) => (
                        <div
                            key={movie.id}
                            className="relative group cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => handleMovieClick(movie.id)} // تعديل هنا
                        >
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : "https://via.placeholder.com/200x250?text=No+Image"
                                }
                                alt={movie.title}
                                className="w-full h-[300px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h2 className="text-lg font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    {movie.title}
                                </h2>
                                <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-100">
                                    {movie.release_date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Movies;
