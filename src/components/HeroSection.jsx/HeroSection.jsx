import hero from "../../assets/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-visible px-8 py-16">
      <div className="max-w-6xl mx-auto relative z-10">
        <h4 className="text-2xl font-bold uppercase tracking-widest mb-4 flex items-center gap-4">
          Digital
          <span>
            <div className="w-20 border"></div>
          </span>
        </h4>

        {/* Top Section - Video Intro */}
        <div className="flex items-center justify-between gap-6">
          <p className="text-black font-extrabold leading-none text-[120px] md:text-[220px]">
            MARK
          </p>
          <div className="flex gap-2 items-center mt-10 md:mt-0">
            <div className="relative">
              <div
                className="w-24 h-24 bg-cover bg-center rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-amber-100"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/150)",
                }}
              ></div>
            </div>
            <p className="text-xs font-semibold uppercase mt-3 text-center">
              Watch <br /> Video Intro
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center gap-20 mt-8">
          <p className="text-gray-600 max-w-md text-xl font-semibold ">
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev
            environment.
          </p>
          <p className="text-black font-extrabold leading-none text-[120px] md:text-[220px]">
            ETING
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute right-0 -bottom-64 z-0">
        <img src={hero} alt="Hero" className="object-cover" />
      </div>
    </section>
  );
}
