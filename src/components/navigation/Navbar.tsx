import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className={'px-6 md:px-16 2xl:px-40 py-8'}>
			<Link href={'/'}>
				<Image src={'/img/nds-horizontal-logo.svg'} alt='NDS Logo' width={1500} height={1500} className={'w-28 md:w-36 xl:w-38 h-auto'} />
			</Link>
		</nav>
	);
}
