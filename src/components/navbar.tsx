import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={'navbar px-6 md:px-16 2xl:px-40 py-8'}>
      <Image src={'/img/nds-horizontal-logo.svg'} alt="NDS Logo" width={1500} height={1500} className={'w-28 md:w-36 xl:w-44 h-auto'} />
    </nav>
  );
}
