import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, UsersRound } from 'lucide-react';
import Button from '@/components/ui/Button';

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
							<div className='group flex flex-col gap-4'>
								<div className='relative bg-zinc-300 w-full aspect-square rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Event'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
									<div className={'absolute inset-0 flex items-start p-2'}>
										<div className='px-3 py-1 bg-gray-900 rounded-full'>
											<p className='text-sm text-[#D7AB6C]'>Completed</p>
										</div>
									</div>
								</div>
								<div className='flex flex-col gap-4'>
									<h1 className='text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'>
										NVIDIA Campus Tour Roadshow Balikpapan 2024
									</h1>
									<div className={'group flex items-center gap-4 p-4 bg-gray-50 rounded-xl'}>
										<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
											<MapPin className={'w-6 h-6 text-[#D7AB6C]'} />
										</div>
										<div>
											<p className={'text-xs font-semibold text-[#D7AB6C]'}>Lokasi</p>
											<p className={'text-md font-medium line-clamp-1'}>Gedung Cheng Ho - Universitas Mulia Balikpapan</p>
										</div>
									</div>
									<div className={'group flex items-center gap-4 p-4 bg-gray-50 rounded-xl'}>
										<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
											<Calendar className={'w-6 h-6 text-[#D7AB6C]'} />
										</div>
										<div>
											<p className={'text-xs font-semibold text-[#D7AB6C]'}>Tanggal & Waktu</p>
											<p className={'text-md font-medium line-clamp-1'}>04 Februari 2025 | 09:00 - 17:00 WITA</p>
										</div>
									</div>
									<div className={'group flex items-center gap-4 p-4 bg-gray-50 rounded-xl'}>
										<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
											<UsersRound className={'w-6 h-6 text-[#D7AB6C]'} />
										</div>
										<div>
											<p className={'text-xs font-semibold text-[#D7AB6C]'}>Jumlah Peserta Hadir</p>
											<p className={'text-md font-medium line-clamp-1'}>250</p>
										</div>
									</div>
									<p className={'mt-4 text-lg font-semibold line-clamp-1'}>Tamu Unggulan</p>
									<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
										<div className='flex gap-x-4 items-center'>
											<div className='bg-zinc-300 w-24 h-auto aspect-square rounded-3xl overflow-hidden'></div>
											<div className='flex flex-col gap-y-1'>
												<p className={'text-md font-medium'}>Nama Tamu</p>
												<p className={'text-xs'}>Narasumber</p>
											</div>
										</div>
										<div className='flex gap-x-4 items-center'>
											<div className='bg-zinc-300 w-24 h-auto aspect-square rounded-3xl overflow-hidden'></div>
											<div className='flex flex-col gap-y-1'>
												<p className={'text-md font-medium'}>Nama Tamu</p>
												<p className={'text-xs'}>Narasumber</p>
											</div>
										</div>
									</div>
									<p className={'mt-4 text-lg font-semibold line-clamp-1'}>Highlights</p>
									<ul className='space-y-2'>
										<li className='flex gap-x-4 items-start text-sm text-gray-600'>
											<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
											<p className={'text-md font-medium'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</li>
										<li className='flex gap-x-4 items-start text-sm text-gray-600'>
											<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
											<p className={'text-md font-medium'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</li>
									</ul>
									<Link href={'#'}>
										<Button label='Lihat Dokumentasi' variant='dark' className='w-full mt-4 rounded-xl' />
									</Link>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
