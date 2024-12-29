import Button from '@/components/ui/Button';
import Form from 'next/form';
import Image from 'next/image';
import { TestImage } from '../../../public/img/image';
import FloatingLabelInput from '@/components/floatingInput';
import { JoinUsInput } from '@/etc/constant';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function JoinUs(form, setForm) {
  return (
    <main id="four" className="bg-[#f9f2e9]">
      <section id="join" className="">
        <div className="flex flex-col lg:flex-row py-12">
          <div className="w-full px-12  ">
            <Image
              src={TestImage}
              alt="nds"
              className="object-cover h-[26rem] lg:h-[34rem] overflow-hidden w-full rounded-lg"
            />
          </div>
          <div className="max-w-5xl flex flex-col gap-8  pl-4  md:pl-8 pr-6 md:pr-16 2xl:pr-40">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-900">
              Bergabunglah dengan Kami
            </h1>
            <p className="text-sm md:text-lg xl:text-2xl font-medium text-gray-900 tracking-wide leading-relaxed">
              Bergabung dengan Komunitas Nusantara Digital Society dan Bersama
              Kita Tumbuhkan Ekosistem Digital dan Teknologi Nusantara
            </p>
            <div className="grid grid-cols-5 gap-16">
              <Form action="#" className="flex  gap-10 col-span-3">
                <div className="flex flex-col gap-10 w-full">
                  {JoinUsInput.map((input, index) => (
                    <FloatingLabelInput key={index} {...input} />
                  ))}
                  <Button
                    label="Ajukan Permohonan"
                    variant="primary"
                    type="submit"
                  />
                </div>
              </Form>
              <div className="flex flex-col justify-center gap-10 col-span-2">
                <div className="w-full grid gap-2 ">
                  <h1 className="font-thin text-4xl">Kontak kami</h1>
                  <a
                    href="mailto:admin@nds.com"
                    className="text-sm md:text-xl font-thin text-gray-900 hover:text-blue-600 hover:underline"
                  >
                    admin@nds.com
                  </a>
                </div>
                <div className="w-full grid gap-2 ">
                  <h1 className="font-thin text-4xl">Berbasis di</h1>
                  <a
                    href="https://www.google.com/maps/place/Balikpapan,+Kalimantan+Timur,+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-xl font-thin text-gray-900 hover:text-blue-600 hover:underline"
                  >
                    Balikpapan, Kalimantan Timur, Indonesia
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com"
                    className="transform translate-y-3 hover:-translate-y-1 transition-transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="transform translate-y-3 hover:-translate-y-1 transition-transform duration-300"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    className="transform translate-y-3 hover:-translate-y-1 transition-transform duration-300"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
