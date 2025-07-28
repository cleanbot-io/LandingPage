import Image from "next/image";

export default function MobileInterfaces() {
  return (
    <section className="w-full flex flex-col items-center text-center py-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-8 text-center">
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20 justify-items-center'>
          <Image
            src="/Pre2.png"
            width={600}
            height={480}
            alt="Mobile apps 1"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className='w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]'
          />
          <Image
            src="/closet.png"
            width={600}
            height={480}
            alt="Mobile apps 2"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className='w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]'
          />
          <Image
            src="/CB_Rt1.png"
            width={600}
            height={480}
            alt="Mobile apps 3"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className='w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]'
          />
          <Image
            src="/dash.png"
            width={600}
            height={480}
            alt="Mobile apps 4"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className='w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]'
          />
          <Image
            src="/noti.png"
            width={600}
            height={480}
            alt="Mobile apps 5"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className='w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]'
          />
          <Image
            src="/fridge.png"
            width={600}
            height={480}
            alt="Mobile apps 6"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className='w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]'
          />
        </div>
      </div>
    </section>
  );
}