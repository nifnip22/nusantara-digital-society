import { ArtikelImageProps } from '@/utils/types';
import Image from 'next/image';

export default function ArtikelImage({
  imageSrc,
  imageAlt,
}: ArtikelImageProps) {
  return (
    <>
      <div className="bg-zinc-300 w-full rounded-3xl overflow-hidden">
        <Image
          src={imageSrc || '/img/image_placeholder.png'}
          alt={imageAlt || 'Gambar Artikel'}
          width={1500}
          height={1500}
          className="object-cover object-center w-full h-full"
        />
      </div>
    </>
  );
}
