export default function Home() {
	return (
		<div className='font-[family-name:var(--font-geist-sans)]'>
			<nav className='navbar bg-[#f9f2e9] px-52 py-8'>
				<img src={'/img/nds-horizontal-logo.svg'} alt='nds' className='w-52 h-auto' />
			</nav>
			<main id='one' className='bg-[#f9f2e9] py-20'>
				<section id='tagline' className='px-32'>
					<h1 className='text-[5rem] text-center font-bold leading-tight'>
						Empowering Innovation <br /> Advancing <span className='text-[#D7AB6C]'>Nusantara</span>
					</h1>
				</section>
				<section id='intro-vid' className='px-52 mt-20'>
					<div className='bg-[#D7AB6C] w-full rounded-3xl p-4'>
						<iframe src='https://www.youtube.com/embed/mFVyoyNyE5U' allowFullScreen className='w-full h-screen rounded-3xl'></iframe>
					</div>
				</section>
				<section id='vision' className='px-52 mt-32'>
					{/* <div className='flex flex-row gap-8 justify-between items-center'>
						<div className='flex flex-col justify-start items-start w-full bg-[#D7AB6C] rounded-3xl p-4'>
							<h1 className='text-[5rem] font-bold text-gray-900'>Visi</h1>
							<p className='text-[1.5rem] font-medium text-gray-900'>Menjadi Penggerak Utama Ekosistem Digital Nusantara untuk Mendukung Pembangunan Ibu Kota Nusantara (IKN) sebagai Pusat Digital Nasional.</p>
						</div>
						<div className='bg-zinc-300 w-full'>Mockup Aniamsi Peta atau Gambar</div>
					</div> */}
					<h1 className='text-[4rem] font-bold text-gray-900 text-center mb-8'>Visi</h1>
					<p className='text-[1.5rem] font-medium text-gray-900 text-center px-32'>Menjadi Penggerak Utama Ekosistem Digital Nusantara untuk Mendukung Pembangunan Ibu Kota Nusantara (IKN) sebagai Pusat Digital Nasional.</p>
				</section>
				<hr className='w-[10%] h-4 bg-[#D7AB6C] mx-auto mt-32 rounded-full' />
				<section id='mission' className='px-52 mt-32'>
					<h1 className='text-[4rem] font-bold text-gray-900 text-center mb-8'>Misi</h1>
					<div className='grid grid-cols-2 gap-8 px-32'>
						<div className='flex flex-row items-center gap-4'>
							<div className='bg-gray-900 p-4 rounded-lg text-[#D7AB6C]'>SVG</div>
							<p className='text-[1.5rem] font-medium text-gray-900'>Menghubungkan Seluruh Talenta Digital Nusantara.</p>
						</div>
						<div className='flex flex-row items-center gap-4'>
							<div className='bg-gray-900 p-4 rounded-lg text-[#D7AB6C]'>SVG</div>
							<p className='text-[1.5rem] font-medium text-gray-900'>Meningkatkan Keterampilan Talenta Digital Nusantara.</p>
						</div>
						<div className='flex flex-row items-center gap-4 col-span-2 justify-center'>
							<div className='bg-gray-900 p-4 rounded-lg text-[#D7AB6C]'>SVG</div>
							<p className='text-[1.5rem] font-medium text-gray-900'>Mendorong Lahirnya Startup Lokal yang Dapat Bersaing di Tingkat Nasional maupun Global.</p>
						</div>
					</div>
				</section>
			</main>
			<main id='two' className='bg-zinc-50 py-20'>
				<section id='article' className='px-52'>
					<h1 className='mb-8 text-[4rem] font-bold text-gray-900 text-center'>Artikel</h1>
					<div className='flex flex-row gap-8 justify-start items-start'>
						<div className='flex flex-col gap-4'>
							<p className='text-[2rem] text-[#D7AB6C] font-semibold'>Latest Post</p>
							<a href='#' className='flex flex-col gap-4 group'>
								<div className='bg-gray-300 w-[50rem] h-[40rem] rounded-3xl relative overflow-hidden mb-4'>
									<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
									<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<p className='text-white text-2xl font-bold'>Baca Selengkapnya</p>
									</div>
								</div>
								<p className='text-lg'>
									21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
								</p>
								<h1 className='text-[3rem] font-bold max-w-[50rem] line-clamp-2 leading-tight group-hover:underline group-hover:underline-offset-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
								<p className='text-[1.3rem] font-medium max-w-[50rem] line-clamp-3 tracking-wide leading-loose'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi hic odio aliquid magnam, nulla, officiis porro adipisci perferendis eveniet velit distinctio quidem ullam, aperiam fugiat?
									Adipisci reprehenderit minima repellat.
								</p>
							</a>
						</div>
						<div className='flex flex-col w-full gap-4'>
							<p className='text-[2rem] text-[#D7AB6C] font-semibold'>More Articles</p>
							<div className='flex flex-col gap-8'>
								<a href='#' className='flex flex-row gap-4 w-full group'>
									<div className='bg-gray-100 w-[20rem] h-[15rem] rounded-3xl relative overflow-hidden'>
										<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
										<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<p className='text-white text-2xl font-bold'>Baca Selengkapnya</p>
										</div>
									</div>
									<div className='flex flex-col gap-2'>
										<p className='text-md'>
											21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
										</p>
										<h1 className='text-[2.5rem] font-bold line-clamp-2 leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4'>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae
											natus eligendi suscipit. Eum, quo.
										</h1>
										<p className='text-[1.2rem] font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis
											laborum aperiam laudantium neque expedita?
										</p>
									</div>
								</a>
								<a href='#' className='flex flex-row gap-4 w-full group'>
									<div className='bg-gray-100 w-[20rem] h-[15rem] rounded-3xl relative overflow-hidden'>
										<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
										<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<p className='text-white text-2xl font-bold'>Baca Selengkapnya</p>
										</div>
									</div>
									<div className='flex flex-col gap-2'>
										<p className='text-md'>
											21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
										</p>
										<h1 className='text-[2.5rem] font-bold line-clamp-2 leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4'>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae
											natus eligendi suscipit. Eum, quo.
										</h1>
										<p className='text-[1.2rem] font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis
											laborum aperiam laudantium neque expedita?
										</p>
									</div>
								</a>
								<a href='#' className='flex flex-row gap-4 w-full group'>
									<div className='bg-gray-100 w-[20rem] h-[15rem] rounded-3xl relative overflow-hidden'>
										<img src={'/img/test.jpg'} alt='nds' className='object-cover w-full h-full' />
										<div className='absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<p className='text-white text-2xl font-bold'>Baca Selengkapnya</p>
										</div>
									</div>
									<div className='flex flex-col gap-2'>
										<p className='text-md'>
											21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
										</p>
										<h1 className='text-[2.5rem] font-bold line-clamp-2 leading-tight max-w-[27rem] group-hover:underline group-hover:underline-offset-4'>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae
											natus eligendi suscipit. Eum, quo.
										</h1>
										<p className='text-[1.2rem] font-medium max-w-[27rem] line-clamp-3 tracking-wide leading-relaxed'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis
											laborum aperiam laudantium neque expedita?
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<main id='three' className='py-20'>
				<section id='events' className='px-52'>
					<h1 className='mb-8 text-[4rem] font-bold text-gray-900 text-center'>Events</h1>
					<div className='flex flex-row gap-8 justify-start items-start'>
						<div className='bg-gray-300 w-[50rem] h-[40rem] rounded-3xl overflow-hidden'>
							<img src='/img/event.jpg' alt='' />
						</div>
						<div className='flex flex-col justify-between max-w-[52rem] h-[30rem]'>
							<div className='flex flex-col gap-4'>
								<p className='text-[2rem] text-[#D7AB6C] font-semibold'>Upcoming</p>
								<h1 className='text-[4rem] font-bold line-clamp-3 leading-tight'>NVIDIA Campus Roadshow Balikpapan 2024</h1>
								<p className='text-[1.5rem] font-medium line-clamp-3 tracking-wide leading-loose'>NVIDIA Powers the World&apos;s AI. And Yours.</p>
							</div>
							<div className='flex flex-col gap-4'>
								<p className='text-[1.5rem] font-medium line-clamp-3 tracking-wide leading-loose'>Location</p>
								<p className='text-[1.5rem] font-medium line-clamp-3 tracking-wide leading-loose'>Date</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<main id='four' className='bg-[#f9f2e9] py-20'>
				<section id='join' className='px-52'>
					<div className='flex justify-between items-center'>
						<div className=''>Image atau apapun itu</div>
						<div className='flex flex-col justify-center items-center gap-y-4 bg-[#D7AB6C] px-8 py-4 rounded-3xl'>
							<h1 className='text-[4rem] font-bold text-gray-900'>Join Us</h1>
							<p className='text-[1.5rem] font-medium text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.</p>
							<button className='bg-gray-900 rounded-lg text-[1.5rem] font-medium text-gray-100 px-4 py-2'>Sign Up</button>
						</div>
					</div>
				</section>
			</main>
			<footer className='bg-zinc-50 py-20'>
				<section id='contact' className='px-52'>
					<div className='flex flex-row justify-between items-center'>
						<img src={'/img/nds-horizontal-logo.svg'} alt='nds' className='w-60 h-auto' />
						<p className="text-[1.2rem] font-medium line-clamp-3 tracking-wide leading-loose">&copy; 2024 Nusantara Digital Society. All Rights Reserved.</p>
					</div>
				</section>
			</footer>
		</div>
	);
}
