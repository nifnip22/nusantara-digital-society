import Image from 'next/image';
import { TestImage } from '../../../public/img/image';

export default function Event() {
  return (
    <main id="three" className="py-12 md:py-32 xl:py-40">
      <section id="events" className="px-6 md:px-16 2xl:px-40">
        <h1 className="mb-10 md:mb-20 text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center">
          Event
        </h1>
        <div className="flex flex-col 2xl:flex-row gap-y-16 2xl:gap-x-8 justify-center 2xl:justify-start items-center 2xl:items-start">
          <div className="bg-gray-300 max-w-4xl rounded-3xl overflow-hidden">
            <Image
              src={TestImage}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-12 max-w-4xl h-auto">
            <div className="flex flex-col gap-4">
              <div>
                <p className="uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold">
                  Upcoming
                </p>
                <hr className="w-12 h-1 bg-[#D7AB6C] mb-4" />
              </div>
              <h1 className="text-xl md:text-2xl xl:text-4xl font-bold line-clamp-3 leading-relaxed md:leading-tight">
                NVIDIA Campus Roadshow Balikpapan 2024
              </h1>
              <p className="text-sm md:text-md xl:text-xl font-medium line-clamp-3 tracking-wide leading-relaxed md:leading-loose">
                NVIDIA Powers the World&apos;s AI. And Yours.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-md xl:text-xl font-medium line-clamp-3 tracking-wide leading-loose">
                Location
              </p>
              <p className="text-sm md:text-md xl:text-xl font-medium line-clamp-3 tracking-wide leading-loose">
                Date
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
