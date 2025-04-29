import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  const features = [
    {
      title: "Design should enrich our day",
      description:
        "Great design improves everyday life by being intuitive, aesthetic, and functional, enhancing user experience.",
    },
    {
      title: "Bring their individual experience and creative",
      description:
        "Every designer brings unique creativity and experience to solve design problems in innovative ways.",
    },
    {
      title: "Human centred design to challenges",
      description:
        "It focuses on people’s needs, making solutions more accessible, usable, and empathetic.",
    },
    {
      title: "Design should enrich our day",
      description:
        "A repetition to emphasize that enriching life through design is a core value.",
    },
    {
      title: "Developing core web applications",
      description:
        "Building robust, scalable, and user-friendly web applications is essential in modern development.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <div>
      <p className="text-xl font-bold uppercase tracking-wider text-gray-600 mb-2 ">
        Pricing Table
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
        BE KIND TO YOUR <br /> MIND
      </h1>

      <div className="flex flex-col gap-3">
        {features.map((item, index) => (
          <article key={index} className="border border-x-0 border-gray-300 rounded p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-black font-semibold text-lg">{item.title}</h2>
              <FaPlus
                className={`text-xl text-gray-600 transition-transform duration-300 ${
                  activeIndex === index && "rotate-45 text-blue-500"
                }`}
              />
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-gray-700 text-sm overflow-hidden">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Faq;
