import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const questions = [
  {
    question: "What is Netflix?",
    answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    answer2:" You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone,tablet,smart TV,laptop, or streaming device, all for onefixed monthly fee. Plance range from EGP 100 to EGP 240 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smart phones, tablets, streaming media players and game consoles.",
    answer2:"You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix  with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no cancellation fees-start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of features films, documentaires, TV shoes, anime, award-winning Netflix originales, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for Kids?",
    answer: "The Netflix kids experience is included in your membershib to give parents controle while kids enjoy family-friendly TV shows and movies in there own space.",
    answer2:"Kids profiles come with PIN-protected parently controles that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
  }
];

const SectionHome4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container max-w-screen-lg mx-auto px-6 py-12" id="faq">
      <h1 className="text-4xl font-bold text-white text-left mb-8">
        Frequently Asked Questions
      </h1>

      {questions.map((item, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 transition duration-500 hover:bg-gray-500">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h2 className="text-2xl font-semibold text-white">{item.question}</h2>
            <button className="text-white text-2xl transition-transform duration-300">
              {openIndex === index ? <IoClose /> : <FaPlus />}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gray-800 border border-gray-600 p-4 rounded-lg shadow-md">
              <p className="text-gray-300">{item.answer}</p>
              {item.answer2 && <p className="mt-4 text-gray-300">{item.answer2}</p>}
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default SectionHome4;
