import EventAgenda from '@/components/event/EventAgenda';
import EventGuests from '@/components/event/EventGuests';
import UpcomingEventHeader from '@/components/event/UpcomingEventHeader';
import EventImage from '@/components/event/EventImage';
import path from 'path';
import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
	try {
		const filePath = path.join(process.cwd(), 'src/mdx/events/upcoming-event', 'page.mdx');
		const content = await fs.readFile(filePath, 'utf-8');

		const { frontmatter } = await compileMDX<{ eventTitle: string }>({
			source: content,
			options: {
				parseFrontmatter: true,
			},
		});

		return {
			title: `Upcoming Event - ${frontmatter.eventTitle}`,
		};
	} catch {
		return {
			title: 'Event Tidak Ditemukan',
		};
	}
}

export default async function UpcomingEvent() {
	const filePath = path.join(process.cwd(), 'src/mdx/events/upcoming-event', 'page.mdx');

	try {
		const content = await fs.readFile(filePath, 'utf-8');

		const data = await compileMDX<{
			eventTitle: string;
			eventLocation: string;
			eventDate: string;
			eventTime: string;
			registrationDeadlineDate: string;
			registrationDeadlineTime: string;
			registrationLink: string;
			eventImageSrc: string;
			eventImageAlt: string;
			eventGuests: Array<{
				guestImageSrc: string;
				guestName: string;
				guestRole: string;
				guestDescription: string;
			}>;
			eventAgenda: Array<{
				agendaTime: string;
				agendaDescription: string;
			}>;
		}>({
			source: content,
			options: {
				parseFrontmatter: true,
			},
		});

		return (
			<>
				<div className='flex flex-col lg:flex-row justify-between items-center gap-6 mb-20'>
					<div className='w-full flex flex-col gap-y-4'>
						<div className='w-fit px-3 py-1 bg-[#D7AB6C] rounded-full'>
							<p className='text-base md:text-lg text-gray-100 font-semibold'>Upcoming Event</p>
						</div>
						<UpcomingEventHeader
							eventTitle={data.frontmatter.eventTitle}
							eventLocation={data.frontmatter.eventLocation}
							eventDate={data.frontmatter.eventDate}
							eventTime={data.frontmatter.eventTime}
							registrationDeadlineDate={data.frontmatter.registrationDeadlineDate}
							registrationDeadlineTime={data.frontmatter.registrationDeadlineTime}
							registrationLink={data.frontmatter.registrationLink}
						/>
					</div>
					<EventImage eventImageSrc={data.frontmatter.eventImageSrc} eventImageAlt={data.frontmatter.eventImageAlt} />
				</div>
				<div className='flex flex-col gap-y-20'>
					<div className='flex flex-col gap-y-4'>
						<div className='flex flex-col gap-1'>
							<h2 className='text-xl md:text-2xl font-semibold'>Deskripsi Event</h2>
							<hr className='w-20 h-1 bg-[#D7AB6C]' />
						</div>
						<article>{data.content}</article>
					</div>
					<div className='flex flex-col gap-y-4'>
						<div className='flex flex-col gap-1'>
							<h2 className='text-xl md:text-2xl font-semibold'>Tamu Unggulan</h2>
							<hr className='w-20 h-1 bg-[#D7AB6C]' />
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-4 gap-y-12'>
							{data.frontmatter.eventGuests.map((guest, index) => (
								<EventGuests key={index} guestImageSrc={guest.guestImageSrc} guestName={guest.guestName} guestRole={guest.guestRole} guestDescription={guest.guestDescription} />
							))}
						</div>
					</div>
					<div className='flex flex-col gap-y-6'>
						<div className='flex flex-col gap-1'>
							<h2 className='text-xl md:text-2xl font-semibold'>Agenda Kegiatan</h2>
							<hr className='w-20 h-1 bg-[#D7AB6C]' />
						</div>
						<div className='w-full flex flex-col gap-y-6'>
							{data.frontmatter.eventAgenda.map((agenda, index) => (
								<EventAgenda key={index} agendaTime={agenda.agendaTime} agendaDescription={agenda.agendaDescription} />
							))}
						</div>
					</div>
				</div>
			</>
		);
	} catch {
		notFound();
	}
}
