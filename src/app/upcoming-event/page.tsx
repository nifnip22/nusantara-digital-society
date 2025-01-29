import EventAgenda from '@/components/event/EventAgenda';
import EventGuests from '@/components/event/EventGuests';
import EventHeader from '@/components/event/EventHeader';
import EventImage from '@/components/event/EventImage';

export default function UpcomingEvent() {
	return (
		<>
			<div className='flex flex-col lg:flex-row justify-between items-center gap-6 mb-20'>
				<div className='w-full flex flex-col gap-y-4'>
					<div className='w-fit px-3 py-1 bg-[#D7AB6C] rounded-full'>
						<p className='text-base md:text-lg text-gray-100 font-semibold'>Upcoming Event</p>
					</div>
					<EventHeader
						eventTitle='Test Event MDX'
						eventLocation='Universitas Mulia Balikpapan'
						eventDate='31 Januari 2025'
						eventTime='10:00'
						registrationDeadlineDate='20 Januari 2025'
						registrationDeadlineTime='23:59'
						registrationLink='#'
					/>
				</div>
				<EventImage eventImageSrc='/img/image_placeholder.png' eventImageAlt='#' />
			</div>
			<div className='flex flex-col gap-y-20'>
				<div className='flex flex-col gap-y-4'>
					<div className='flex flex-col gap-1'>
						<h2 className='text-xl md:text-2xl font-semibold'>Deskripsi Event</h2>
						<hr className='w-20 h-1 bg-[#D7AB6C]' />
					</div>
					<article>
						<p className='text-sm md:text-md font-medium leading-relaxed tracking-normal'>Ini adalah percobaan menggunakan MDX</p>
					</article>
				</div>
				<div className='flex flex-col gap-y-4'>
					<div className='flex flex-col gap-1'>
						<h2 className='text-xl md:text-2xl font-semibold'>Tamu Unggulan</h2>
						<hr className='w-20 h-1 bg-[#D7AB6C]' />
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-4 gap-y-12'>
						<EventGuests guestImageSrc={'/img/image_placeholder.png'} guestName={'Muhammad Yulasfi Pahrizal'} guestRole={'Pembicara'} guestDescription={'Test Tamu'} />
					</div>
				</div>
				<div className='flex flex-col gap-y-6'>
					<div className='flex flex-col gap-1'>
						<h2 className='text-xl md:text-2xl font-semibold'>Agenda Kegiatan</h2>
						<hr className='w-20 h-1 bg-[#D7AB6C]' />
					</div>
					<div className='w-full flex flex-col gap-y-6'>
						<EventAgenda agendaTime='09:00' agendaDescription='Registrasi dibuka' />
					</div>
				</div>
			</div>
		</>
	);
}
