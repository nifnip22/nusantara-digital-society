import PastEventHeader from '@/components/event/PastEventHeader';
import EventImage from '@/components/event/EventImage';
import EventGuests from '@/components/event/EventGuests';
import EventAgenda from '@/components/event/EventAgenda';
import Iframe from '@/components/ui/Iframe';
import Masonry from '@/components/layouts/Masonry';
import path from 'path';
import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const slug = await params;
	try {
		const filePath = path.join(process.cwd(), 'src/mdx/events/past-events', `${slug.slug}.mdx`);
		const content = await fs.readFile(filePath, 'utf-8');

		const { frontmatter } = await compileMDX<{ eventTitle: string }>({
			source: content,
			options: {
				parseFrontmatter: true,
			},
		});

		return {
			title: frontmatter.eventTitle,
		};
	} catch {
		return {
			title: 'Event Tidak Ditemukan',
		};
	}
}

export default async function PastEventSlug({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const filePath = path.join(process.cwd(), 'src/mdx/events/past-events', `${slug}.mdx`);

	try {
		const content = await fs.readFile(filePath, 'utf8');

		const data = await compileMDX<{
			eventTitle: string;
			eventLocation: string;
			eventDate: string;
			eventTime: string;
			participantsCount: number;
			eventImageSrc: string;
			eventImageAlt: string;
			eventGuests: Array<{ guestImageSrc: string; guestName: string; guestRole: string; guestDescription: string }>;
			eventAgenda: Array<{ agendaTime: string; agendaDescription: string }>;
			eventPhotoGallery: Array<{ imageSrc: string; imageAlt: string }>;
			eventVideoGallery: Array<{ iframeSrc: string }>;
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
						<div className='w-fit px-3 py-1 bg-gray-900 rounded-full'>
							<p className='text-base md:text-lg text-[#D7AB6C] font-semibold'>Completed</p>
						</div>
						<PastEventHeader
							eventTitle={data.frontmatter.eventTitle}
							eventLocation={data.frontmatter.eventLocation}
							eventDate={data.frontmatter.eventDate}
							eventTime={data.frontmatter.eventTime}
							participantsCount={data.frontmatter.participantsCount}
						/>
					</div>
					<EventImage eventImageSrc={data.frontmatter.eventImageSrc} eventImageAlt={data.frontmatter.eventImageAlt} />
				</div>
				<div className='flex flex-col gap-y-20'>
					<div className='flex flex-col gap-y-6'>
						<div className='flex flex-col gap-1'>
							<h2 className='text-xl md:text-2xl font-semibold'>Deskripsi Event</h2>
							<hr className='w-20 h-1 bg-[#D7AB6C]' />
						</div>
						<article>{data.content}</article>
					</div>
					<div className='flex flex-col gap-y-6'>
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
					<div className='flex flex-col gap-y-6'>
						<div className='flex flex-col gap-1'>
							<h2 className='text-xl md:text-2xl font-semibold'>Galeri Foto</h2>
							<hr className='w-20 h-1 bg-[#D7AB6C]' />
						</div>
						<Masonry photos={data.frontmatter.eventPhotoGallery} />
					</div>
					<div className='flex flex-col gap-y-6'>
						<div className='flex flex-col gap-1'>
							<h2 className='text-xl md:text-2xl font-semibold'>Galeri Video</h2>
							<hr className='w-20 h-1 bg-[#D7AB6C]' />
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{data.frontmatter.eventVideoGallery.map((video, index) => (
								<Iframe key={index} iframeSrc={video.iframeSrc} />
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
