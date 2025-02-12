import Image from "next/image";

export default function Reviews() {
  return (
    <section className="w-full flex flex-col items-center text-center py-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-8 text-center">
        <h3 className="text-3xl font-semibold text-black">❤️ Loved by Early Adopters</h3>

        <p className="mt-4 text-xl text-gray-700">
          “I’m really excited to see where this goes. It’s such a needed solution.”
        </p>

        {/* User Info */}
        <div className="mt-6 flex items-center justify-center space-x-6">
          {/* User Image */}
          <Image
            src="/Nat.png"
            alt="User"
            width={85}
            height={79}
            className="rounded-full"
          />
          {/* User Name */}
          <div className="text-left">
            <p className="text-xl font-medium text-black">Natasha Meyer</p>
            <p className="text-gray-600">San Francisco</p>
          </div>
        </div>
      </div>
    </section>
  );
}
