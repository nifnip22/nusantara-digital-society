import Footer from '@/components/navigation/Footer';
import PastEventCard from '@/components/layouts/PastEventCard';
import Navbar from '@/components/navigation/Navbar';
import Pagination from '@/components/navigation/Pagination';

const eventData = [
	{
		id: 1,
		imageSrc: '/img/Test.jpg',
		title: 'NVIDIA Campus Tour Roadshow Balikpapan 2024',
		location: 'Gedung Cheng Ho - Universitas Mulia Balikpapan',
		datetime: '04 Februari 2025 | 09:00 - 17:00 WITA',
		participantsCount: '250',
		guests: [
			{ imageSrc: '/img/Guest1.jpg', guestName: 'John Doe', guestRole: 'Narasumber' },
			{ imageSrc: '/img/Guest2.jpg', guestName: 'Jane Smith', guestRole: 'Moderator' },
		],
		highlights: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
	},
	{
		id: 2,
		imageSrc: '/img/event.jpg',
		title: 'FIKOM Technofest 2025',
		location: 'Gedung Cheng Ho - Universitas Mulia Balikpapan',
		datetime: '04 Februari 2025 | 09:00 - 18:00 WITA',
		participantsCount: '100',
		guests: [
			{ imageSrc: '/img/Guest3.jpg', guestName: 'Alice Brown', guestRole: 'Keynote Speaker' },
			{ imageSrc: '/img/Guest4.jpg', guestName: 'Bob White', guestRole: 'Panelist' },
		],
		highlights: ['Lomba RPL.', 'Lomba UI/UX'],
	},
];

export default function PastEvents() {
	return (
		<>
			<header className='bg-[#f9f2e9]'>
				<Navbar />
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12 mb-8'>
					<div className={'text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4'}>
						<h1 className='text-4xl md:text-5xl font-bold'>Past Events</h1>
						<p className='text-sm md:text-md'>Rekam jejak event teknologi kami yang telah sukses diselenggarakan</p>
					</div>
				</div>
			</header>
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='flex flex-col gap-y-12'>
						<div className='w-full'>
							<input type='text' className='w-full px-4 py-2 text-sm md:text-base rounded-3xl bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:outline-[#D7AB6C]' placeholder='Cari event...' />
						</div>
						<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20'>
							{eventData.map((event) => (
								<PastEventCard key={event.id} data={event} />
							))}
						</div>
						<Pagination />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
