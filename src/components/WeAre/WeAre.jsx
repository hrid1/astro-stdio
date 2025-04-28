import who from "../../assets/who.jpg";

const WeAre = () => {
  return (
    <section className="bg-black text-white px-4 md:px-12 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src={who} // Replace with your image
            alt="Office"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1">
          <h5 className="text-sm uppercase tracking-widest mb-4 font-semibold text-gray-400">
            Who We Are
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight uppercase ">
            We are leading <br /> digital marketing <br /> agency.
          </h2>
          <div className=" relative flex justify-between">
            <div></div>
            <div>
              <p className="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed w-80 ">
                We’re a team of strategic digital marketing working globally
                with largest brands. We believe that progress only happens when
                you refused to play things safe. We combine ideas and behaviors,
                and insights with design, technological data to produce brand
                experiences that customers love our services.
              </p>
              {/* Explore Button */}
              <button className="relative inline-flex items-center justify-center p-12 w-[170px] h-[170px] overflow-hidden font-medium text-white transition duration-300 ease-out border border-gray-500 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-300 duration-500 -translate-x-full bg-gray-700 group-hover:translate-x-0 ease">
                  Explore Us →
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-400 transform group-hover:translate-x-full ease">
                  Explore Us →
                </span>
                <span className="relative invisible">Explore Us →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
