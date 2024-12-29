import { BookPlus, PencilRuler, Waypoints } from 'lucide-react';

export default function Main() {
  return (
    <main id="one" className="bg-[#f9f2e9] py-12 md:py-32 xl:py-40">
      <section id="tagline" className="px-6 md:px-16 2xl:px-40">
        <h1 className="text-4xl md:text-6xl xl:text-8xl text-center font-bold">
          Empowering Innovation <br /> Advancing{' '}
          <span className="text-[#D7AB6C]">Nusantara</span>
        </h1>
      </section>
      <section
        id="intro-vid"
        className="px-6 md:px-16 2xl:px-40 mt-20 md:mt-32 xl:mt-40"
      >
        <div className="bg-[#D7AB6C] w-full h-auto rounded-3xl p-4">
          <iframe
            src="https://www.youtube.com/embed/mFVyoyNyE5U"
            allowFullScreen
            className="w-full aspect-video rounded-3xl"
          ></iframe>
        </div>
      </section>
      <section
        id="vision"
        className="px-6 md:px-16 2xl:px-40 mt-20 md:mt-32 xl:mt-40"
      >
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center mb-10 md:mb-20">
          Visi
        </h1>
        <p className="text-sm md:text-lg xl:text-2xl font-medium text-gray-900 text-center lg:px-40">
          Menjadi Penggerak Utama Ekosistem Digital Nusantara untuk Mendukung
          Pembangunan Ibu Kota Nusantara (IKN) sebagai Pusat Digital Nasional.
        </p>
      </section>
      <hr className="w-52 h-3 bg-[#D7AB6C] mx-auto mt-20 md:mt-32 xl:mt-40 rounded-full" />
      <section
        id="mission"
        className="px-6 md:px-16 2xl:px-40 mt-10 md:mt-20 xl:mt-40"
      >
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center mb-10 md:mb-20">
          Misi
        </h1>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 lg:px-40">
          <div className="flex flex-row items-center gap-4 justify-start">
            <div className="bg-gray-900 p-4 rounded-lg text-[#D7AB6C]">
              <Waypoints />
            </div>
            <p className="text-sm md:text-lg xl:text-2xl font-medium text-gray-900">
              Menghubungkan Seluruh Talenta Digital Nusantara.
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 justify-start">
            <div className="bg-gray-900 p-4 rounded-lg text-[#D7AB6C]">
              <BookPlus />
            </div>
            <p className="text-sm md:text-lg xl:text-2xl font-medium text-gray-900">
              Meningkatkan Keterampilan Talenta Digital Nusantara.
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 2xl:col-span-2 justify-start 2xl:justify-center">
            <div className="bg-gray-900 p-4 rounded-lg text-[#D7AB6C]">
              <PencilRuler />
            </div>
            <p className="text-sm md:text-lg xl:text-2xl font-medium text-gray-900">
              Mendorong Lahirnya Startup Lokal yang Dapat Bersaing di Tingkat
              Nasional maupun Global.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
