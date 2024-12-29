import Image from 'next/image';
import { NdsHorizontalSvg } from '../../public/img/image';

export default function Navbar() {
  console.log(NdsHorizontalSvg);
  return (
    <nav className="navbar bg-[#f9f2e9] px-6 md:px-16 2xl:px-40 py-8">
      <Image src={NdsHorizontalSvg} alt="nds" className="w-36 xl:w-52 h-auto" />
    </nav>
  );
}
