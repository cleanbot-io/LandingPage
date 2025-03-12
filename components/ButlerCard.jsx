import Image from "next/image";

export default function ButlerCard() {
    return (
        <section className="flex flex-col items-center text-center mt-10">
        
        <Image src="/Arton.png" alt="navigation" width={1000} height={1000} className="mt-10" />

        <div className="flex flex-col items-center justify-center p-8">
  {/* Image Section */}


  {/* Card Section */}
  <div className="mt-2 bg-white shadow-md rounded-xl p-6 max-w-lg text-center">
    <h3 className="text-2xl font-semibold text-gray-800">Try our fractional butler service</h3>
    <p className="mt-2 text-lg text-gray-600">
      From dog walks and grocery shopping to dry cleaning pick-up, we handle the details so that you don&apos;t have to.
    </p>
    <a href='/butler' className="bg-blue-500 px-2 py-2 rounded-full">
      <button className="mt-4 text-white">View details</button>
    </a>
  </div>
</div>

        
      </section>
      
    );
  }
  