import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Form from 'next/form';

export default function Home() {
	return (
		<div className='font-[family-name:var(--font-geist-sans)]'>
			<nav className='navbar bg-[#f9f2e9] px-6 md:px-16 2xl:px-40 py-8'>
				<img src={'/img/nds-horizontal-logo.svg'} alt='nds' className='w-36 xl:w-52 h-auto' />
			</nav>
			<main id='one' className='bg-[#f9f2e9] py-12 md:py-32 xl:py-40'>
				<section id='tagline' className='px-6 md:px-16 2xl:px-40'>
					<h1 className='text-4xl md:text-6xl xl:text-8xl text-center font-bold'>
						Empowering Innovation <br /> Advancing <span className='text-[#D7AB6C]'>Nusantara</span>
					</h1>
				</section>
				<section id='intro-vid' className='px-6 md:px-16 2xl:px-40 mt-20 md:mt-32 xl:mt-40'>
					<div className='bg-[#D7AB6C] w-full h-auto rounded-3xl p-4'>
						<iframe src='https://www.youtube.com/embed/mFVyoyNyE5U' allowFullScreen className='w-full aspect-video rounded-3xl'></iframe>
					</div>
				</section>
				<section id='vision' className='px-6 md:px-16 2xl:px-40 mt-20 md:mt-32 xl:mt-40'>
					<h1 className='text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center mb-10 md:mb-20'>Visi</h1>
					<p className='text-sm md:text-lg xl:text-2xl font-medium text-gray-900 text-center lg:px-40'>
						Menjadi Penggerak Utama Ekosistem Digital Nusantara untuk Mendukung Pembangunan Ibu Kota Nusantara (IKN) sebagai Pusat Digital Nasional.
					</p>
				</section>
				<hr className='w-52 h-3 bg-[#D7AB6C] mx-auto mt-20 md:mt-32 xl:mt-40 rounded-full' />
				<section id='mission' className='px-6 md:px-16 2xl:px-40 mt-10 md:mt-20 xl:mt-40'>
					<h1 className='text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center mb-10 md:mb-20'>Misi</h1>
					<div className='grid grid-cols-1 2xl:grid-cols-2 gap-8 lg:px-40'>
						<div className='flex flex-row items-center gap-4 justify-start'>
							<div className='bg-gray-900 p-4 rounded-lg text-[#D7AB6C]'>SVG</div>
							<p className='text-sm md:text-lg xl:text-2xl font-medium text-gray-900'>Menghubungkan Seluruh Talenta Digital Nusantara.</p>
						</div>
						<div className='flex flex-row items-center gap-4 justify-start'>
							<div className='bg-gray-900 p-4 rounded-lg text-[#D7AB6C]'>SVG</div>
							<p className='text-sm md:text-lg xl:text-2xl font-medium text-gray-900'>Meningkatkan Keterampilan Talenta Digital Nusantara.</p>
						</div>
						<div className='flex flex-row items-center gap-4 2xl:col-span-2 justify-start 2xl:justify-center'>
							<div className='bg-gray-900 p-4 rounded-lg text-[#D7AB6C]'>SVG</div>
							<p className='text-sm md:text-lg xl:text-2xl font-medium text-gray-900'>Mendorong Lahirnya Startup Lokal yang Dapat Bersaing di Tingkat Nasional maupun Global.</p>
						</div>
					</div>
				</section>
			</main>
			<main id='two' className='bg-zinc-50 py-12 md:py-32 xl:py-40'>
				<section id='article' className='px-6 md:px-16 2xl:px-40'>
					<h1 className='mb-10 md:mb-20 text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center'>Artikel</h1>
					<div className='mb-72 md:mb-52 relative'>
						<div className='xl:pl-52'>
							<img src='/img/test.jpg' alt='Featured Car' className='w-full h-auto rounded-3xl' />
						</div>
						<a
							href='#'
							className='group absolute top-full lg:top-2/3 xl:top-1/2 left-8 xl:left-0 transform -translate-y-1/4 md:-translate-y-1/2 xl:-translate-x-8 bg-[#D7AB6C] bg-opacity-90 hover:bg-opacity-100 duration-300 text-white p-6 rounded-3xl max-w-xs md:max-w-lg xl:max-w-2xl'>
							<p className='uppercase text-sm md:text-lg xl:text-2xl font-semibold tracking-wide'>Terbaru</p>
							<hr className='w-6 md:w-12 h-1 bg-white mb-4' />
							<h2 className='mt-2 mb-4 text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 tracking-wide leading-tight'>NVIDIA Campus Roadshow 2024 Universitas Mulia</h2>
							<p className='text-base md:text-md xl:text-xl font-medium max-w-[50rem] line-clamp-2 tracking-wide leading-relaxed'>
								NVIDIA Campus Roadshow 2024 Sukses Diselenggarakan di Universitas Mulia Balikpapan Bekerja Sama dengan Bitracom Gaming pada Hari Kamis (19/12/2024) Kemarin.
							</p>
							<p className='opacity-0 group-hover:opacity-100 duration-300 mt-0 group-hover:mt-4 inline-block text-md font-semibold text-white-500 hover:text-white-400'>Baca Selengkapnya</p>
						</a>
					</div>
					<p className='hidden 2xl:block uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold'>Artikel Lainnya</p>
					<hr className='hidden 2xl:block w-12 h-1 bg-[#D7AB6C] mb-4' />
					<div className='flex flex-col 2xl:flex-row gap-y-16 2xl:gap-x-12 justify-center 2xl:justify-start items-center 2xl:items-start mb-20'>
						<div className='flex flex-col gap-4'>
							<div className='2xl:hidden'>
								<p className='uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold'>Artikel Lainnya</p>
								<hr className='w-6 md:w-12 h-1 bg-[#D7AB6C] mb-4' />
							</div>
							<a href='#' className='flex flex-col gap-4 group'>
								<div className='bg-gray-300 max-w-4xl rounded-3xl relative overflow-hidden mb-4'>
									<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
									<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<p className='text-white text-md font-bold'>Baca Selengkapnya</p>
									</div>
								</div>
								<p className='text-xs md:text-sm xl:text-lg'>
									21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
								</p>
								<h1 className='text-xl md:text-2xl xl:text-4xl font-bold max-w-[50rem] line-clamp-2 leading-relaxed md:leading-tight group-hover:underline group-hover:underline-offset-4'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</h1>
								<p className='text-sm md:text-md xl:text-xl font-medium max-w-[50rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi hic odio aliquid magnam, nulla, officiis porro adipisci perferendis eveniet velit distinctio quidem ullam, aperiam fugiat?
									Adipisci reprehenderit minima repellat.
								</p>
							</a>
						</div>
						<div className='flex flex-col gap-16'>
							<a href='#' className='flex flex-col md:flex-row gap-4 w-full group'>
								<div className='bg-gray-100 max-w-4xl md:max-w-md 2xl:max-w-sm rounded-3xl relative overflow-hidden mb-4'>
									<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
									<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<p className='text-white text-md font-bold'>Baca Selengkapnya</p>
									</div>
								</div>
								<div className='flex flex-col gap-4'>
									<p className='text-xs md:text-sm xl:text-lg'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus
										eligendi suscipit. Eum, quo.
									</h1>
									<p className='text-sm md:text-md xl:text-xl font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum
										aperiam laudantium neque expedita?
									</p>
								</div>
							</a>
							<a href='#' className='flex flex-col md:flex-row gap-4 w-full group'>
								<div className='bg-gray-100 max-w-4xl md:max-w-md 2xl:max-w-sm rounded-3xl relative overflow-hidden mb-4'>
									<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
									<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<p className='text-white text-md font-bold'>Baca Selengkapnya</p>
									</div>
								</div>
								<div className='flex flex-col gap-2'>
									<p className='text-xs md:text-sm xl:text-lg'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus
										eligendi suscipit. Eum, quo.
									</h1>
									<p className='text-sm md:text-md xl:text-xl font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum
										aperiam laudantium neque expedita?
									</p>
								</div>
							</a>
							<a href='#' className='flex flex-col md:flex-row gap-4 w-full group'>
								<div className='bg-gray-100 max-w-4xl md:max-w-md 2xl:max-w-sm rounded-3xl relative overflow-hidden mb-4'>
									<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
									<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<p className='text-white text-md font-bold'>Baca Selengkapnya</p>
									</div>
								</div>
								<div className='flex flex-col gap-2'>
									<p className='text-xs md:text-sm xl:text-lg'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-2 leading-relaxed md:leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus
										eligendi suscipit. Eum, quo.
									</h1>
									<p className='text-sm md:text-md xl:text-xl font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed md:leading-loose'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum
										aperiam laudantium neque expedita?
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className='flex justify-center items-center'>
						<Button label='Lihat Semua Artikel' type='button' variant='outline' />
					</div>
				</section>
			</main>
			<main id='three' className='py-12 md:py-32 xl:py-40'>
				<section id='events' className='px-6 md:px-16 2xl:px-40'>
					<h1 className='mb-10 md:mb-20 text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900 text-center'>Event</h1>
					<div className='flex flex-col 2xl:flex-row gap-y-16 2xl:gap-x-8 justify-center 2xl:justify-start items-center 2xl:items-start'>
						<div className='bg-gray-300 max-w-4xl rounded-3xl overflow-hidden'>
							<img src='/img/event.jpg' alt='' className='object-cover w-full h-full' />
						</div>
						<div className='flex flex-col justify-between gap-12 max-w-4xl h-auto'>
							<div className='flex flex-col gap-4'>
								<div>
									<p className='uppercase text-sm md:text-lg xl:text-2xl text-[#D7AB6C] font-semibold'>Upcoming</p>
									<hr className='w-12 h-1 bg-[#D7AB6C] mb-4' />
								</div>
								<h1 className='text-xl md:text-2xl xl:text-4xl font-bold line-clamp-3 leading-relaxed md:leading-tight'>NVIDIA Campus Roadshow Balikpapan 2024</h1>
								<p className='text-sm md:text-md xl:text-xl font-medium line-clamp-3 tracking-wide leading-relaxed md:leading-loose'>NVIDIA Powers the World&apos;s AI. And Yours.</p>
							</div>
							<div className='flex flex-col gap-4'>
								<p className='text-sm md:text-md xl:text-xl font-medium line-clamp-3 tracking-wide leading-loose'>Location</p>
								<p className='text-sm md:text-md xl:text-xl font-medium line-clamp-3 tracking-wide leading-loose'>Date</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<main id='four' className='bg-[#f9f2e9]'>
				<section id='join' className=''>
					<div className='flex flex-col lg:flex-row items-center'>
						<div className='w-full max-w-5xl lg:h-screen overflow-hidden'>
							<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
						</div>
						<div className='max-w-5xl flex flex-col gap-8 py-12 pl-6 lg:pl-12 pr-6 lg:pr-16 2xl:pr-40'>
							<h1 className='text-2xl md:text-4xl xl:text-6xl font-bold text-gray-900'>Join Us</h1>
							<p className='text-sm md:text-lg xl:text-2xl font-medium text-gray-900 tracking-wide leading-relaxed'>
								Bergabung dengan Komunitas Nusantara Digital Society dan Bersama Kita Tumbuhkan Ekosistem Digital dan Teknologi Nusantara
							</p>
							<Form action='#' className='flex flex-col gap-8'>
								<Input label='Nama Lengkap' inputName='nama_lengkap' type='text' maxLength={30} required={true} disabled={false} />
								<Input label='Email' inputName='email' type='email' required={true} disabled={false} />
								<Input label='Pekerjaan' inputName='pekerjaan' type='text' maxLength={30} required={true} disabled={false} />
								<Input label='No Telepon (Aktif Menggunakan WhatsApp)' inputName='no_telp' type='text' maxLength={30} required={true} disabled={false} />
							</Form>
							<Button label='Request for Invitation' variant='primary' type='submit' />
						</div>
					</div>
				</section>
			</main>
			<footer className='bg-zinc-50 py-12 md:py-32'>
				<section id='contact' className='px-6 md:px-16 2xl:px-40'>
					<div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
						<img src={'/img/nds-horizontal-logo.svg'} alt='nds' className='w-36 xl:w-52 h-auto' />
						<p className='text-xs md:text-md xl:text-lg font-medium line-clamp-3 tracking-wide leading-loose'>&copy; 2024 Nusantara Digital Society. All Rights Reserved.</p>
					</div>
				</section>
			</footer>
		</div>
	);
}
