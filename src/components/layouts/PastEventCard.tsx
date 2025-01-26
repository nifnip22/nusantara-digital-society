import { Calendar, MapPin, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

interface EventData {
	imageSrc: string;
	title: string;
	location: string;
	datetime: string;
	participantsCount: string;
	guests: GuestProps[];
	highlights: string[];
}

interface GuestProps {
	guestImageSrc: string;
	guestName: string;
	guestRole: string;
}

export default function PastEventCard({ data }: { data: EventData }) {
	return (
		<>
			<div className='group flex flex-col gap-4'>
				<div className='relative bg-gray-300 w-full aspect-square rounded-3xl overflow-hidden'>
					<Image src={data.imageSrc} alt={data.title} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
					<div className={'absolute inset-0 flex items-start p-2'}>
						<div className='px-3 py-1 bg-gray-900 rounded-full'>
							<p className='text-sm text-[#D7AB6C]'>Completed</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='h-20'>
						<h1 className='text-2xl font-bold line-clamp-2 leading-normal tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'>{data.title}</h1>
					</div>
					<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl'}>
						<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
							<MapPin className={'w-6 h-6 text-[#D7AB6C]'} />
						</div>
						<div>
							<p className={'text-xs font-semibold text-[#D7AB6C]'}>Lokasi</p>
							<p className={'text-md font-medium'}>{data.location}</p>
						</div>
					</div>
					<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl'}>
						<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
							<Calendar className={'w-6 h-6 text-[#D7AB6C]'} />
						</div>
						<div>
							<p className={'text-xs font-semibold text-[#D7AB6C]'}>Tanggal & Waktu</p>
							<p className={'text-md font-medium'}>{data.datetime}</p>
						</div>
					</div>
					<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl'}>
						<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
							<UsersRound className={'w-6 h-6 text-[#D7AB6C]'} />
						</div>
						<div>
							<p className={'text-xs font-semibold text-[#D7AB6C]'}>Jumlah Peserta Hadir</p>
							<p className={'text-md font-medium'}>{data.participantsCount}</p>
						</div>
					</div>
					<p className={'mt-4 text-lg font-semibold line-clamp-1'}>Tamu Unggulan</p>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
						{data.guests.map((guest, index) => (
							<div key={index} className='flex gap-x-4 items-center'>
								<div className='bg-zinc-300 w-24 h-auto aspect-square rounded-3xl overflow-hidden'>
									<Image src={guest.guestImageSrc} alt={guest.guestName} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
								</div>
								<div className='flex flex-col gap-y-1'>
									<p className='text-md font-medium'>{guest.guestName}</p>
									<p className='text-xs'>{guest.guestRole}</p>
								</div>
							</div>
						))}
					</div>
					<p className={'mt-4 text-lg font-semibold line-clamp-1'}>Highlights</p>
					<ul className='space-y-2'>
						{data.highlights.map((highlight, index) => (
							<li key={index} className='flex gap-x-2 items-start text-sm text-gray-600'>
								<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
								<p className={'text-md font-medium'}>{highlight}</p>
							</li>
						))}
					</ul>
					<Link href={'/past-events/1'}>
						<Button label='Lihat Dokumentasi' variant='dark' className='w-full mt-4 rounded-xl' />
					</Link>
				</div>
			</div>
		</>
	);
}
