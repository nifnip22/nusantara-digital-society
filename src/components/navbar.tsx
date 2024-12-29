import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar bg-[#f9f2e9] px-6 md:px-16 2xl:px-40 py-8">
      <Image src={'/img/nds-horizontal-logo.svg'} alt="nds" width={0} height={0} className="w-36 xl:w-52 h-auto" />
    </nav>
  );
}
