import React from "react";
import { useParams } from "react-router-dom";

const Watch = () => {
    const { id } = useParams();

    if (!id) {
        return (
            <div className="text-center text-white mt-10">
                <p>❌ Video not found. Please make sure the URL is correct.</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-full max-w-4xl">
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Movie Player"
                    className="w-full h-[600px] border-none"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Watch;
