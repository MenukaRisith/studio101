export default function ServicesSection() {
    return (
      <div className="relative w-full bg-gray-900 text-white py-16 px-6 sm:px-12">
        {/* Call to Action Text */}
        <div className="text-center mb-8">
          <div
            className="bg-transparent text-white font-bold rounded-[11.77px] border border-[#EBEBEB] mx-auto"
            style={{
              borderWidth: "1.1px",
              width: "254px",
              height: "51px",
              lineHeight: "51px",
              textAlign: "center",
            }}
          >
            Want to work with us
          </div>
        </div>
  
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
  
        {/* Gradient Box */}
        <div className="flex justify-center">
          <div
            className="rounded-[40px]"
            style={{
              width: "760px",
              height: "400px",
              background:
                "linear-gradient(86.68deg, #9837E2 1.36%, #531E7C 98.64%)",
            }}
          ></div>
        </div>
      </div>
    );
  }
  