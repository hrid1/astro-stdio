import hero from "../../assets/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-visible px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto relative z-10">
        <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-widest mb-4 flex items-center gap-2 sm:gap-4">
          Digital
          <span className="flex-1">
            <div className="w-10 sm:w-20 border"></div>
          </span>
        </h4>

        {/* Top Section - Video Intro */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-black font-extrabold leading-none text-[80px] sm:text-[120px] md:text-[220px]">
            MARK
          </p>
          <div className="flex gap-2 items-center mt-6 md:mt-0">
            <div className="relative">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 bg-cover bg-center rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-amber-100"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/150)",
                }}
              ></div>
            </div>
            <p className="text-xs font-semibold uppercase mt-2 text-center">
              Watch <br /> Video Intro
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20 mt-8">
          <p className="text-gray-600 max-w-md text-base sm:text-lg md:text-xl font-semibold text-center md:text-left">
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev
            environment.
          </p>
          <p className="text-black font-extrabold leading-none text-[80px] sm:text-[120px] md:text-[220px]">
            ETING
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute right-0 -bottom-40 sm:-bottom-64 z-0 w-full sm:w-auto">
        <img src={hero} alt="Hero" className="object-cover w-full sm:w-auto" />
      </div>
    </section>
  );
}
