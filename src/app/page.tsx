import Navbar from '../components/navbar';
import Button from '@/components/ui/Button';
import Footer from '@/components/footer';
import Form from 'next/form';
import FloatingLabelInput from '@/components/floatingInput';
import { JoinUsInput } from '@/etc/constant';
import Link from 'next/link';
import { Calendar, Eye, MapPin } from 'lucide-react';

export default function Home() {
	return (
		<div className='font-geist-sans overflow-x-hidden'>
			<div className='bg-[#f9f2e9] relative'>
				<Navbar />
				<img src='/icons/circle.svg' className='absolute overflow-hidden translate-x-1/4 -translate-y-1/2 opacity-20 z-[0]' />
				<section id='home' className='z-10 relative pt-12 pb-[48rem] md:pb-[54rem] md:pt-28 lg:pb-[28rem] xl:pb-[34rem] xl:pt-24'>
					<main id='tagline' className='px-6 md:px-16 2xl:px-40 text-center'>
						<h1 className='text-4xl md:text-6xl xl:text-8xl font-bold mb-12'>
							Empowering Innovation <br /> Advancing <span className='shining-text text-[#D7AB6C]'>Nusantara</span>
						</h1>
						<div className='flex gap-4 justify-center items-center'>
							<Button label='About Us' type='button' variant='primary' className='rounded-full'></Button>
							<Button label='Join Us' type='button' variant='dark' className='rounded-full'></Button>
						</div>
					</main>
					<main className='px-6 md:px-16 2xl:px-40 mt-32 absolute -translate-y-12'>
						<div className='bg-white w-full h-auto rounded-3xl p-10 sm:p-24 shadow-lg'>
							<div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 w-full mb-32'>
								<div className='lg:w-1/2'>
									<p className='text-sm md:text-md xl:text-xl font-semibold text-[#D7AB6C] uppercase mb-4'>Visi & Misi</p>
									<h1 className='text-xl md:text-2xl xl:text-4xl font-medium'>Menjadi Penggerak Utama Ekosistem Digital Nusantara untuk Mendukung Pembangunan Ibu Kota Nusantara (IKN) sebagai Pusat Digital Nasional.</h1>
								</div>
								<div className='w-full lg:w-1/2'>
									<iframe src='https://www.youtube.com/embed/mFVyoyNyE5U' allowFullScreen className='w-full h-[35vh] md:aspect-video md:h-auto rounded-3xl'></iframe>
								</div>
							</div>
							<div className='flex flex-col lg:flex-row justify-center items-start gap-20 lg:gap-32 w-full'>
								<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 w-full lg:w-1/2'>
									<div className='bg-[#f9f2e9] p-4 rounded-3xl text-[#D7AB6C] shrink-0'>
										<img src='/icons/connect.svg' alt='' className='w-10 md:w-16 2xl:w-20' />
									</div>
									<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start gap-4'>
										<h1 className='text-xl md:text-2xl xl:text-4xl font-medium'>Connect</h1>
										<p className='text-sm md:text-md xl:text-xl font-medium text-gray-900'>Menghubungkan Seluruh Talenta Digital Nusantara.</p>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 w-full lg:w-1/2'>
									<div className='bg-[#f9f2e9] p-4 rounded-3xl text-[#D7AB6C] shrink-0'>
										<img src='/icons/skill.svg' alt='' className='w-10 md:w-16 2xl:w-20' />
									</div>
									<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start gap-4'>
										<h1 className='text-xl md:text-2xl xl:text-4xl font-medium'>Upgrade</h1>
										<p className='text-sm md:text-md xl:text-xl font-medium text-gray-900'>Meningkatkan Keterampilan Talenta Digital Nusantara.</p>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 w-full lg:w-1/2'>
									<div className='bg-[#f9f2e9] p-4 rounded-3xl text-[#D7AB6C] shrink-0'>
										<img src='/icons/startup.svg' alt='' className='w-10 md:w-16 2xl:w-20' />
									</div>
									<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start gap-4'>
										<h1 className='text-xl md:text-2xl xl:text-4xl font-medium'>Push</h1>
										<p className='text-sm md:text-md xl:text-xl font-medium text-gray-900'>Mendorong Lahirnya Startup Lokal yang Dapat Bersaing di Tingkat Nasional maupun Global.</p>
									</div>
								</div>
							</div>
						</div>
					</main>
				</section>
			</div>
			<section id='article' className='bg-zinc-50 pt-[56rem] pb-20 md:pt-[60rem] md:pb-32 lg:pt-[36rem] xl:pt-[46rem] xl:pb-40'>
				<main className='px-6 md:px-16 2xl:px-40'>
					<div className='mb-10 md:mb-20 text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 flex flex-col justify-center items-center gap-4'>
						<hr className='w-16 h-3 bg-[#D7AB6C] rounded-full' />
						<h1>Artikel</h1>
					</div>
					<div className='mb-72 md:mb-52 relative'>
						<div className='xl:pl-52'>
							<img src={'/img/Test.jpg'} alt='' className='w-full h-auto rounded-3xl' />
						</div>
						<Link
							href='#'
							className='group absolute overflow-hidden top-full xl:top-1/2 left-8 xl:left-0 transform -translate-y-1/4 md:-translate-y-1/2 xl:-translate-x-8 bg-gradient-to-r from-[#D7AB6C] to-[#a38253] opacity-90 hover:opacity-100 hover:shadow-2xl duration-300 text-white p-6 rounded-3xl max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl'>
							<div className='z-2'>
								<p className='uppercase text-sm md:text-lg xl:text-2xl font-semibold tracking-wide'>Terbaru</p>
								<hr className='w-6 md:w-12 h-1 bg-white mb-4' />
								<h2 className='mt-2 mb-4 text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 tracking-wide leading-tight'>NVIDIA Campus Roadshow 2024 Universitas Mulia</h2>
								<p className='text-base md:text-md xl:text-xl font-medium max-w-[50rem] line-clamp-2 tracking-wide leading-relaxed'>
									NVIDIA Campus Roadshow 2024 Sukses Diselenggarakan di Universitas Mulia Balikpapan Bekerja Sama dengan Bitracom Gaming pada Hari Kamis (19/12/2024) Kemarin.
								</p>
								<p className='opacity-0 group-hover:opacity-100 duration-300 mt-0 group-hover:mt-4 inline-block text-md font-semibold text-white-500 hover:text-white-400 after:content-["_→"]'>Baca Selengkapnya</p>
							</div>
							<img src='/img/nds-branch.svg' className='absolute w-72 -translate-x-full -translate-y-1/2 top-3/4 left-full z-1 opacity-0 group-hover:opacity-30 duration-300' />
						</Link>
					</div>
					<div className='hidden 2xl:block mb-4'>
						<p className='uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold'>Artikel Lainnya</p>
						<hr className='w-12 h-1 bg-[#D7AB6C]' />
					</div>
					<div className='flex flex-col 2xl:flex-row gap-y-16 2xl:gap-x-12 justify-start 2xl:justify-center items-start mb-20'>
						<div className='flex flex-col gap-4'>
							<div className='2xl:hidden'>
								<p className='uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold'>Artikel Lainnya</p>
								<hr className='w-6 md:w-12 h-1 bg-[#D7AB6C] mb-4' />
							</div>
							<Link href='#' className='flex flex-col gap-4 md:gap-6 group'>
								<div className='bg-gray-300 w-full 2xl:max-w-6xl rounded-3xl relative overflow-hidden mb-4'>
									<img src={'/img/Test.jpg'} alt='nds' className='w-full h-full object-cover' />
									<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<Eye size={40} color='#ffffff' />
									</div>
								</div>
								<p className='text-xs md:text-sm xl:text-lg'>
									21/12/2024 - by <span className='text-[#D7AB6C]'>Admin</span>
								</p>
								<h1 className='text-xl md:text-2xl xl:text-4xl font-bold w-full 2xl:max-w-[50rem] line-clamp-2 leading-relaxed md:leading-tight group-hover:underline group-hover:underline-offset-4'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</h1>
								<p className='text-sm md:text-md xl:text-xl font-medium w-full 2xl:max-w-[50rem] line-clamp-2 tracking-wide leading-relaxed lg:leading-loose'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi hic odio aliquid magnam, nulla, officiis porro adipisci perferendis eveniet velit distinctio quidem ullam, aperiam fugiat?
									Adipisci reprehenderit minima repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas qui hic porro quo molestias sed ipsam, repellendus, modi, cumque iste. Rerum sint officiis
									itaque obcaecati aperiam molestias laboriosam non.
								</p>
								<div className='flex flex-row gap-4 items-center'>
									<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
										<p>Tech Talk</p>
									</div>
									<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
										<p>AI</p>
									</div>
								</div>
							</Link>
						</div>
						<div className='flex flex-col gap-16 md:gap-8'>
							<div>
								<Link href='#' className='flex flex-col md:flex-row gap-6 w-full group'>
									<div className='bg-gray-100 w-full md:max-w-sm lg:max-w-lg xl:max-w-2xl 2xl:max-w-xs rounded-3xl relative overflow-hidden mb-4'>
										<img src={'/img/Test.jpg'} alt='nds' className='w-full h-full object-cover' />
										<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<Eye size={40} color='#ffffff' />
										</div>
									</div>
									<div className='flex flex-col gap-4'>
										<p className='text-xs md:text-sm xl:text-lg'>
											21/12/2024 - by <span className='text-[#D7AB6C]'>Admin</span>
										</p>
										<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-xl group-hover:underline group-hover:underline-offset-4'>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae
											natus eligendi suscipit. Eum, quo.
										</h1>
										<p className='visible 2xl:hidden text-sm md:text-md xl:text-xl font-medium md:max-w-[27rem] line-clamp-2 tracking-wide leading-relaxed lg:leading-loose'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis
											laborum aperiam laudantium neque expedita?
										</p>
										<div className='flex flex-row gap-4 items-center'>
											<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
												<p>Tech Talk</p>
											</div>
											<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
												<p>AI</p>
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div>
								<Link href='#' className='flex flex-col md:flex-row gap-6 w-full group'>
									<div className='bg-gray-100 w-full md:max-w-sm lg:max-w-lg xl:max-w-2xl 2xl:max-w-xs rounded-3xl relative overflow-hidden mb-4'>
										<img src={'/img/Test.jpg'} alt='nds' className='w-full h-full object-cover' />
										<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<Eye size={40} color='#ffffff' />
										</div>
									</div>
									<div className='flex flex-col gap-4'>
										<p className='text-xs md:text-sm xl:text-lg'>
											21/12/2024 - by <span className='text-[#D7AB6C]'>Admin</span>
										</p>
										<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-xl group-hover:underline group-hover:underline-offset-4'>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae
											natus eligendi suscipit. Eum, quo.
										</h1>
										<p className='visible 2xl:hidden text-sm md:text-md xl:text-xl font-medium md:max-w-[27rem] line-clamp-2 tracking-wide leading-relaxed lg:leading-loose'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis
											laborum aperiam laudantium neque expedita?
										</p>
										<div className='flex flex-row gap-4 items-center'>
											<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
												<p>Tech Talk</p>
											</div>
											<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
												<p>AI</p>
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div>
								<Link href='#' className='flex flex-col md:flex-row gap-6 w-full group'>
									<div className='bg-gray-100 w-full md:max-w-sm lg:max-w-lg xl:max-w-2xl 2xl:max-w-xs rounded-3xl relative overflow-hidden mb-4'>
										<img src={'/img/Test.jpg'} alt='nds' className='w-full h-full object-cover' />
										<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<Eye size={40} color='#ffffff' />
										</div>
									</div>
									<div className='flex flex-col gap-4'>
										<p className='text-xs md:text-sm xl:text-lg'>
											21/12/2024 - by <span className='text-[#D7AB6C]'>Admin</span>
										</p>
										<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-xl group-hover:underline group-hover:underline-offset-4'>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae
											natus eligendi suscipit. Eum, quo.
										</h1>
										<p className='visible 2xl:hidden text-sm md:text-md xl:text-xl font-medium md:max-w-[27rem] line-clamp-2 tracking-wide leading-relaxed lg:leading-loose'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis
											laborum aperiam laudantium neque expedita?
										</p>
										<div className='flex flex-row gap-4 items-center'>
											<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
												<p>Tech Talk</p>
											</div>
											<div className='bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-lg text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'>
												<p>AI</p>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='flex justify-center items-center'>
						<Button label='Lihat Semua Artikel' type='button' variant='primary' className='rounded-full after:content-["_→"]' />
					</div>
				</main>
			</section>
			<section id='event' className='py-20 md:py-32 xl:py-40'>
				<main className='px-6 md:px-16 2xl:px-40'>
					<div className='mb-10 md:mb-20 text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 flex flex-col justify-center items-center gap-4'>
						<hr className='w-16 h-3 bg-[#D7AB6C] rounded-full' />
						<h1>Event</h1>
					</div>
					<div className='flex flex-col 2xl:flex-row gap-y-16 2xl:gap-x-8 justify-center items-center'>
						<div className='bg-gray-300 w-full 2xl:max-w-4xl rounded-3xl overflow-hidden'>
							<img src={'/img/event.jpg'} alt='nds' className='w-full h-full object-cover' />
						</div>
						<div className='flex flex-col justify-between gap-12 w-full 2xl:max-w-4xl h-auto'>
							<div className='flex flex-col gap-4'>
								<div>
									<p className='uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold'>Upcoming</p>
									<hr className='w-12 h-1 bg-[#D7AB6C] mb-4' />
								</div>
								<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-3 leading-relaxed md:leading-tight'>NVIDIA Campus Roadshow Balikpapan 2024</h1>
								<p className='text-sm md:text-md xl:text-xl font-medium line-clamp-6 tracking-wide leading-relaxed md:leading-loose'>NVIDIA Powers the World&apos;s AI. And Yours.</p>
							</div>
							<div className='flex flex-col gap-4'>
								<div className='group flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'>
									<div className='p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'>
										<MapPin className='w-8 h-8 text-[#D7AB6C]' />
									</div>
									<div>
										<p className='text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'>Lokasi</p>
										<p className='text-base md:text-xl font-medium'>Gedung Cheng Ho - Universitas Mulia Balikpapan</p>
									</div>
								</div>
								<div className='group flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'>
									<div className='p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'>
										<Calendar className='w-8 h-8 text-[#D7AB6C]' />
									</div>
									<div>
										<p className='text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'>Tanggal & Waktu</p>
										<p className='text-base md:text-xl font-medium'>19 Desember 2024 - 14:00 WITA</p>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-4'>
								<Button label='Lebih Detail' type='button' variant='outline' className='rounded-full after:content-["_→"]' />
								<Button label='Registrasi Sekarang' type='button' variant='dark' className='rounded-full after:content-["_→"]' />
							</div>
						</div>
					</div>
					<div className='flex justify-center items-center mt-24'>
						<Button label='Lihat Past Events' type='button' variant='primary' className='rounded-full after:content-["_→"]' />
					</div>
				</main>
			</section>
			<section id='joinUs' className='bg-[#f9f2e9]'>
				<main>
					<div className='flex flex-col lg:flex-row items-center'>
						<div className='w-full max-w-5xl lg:h-screen overflow-hidden'>
							<img src={'/img/Test.jpg'} alt='nds' className='w-full h-full object-cover' />
						</div>
						<div className='max-w-5xl flex flex-col gap-8 py-20 pl-4 md:pl-8 pr-6 md:pr-16 2xl:pr-40'>
							<h1 className='text-2xl md:text-4xl xl:text-5xl font-bold text-gray-900'>Join Us</h1>
							<p className='text-sm md:text-lg xl:text-2xl font-medium text-gray-900 tracking-wide leading-relaxed'>
								Bergabung dengan Komunitas Nusantara Digital Society dan Bersama Kita Tumbuhkan Ekosistem Digital dan Teknologi Nusantara
							</p>
							<Form action='#' className='flex  gap-10 col-span-3'>
								<div className='flex flex-col gap-12 w-full'>
									{JoinUsInput.map((input, index) => (
										<FloatingLabelInput key={index} {...input} />
									))}
									<Button label='Ajukan Permohonan' variant='secondary' type='submit' className='rounded-full' />
								</div>
							</Form>
						</div>
					</div>
				</main>
			</section>
			<Footer />
		</div>
	);
}
