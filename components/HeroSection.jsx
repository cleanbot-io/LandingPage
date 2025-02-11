export default function HeroSection() {
    return (
      <div className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: "url('/cb-LR1.png')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Welcome to Cleanbot
          </h1>
          <p className="text-white text-lg md:text-xl mt-4">
            The future of home cleaning, powered by innovation.
          </p>
        </div>
  
        {/* Call to Action Button - Always Anchored at Bottom */}
        <div className="absolute bottom-8 w-full flex justify-center">
          <button className="bg-black text-white px-10 py-3 text-lg rounded-3xl hover:bg-blue-700 transition">
            Reserve your spot
          </button>
        </div>
      </div>
    );
  }
  