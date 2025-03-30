import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Login-Page/AuthContext";  // ✅ استيراد useAuth للتحقق من حالة التسجيل

const SectionHome2 = () => {
    const [movies, setMovies] = useState([]);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const { user } = useAuth();  // ✅ الحصول على حالة المستخدم

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    "https://api.themoviedb.org/3/movie/popular?api_key=8575fd1d48fa1a89e2aeb1dc248d2a36"
                );
                const data = await response.json();
                setMovies(data.results.slice(0, 15));
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    const handleMovieClick = (movieId) => {
        if (user) {
            // إذا كان المستخدم مسجلاً، انتقل إلى صفحة الفيلم
            navigate(`/movie/${movieId}`);
        } else {
            // إذا لم يكن المستخدم مسجلاً، اعرض له رسالة للتسجيل
            alert("Please sign in to watch the movie.");
            navigate("/login");
        }
    };

    return (
        <div className="bg-black py-12" id="trend">
            <div className="container max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16">
                <div className="text-right mb-6">
                    <span
                        onClick={() => navigate("/Movies")}
                        className="text-gray-400 font-bold transition cursor-pointer hover:text-red-600 text-sm sm:text-base"
                    >
                        View All Movies
                    </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white text-center md:text-left">
                    Trending Now
                </h2>

                <div className="relative">
                    {!isBeginning && (
                        <button
                            className="hidden md:block absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white text-lg hover:bg-gray-900 transition-all z-10"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            ❮
                        </button>
                    )}

                    <div className="p-2 sm:p-4 relative overflow-hidden">
                        <Swiper
                            modules={[Navigation]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => {
                                setIsBeginning(swiper.isBeginning);
                                setIsEnd(swiper.isEnd);
                            }}
                            spaceBetween={10}
                            slidesPerView={2}
                            breakpoints={{
                                480: { slidesPerView: 3 },
                                640: { slidesPerView: 4 },
                                768: { slidesPerView: 5 },
                                1024: { slidesPerView: 6 },
                                1280: { slidesPerView: 7 },
                            }}
                            className="w-full"
                        >
                            {movies.map((movie, index) => (
                                <SwiperSlide key={movie.id} className="overflow-visible">
                                    <div
                                        className="relative p-2 rounded-xl flex justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                        onClick={() => handleMovieClick(movie.id)}  // ✅ عند الضغط على الفيلم
                                    >
                                        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-lg">
                                            {index + 1}
                                        </span>

                                        <img
                                            src={
                                                movie.poster_path
                                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                    : "https://via.placeholder.com/200x250?text=No+Image"
                                            }
                                            alt={movie.title}
                                            className="w-[120px] sm:w-[150px] md:w-[180px] h-auto rounded-lg object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-3 rounded-lg">
                                            <h3 className="text-xs sm:text-sm font-bold text-white">
                                                {movie.title}
                                            </h3>
                                            <p className="text-xs text-gray-300">
                                                ⭐ {movie.vote_average.toFixed(1)} / 10
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {!isEnd && (
                        <button
                            className="hidden md:block absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white text-lg hover:bg-gray-900 transition-all z-10"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            ❯
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionHome2;
