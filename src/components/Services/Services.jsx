import React from "react";

const services = [
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
  },
  {
    title: "EMAIL MARKETING",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
  },
  {
    title: "CONTENT MARKETING",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
  },
  {
    title: "SOCIAL MARKETING",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="max-w-xl mx-auto my-6">
        <h5 className="text uppercase tracking-widest mb-4 font-semibold text-gray-400">
          Services
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight uppercase ">
          Our marketing <br />
          Services
        </h2>
        <div className=" relative flex justify-between">
          <div></div>
          <div>
            <p className="text-gray-800 mb-8 text-sm sm:text-base leading-relaxed w-80 ">
              Consumers today rely heavily on digital means to research
              products. We research a brand of bldend engaging with it,
              according to the meanwhile, 51% of consumers say they use Google
              to research products before buying.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-t border-gray-200/80 pt-8 flex flex-col md:flex-row md:items-center md:justify-between "
          >
            {/* Left side */}
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-black md:w-[70%]">
                {service.title}
              </h2>
            </div>

            {/* Center content */}
            <div className="md:w-1/3 mb-6 md:mb-0 px-4">
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-1 text-black">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="font-semibold">
                    + {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right button */}
            <div className="md:w-1/3 flex justify-end pr-4 ">
              <button className="w-[130px] h-[130px] border border-gray-400 rounded-full flex flex-col items-center justify-center text-sm text-black hover:bg-black hover:text-white transition duration-300">
                Details ↗
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
