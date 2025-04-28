import brand1 from "../../assets/brands/1.webp";
import brand2 from "../../assets/brands/2.webp";
import brand3 from "../../assets/brands/3.webp";
import brand4 from "../../assets/brands/4.webp";
import brand5 from "../../assets/brands/5.webp";
import brand6 from "../../assets/brands/6.webp";
const Brand = () => {
  return (
    <div className="mt-90">
      <h3 className="text-xl font-medium text-center uppercase">
        We worked with global largest brands
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 place-items-center py-6 md:py-16 gap-6 px-4 md:px-24">
        <div>
          <img src={brand1} alt="" />
        </div>
        <div>
          <img src={brand2} alt="" />
        </div>
        <div>
          <img src={brand3} alt="" />
        </div>
        <div>
          <img src={brand4} alt="" />
        </div>
        <div>
          <img src={brand5} alt="" />
        </div>
        <div>
          <img src={brand6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
