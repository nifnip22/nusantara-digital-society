import { MapPin, Calendar, FileClock } from 'lucide-react';
import Button from '../ui/Button';
import Link from 'next/link';
import { UpcomingEventHeaderProps } from '@/utils/types';

export default function UpcomingEventHeader({ eventTitle, eventLocation, eventDate, eventTime, registrationDeadlineDate, registrationDeadlineTime, registrationLink }: UpcomingEventHeaderProps) {
	return (
		<>
			<h1 className='text-4xl md:text-5xl font-bold leading-normal tracking-wide'>{eventTitle}</h1>
			<div className={'flex flex-col gap-4'}>
				<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
					<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
						<MapPin className={'w-8 h-8 text-[#D7AB6C]'} />
					</div>
					<div>
						<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Lokasi</p>
						<p className={'text-base md:text-lg font-medium'}>{eventLocation}</p>
					</div>
				</div>
				<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
					<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
						<Calendar className={'w-8 h-8 text-[#D7AB6C]'} />
					</div>
					<div>
						<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Tanggal & Waktu</p>
						<p className={'text-base md:text-lg font-medium'}>
							{eventDate} | {eventTime} WITA
						</p>
					</div>
				</div>
				<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
					<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
						<FileClock className={'w-8 h-8 text-[#D7AB6C]'} />
					</div>
					<div>
						<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Batas Waktu Pendaftaran</p>
						<p className={'text-base md:text-lg font-medium'}>
							{registrationDeadlineDate} | {registrationDeadlineTime} WITA
						</p>
					</div>
				</div>
			</div>
			<Link href={registrationLink || '#'}>
				<Button label='Registrasi Sekarang' type={'button'} variant={'dark'} className={'w-full rounded-full after:content-["_→"]'} />
			</Link>
		</>
	);
}
