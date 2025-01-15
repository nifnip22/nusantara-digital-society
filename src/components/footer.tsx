import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={'bg-zinc-50 py-12'}>
      <main className={'px-6 md:px-16 2xl:px-40'}>
        <div className={'flex flex-col md:flex-row gap-4 justify-between items-center text-center'}>
          <Image
            src={'/img/nds-horizontal-logo.svg'}
            alt={'NDS Logo'}
            width={0} height={0}
            className={'w-36 xl:w-54 h-auto'}
          />
          <p className={'text-xs md:text-md font-medium line-clamp-3 tracking-wide leading-loose'}>
            &copy; 2024 Nusantara Digital Society. All Rights Reserved.
          </p>
        </div>
      </main>
    </footer>
  );
}
