import Image from "next/image";

interface EventImageProps {
    eventImageSrc: string;
    eventImageAlt?: string;
}

export default function EventImage({ eventImageSrc, eventImageAlt }: EventImageProps) {
	return (
		<>
			<div className={'bg-gray-300 aspect-square w-full lg:max-w-sm xl:max-w-lg rounded-3xl overflow-hidden'}>
				<Image src={eventImageSrc} alt={eventImageAlt || 'Upcoming Event'} width={1500} height={1500} className={'w-full h-full object-cover'} />
			</div>
		</>
	);
}
