import Button from '@/components/ui/Button';
import { TestImage } from '../../../public/img/image';
import Image from 'next/image';

export default function ArticleHome() {
  return (
    <main id="two" className="bg-zinc-50 py-12 md:py-32 xl:py-40">
      <section id="article" className="px-6 md:px-16 2xl:px-40">
        <h1 className="mb-10 md:mb-20 text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center">
          Artikel
        </h1>
        <div className="mb-72 md:mb-52 relative">
          <div className="xl:pl-52">
            <Image
              src={TestImage}
              alt="Featured Car"
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <a
            href="#"
            className="group absolute top-full lg:top-2/3 xl:top-1/2 left-8 xl:left-0 transform -translate-y-1/4 md:-translate-y-1/2 xl:-translate-x-8 bg-[#D7AB6C] bg-opacity-90 hover:bg-opacity-100 duration-300 text-white p-6 rounded-3xl max-w-xs md:max-w-lg xl:max-w-2xl"
          >
            <p className="uppercase text-sm md:text-lg xl:text-2xl font-semibold tracking-wide">
              Terbaru
            </p>
            <hr className="w-6 md:w-12 h-1 bg-white mb-4" />
            <h2 className="mt-2 mb-4 text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 tracking-wide leading-tight">
              NVIDIA Campus Roadshow 2024 Universitas Mulia
            </h2>
            <p className="text-base md:text-md xl:text-xl font-medium max-w-[50rem] line-clamp-2 tracking-wide leading-relaxed">
              NVIDIA Campus Roadshow 2024 Sukses Diselenggarakan di Universitas
              Mulia Balikpapan Bekerja Sama dengan Bitracom Gaming pada Hari
              Kamis (19/12/2024) Kemarin.
            </p>
            <p className="opacity-0 group-hover:opacity-100 duration-300 mt-0 group-hover:mt-4 inline-block text-md font-semibold text-white-500 hover:text-white-400">
              Baca Selengkapnya
            </p>
          </a>
        </div>
        <p className="hidden 2xl:block uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold">
          Artikel Lainnya
        </p>
        <hr className="hidden 2xl:block w-12 h-1 bg-[#D7AB6C] mb-4" />
        <div className="flex flex-col 2xl:flex-row gap-y-16 2xl:gap-x-12 justify-center 2xl:justify-start items-center 2xl:items-start mb-20">
          <div className="flex flex-col gap-4">
            <div className="2xl:hidden">
              <p className="uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold">
                Artikel Lainnya
              </p>
              <hr className="w-6 md:w-12 h-1 bg-[#D7AB6C] mb-4" />
            </div>
            <a href="#" className="flex flex-col gap-4 group">
              <div className="bg-gray-300 max-w-4xl rounded-3xl relative overflow-hidden mb-4">
                <Image
                  src={TestImage}
                  alt="nds"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold">
                    Baca Selengkapnya
                  </p>
                </div>
              </div>
              <p className="text-xs md:text-sm xl:text-lg">
                21 Desember 2024 - by{' '}
                <span className="text-[#D7AB6C]">Admin</span>
              </p>
              <h1 className="text-xl md:text-2xl xl:text-4xl font-bold max-w-[50rem] line-clamp-2 leading-relaxed md:leading-tight group-hover:underline group-hover:underline-offset-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <p className="text-sm md:text-md xl:text-xl font-medium max-w-[50rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus modi hic odio aliquid magnam, nulla, officiis
                porro adipisci perferendis eveniet velit distinctio quidem
                ullam, aperiam fugiat? Adipisci reprehenderit minima repellat.
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-16">
            <a
              href="#"
              className="flex flex-col md:flex-row gap-4 w-full group"
            >
              <div className="bg-gray-100 max-w-4xl md:max-w-md 2xl:max-w-sm rounded-3xl relative overflow-hidden mb-4">
                <Image
                  src={TestImage}
                  alt="nds"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold">
                    Baca Selengkapnya
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xs md:text-sm xl:text-lg">
                  21 Desember 2024 - by{' '}
                  <span className="text-[#D7AB6C]">Admin</span>
                </p>
                <h1 className="text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur officia, nobis, unde ab dolorum fuga commodi quos
                  tempore dolore molestiae vero corrupti labore reprehenderit
                  repudiandae natus eligendi suscipit. Eum, quo.
                </h1>
                <p className="text-sm md:text-md xl:text-xl font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique delectus, suscipit doloremque minima deserunt nisi
                  dolor ab maxime itaque. Dolorem illum veritatis soluta,
                  aliquam debitis laborum aperiam laudantium neque expedita?
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col md:flex-row gap-4 w-full group"
            >
              <div className="bg-gray-100 max-w-4xl md:max-w-md 2xl:max-w-sm rounded-3xl relative overflow-hidden mb-4">
                <Image
                  src={TestImage}
                  alt="nds"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold">
                    Baca Selengkapnya
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs md:text-sm xl:text-lg">
                  21 Desember 2024 - by{' '}
                  <span className="text-[#D7AB6C]">Admin</span>
                </p>
                <h1 className="text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur officia, nobis, unde ab dolorum fuga commodi quos
                  tempore dolore molestiae vero corrupti labore reprehenderit
                  repudiandae natus eligendi suscipit. Eum, quo.
                </h1>
                <p className="text-sm md:text-md xl:text-xl font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique delectus, suscipit doloremque minima deserunt nisi
                  dolor ab maxime itaque. Dolorem illum veritatis soluta,
                  aliquam debitis laborum aperiam laudantium neque expedita?
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col md:flex-row gap-4 w-full group"
            >
              <div className="bg-gray-100 max-w-4xl md:max-w-md 2xl:max-w-sm rounded-3xl relative overflow-hidden mb-4">
                <Image
                  src={TestImage}
                  alt="nds"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold">
                    Baca Selengkapnya
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs md:text-sm xl:text-lg">
                  21 Desember 2024 - by{' '}
                  <span className="text-[#D7AB6C]">Admin</span>
                </p>
                <h1 className="text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur officia, nobis, unde ab dolorum fuga commodi quos
                  tempore dolore molestiae vero corrupti labore reprehenderit
                  repudiandae natus eligendi suscipit. Eum, quo.
                </h1>
                <p className="text-sm md:text-md xl:text-xl font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique delectus, suscipit doloremque minima deserunt nisi
                  dolor ab maxime itaque. Dolorem illum veritatis soluta,
                  aliquam debitis laborum aperiam laudantium neque expedita?
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button label="Lihat Semua Artikel" type="button" variant="outline" />
        </div>
      </section>
    </main>
  );
}
