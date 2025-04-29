import React, { useState } from "react";

// Fake testimonial data
const testimonials = [
  {
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always th in Alts our best ally for success!",
    name: "Maria D. Halk",
    title: "Managing Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "The team at Alts truly understands our vision and has consistently delivered above expectations. Their dedication is unmatched.",
    name: "James T. Riley",
    title: "Product Lead",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote:
      "Alts helped us scale faster with reliable support. They feel more like an extension of our own team than an external partner.",
    name: "Lena K. Moore",
    title: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[current];

  return (
    <div className="relative bg-white py-24 text-center overflow-hidden">
      {/* Decorative floating images */}
      <img
        src="https://source.unsplash.com/80x80/?team,work"
        className="absolute top-5 left-5 w-20 rounded-md shadow-md"
        alt=""
      />
      <img
        src="https://source.unsplash.com/80x80/?meeting"
        className="absolute top-5 right-5 w-20 rounded-md shadow-md"
        alt=""
      />
      <img
        src="https://source.unsplash.com/80x80/?business,people"
        className="absolute bottom-5 left-24 w-20 rounded-md shadow-md"
        alt=""
      />
      <img
        src="https://source.unsplash.com/80x80/?startup"
        className="absolute bottom-5 right-24 w-20 rounded-md shadow-md"
        alt=""
      />

      {/* Quote section */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-5xl mb-6 text-gray-600 leading-none">“</div>
        <p className="text-lg font-medium md:text-xl italic text-gray-800 leading-relaxed">
          {testimonial.quote}
        </p>
        <div className="flex justify-center mt-8">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">
          {testimonial.name}
        </h3>
        <p className="text-sm uppercase tracking-wider text-gray-500">
          {testimonial.title}
        </p>

        {/* Navigation arrows */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
