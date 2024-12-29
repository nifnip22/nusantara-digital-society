import Image from 'next/image';
import { NdsHorizontalSvg } from '../../public/img/image';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 py-12 md:py-32">
      <section id="contact" className="px-6 md:px-16 2xl:px-40">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <Image
            src={NdsHorizontalSvg}
            alt="nds"
            className="w-36 xl:w-52 h-auto "
          />
          <p className="text-xs md:text-md xl:text-lg font-medium line-clamp-3 tracking-wide leading-loose">
            &copy; 2024 Nusantara Digital Society. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}