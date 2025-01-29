interface EventAgendaProps {
    time: string;
    description: string;
}

export default function EventAgenda({ time, description }: EventAgendaProps) {
	return (
		<>
			<div className='flex flex-col gap-y-1'>
				<div className='flex gap-x-2 items-start text-sm text-gray-600'>
					<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
					<p className={'text-sm md:text-md font-medium'}>{time}</p>
				</div>
				<h1 className='text-md md:text-lg font-semibold'>{description}</h1>
			</div>
			<hr />
		</>
	);
}
