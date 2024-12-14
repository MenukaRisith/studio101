export default function ClientsSection() {
  return (
    <div className="relative w-full bg-gray-900 text-white pt-24 pb-16">
      {/* Solid Background to Extend to Top */}
      <div className="absolute top-[-100px] left-0 w-full h-[100px] bg-gray-900"></div>

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[100px] bg-[#9837E2] rounded-full blur-3xl pointer-events-none"></div>

      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-12 px-6 relative z-10">
        <img src="/clients.png" alt="Clients Logos" className="h-10 sm:h-20" />
      </div>

      {/* Rectangles Section */}
      <div className="flex justify-center items-center gap-x-6 px-6 relative z-10">
        <div
          className="rounded-lg shadow-lg"
          style={{
            width: "370px",
            height: "423px",
            background:
              "linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.665) 100%)",
          }}
        ></div>
        <div
          className="rounded-lg shadow-lg"
          style={{
            width: "370px",
            height: "423px",
            background:
              "linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.665) 100%)",
          }}
        ></div>
        <div
          className="rounded-lg shadow-lg"
          style={{
            width: "370px",
            height: "423px",
            background:
              "linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.665) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}