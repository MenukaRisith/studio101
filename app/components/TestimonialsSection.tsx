export default function TestimonialsSection() {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6 sm:px-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <div
          className="text-white font-bold rounded-[11.77px] mb-10 border border-white flex items-center justify-center mx-auto"
          style={{
            borderWidth: "0.35px",
            width: "168px",
            height: "51px",
          }}
        >
          Testimonials
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4 leading-tight">
          Reviews From <br /> Our Satisfied Clients.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 place-items-center mx-32">
        {/* Testimonial Card */}
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-[11.77px] p-4 sm:p-6 shadow-md text-sm"
              style={{
                width: "374.65px",
                height: "214.87px",
                border: "1.1px solid #EBEBEB",
              }}
            >
              <p className="text-gray-300 mb-4 leading-relaxed">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Client Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-white font-semibold">Retard of the Retards</p>
                  <p className="text-gray-400 text-xs">@RetardsUnited</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
