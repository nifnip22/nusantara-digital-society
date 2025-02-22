import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { MapPin, Calendar, FileClock } from 'lucide-react';
import Button from '../ui/Button';
import Image from 'next/image';

export default async function EventSection() {
	const upcomingEventFilePath = path.join(process.cwd(), 'src/mdx/events/upcoming-event', 'page.mdx');
	const upcomingEventContent = await fs.readFile(upcomingEventFilePath, 'utf-8');

	const { frontmatter } = await compileMDX<{
		eventImageSrc: string;
		eventTitle: string;
		eventLocation: string;
		eventDate: string;
		eventTime: string;
		registrationDeadlineDate: string;
		registrationDeadlineTime: string;
		registrationLink: string;
	}>({
		source: upcomingEventContent,
		options: {
			parseFrontmatter: true,
		},
	});

	return (
		<>
			<main className={'px-6 md:px-16 2xl:px-40'}>
				<div className={'mb-10 md:mb-20 text-4xl md:text-5xl font-bold text-gray-900 flex flex-col justify-center items-center gap-4'}>
					<hr className={'w-16 h-3 bg-[#D7AB6C] rounded-full'} />
					<h1>Event</h1>
				</div>
				<div className={'flex flex-col 2xl:flex-row gap-y-16 2xl:gap-x-8 justify-center items-center'}>
					<div className={'bg-gray-300 aspect-square w-full 2xl:max-w-4xl rounded-3xl overflow-hidden'}>
						<Image src={frontmatter.eventImageSrc} alt={frontmatter.eventTitle} width={1500} height={1500} className={'w-full h-full object-cover'} />
					</div>
					<div className={'flex flex-col gap-8 w-full 2xl:max-w-4xl'}>
						<div className={'flex flex-col gap-4'}>
							<div>
								<p className={'uppercase text-sm md:text-lg text-[#D7AB6C] font-semibold'}>Upcoming</p>
								<hr className={'w-12 h-1 bg-[#D7AB6C]'} />
							</div>
							<h1 className={'text-2xl md:text-3xl font-bold line-clamp-2 leading-normal tracking-wide'}>{frontmatter.eventTitle}</h1>
						</div>
						<div className={'flex flex-col gap-4'}>
							<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
								<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
									<MapPin className={'w-8 h-8 text-[#D7AB6C]'} />
								</div>
								<div>
									<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Lokasi</p>
									<p className={'text-base md:text-lg font-medium'}>{frontmatter.eventLocation}</p>
								</div>
							</div>
							<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
								<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
									<Calendar className={'w-8 h-8 text-[#D7AB6C]'} />
								</div>
								<div>
									<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Tanggal & Waktu</p>
									<p className={'text-base md:text-lg font-medium'}>
										{frontmatter.eventDate} | {frontmatter.eventTime}
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
										{frontmatter.registrationDeadlineDate} | {frontmatter.registrationDeadlineTime}
									</p>
								</div>
							</div>
						</div>
						<div className={'flex flex-col gap-4'}>
							<Link href={'/upcoming-event'}>
								<Button label={'Lebih Detail'} type={'button'} variant={'outline'} className={'w-full rounded-full after:content-["_→"]'} />
							</Link>
							<Link href={frontmatter.registrationLink}>
								<Button label='Registrasi Sekarang' type={'button'} variant={'dark'} className={'w-full rounded-full after:content-["_→"]'} />
							</Link>
						</div>
					</div>
				</div>
				<div className={'flex justify-center items-center mt-24'}>
					<Link href={'/past-events'}>
						<Button label={'Lihat Past Events'} type={'button'} variant={'primary'} className={'rounded-full after:content-["_→"]'} />
					</Link>
				</div>
			</main>
		</>
	);
}
