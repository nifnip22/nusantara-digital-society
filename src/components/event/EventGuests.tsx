import Image from 'next/image';

interface EventGuestsProps {
	guestImageSrc: string;
	guestName: string;
	guestRole: string;
	guestDescription?: string;
}

export default function EventGuests({ guestImageSrc, guestName, guestRole, guestDescription }: EventGuestsProps) {
	return (
		<>
			<div className='flex flex-col gap-y-4'>
				<div className='bg-gray-300 w-full aspect-square rounded-3xl overflow-hidden'>
					<Image src={guestImageSrc} alt={guestName} width={1500} height={1500} className={'w-full h-full object-cover'} />
				</div>
				<div className='flex flex-col'>
					<h2 className='text-md md:text-lg font-semibold'>{guestName}</h2>
					<p className='text-sm md:text-md font-semibold leading-relaxed tracking-normal'>{guestRole}</p>
					<p className='mt-2 text-sm md:text-md text-gray-900/80 font-medium leading-relaxed tracking-normal'>{guestDescription || ''}</p>
				</div>
			</div>
		</>
	);
}
