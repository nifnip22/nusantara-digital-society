import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Button from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Artikel() {
	return (
		<div className='font-geist-sans overflow-x-hidden'>
			<main>
				<Navbar />
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className={'mb-12 text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4'}>
						<h1 className='text-4xl md:text-5xl xl:text-6xl font-bold'>Artikel</h1>
						<p className='text-xs md:text-md xl:text-lg'>Jelajahi wawasan, aktivitas, dan pembaruan dari komunitas Nusantara Digital Society</p>
					</div>
					<div className='relative flex flex-col-reverse lg:flex-row gap-x-4 gap-y-8 justify-between items-start'>
						<div className='w-full lg:w-3/4 flex flex-col gap-12'>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='bg-zinc-300 w-full sm:min-w-[300px] rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover w-full h-full'} />
								</div>
								<div className='flex flex-col gap-4'>
									<p className='text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl xl:text-3xl font-bold line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita distinctio assumenda similique, ipsa, aut quibusdam accusantium a sunt dolore alias blanditiis, error odit consectetur. Provident
										omnis nulla ad vero?
									</h1>
									<p className='text-sm md:text-md font-medium line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odit reprehenderit qui obcaecati? Soluta accusamus corrupti tenetur. Sapiente distinctio inventore possimus porro, totam vero obcaecati
										eum, a excepturi rerum ipsa!
									</p>
									<div className={'flex flex-row gap-4 items-center'}>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>Tech Talk</p>
										</div>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>AI</p>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='bg-zinc-300 w-full sm:min-w-[300px] rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover w-full h-full'} />
								</div>
								<div className='flex flex-col gap-4'>
									<p className='text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl xl:text-3xl font-bold line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita distinctio assumenda similique, ipsa, aut quibusdam accusantium a sunt dolore alias blanditiis, error odit consectetur. Provident
										omnis nulla ad vero?
									</h1>
									<p className='text-sm md:text-md font-medium line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odit reprehenderit qui obcaecati? Soluta accusamus corrupti tenetur. Sapiente distinctio inventore possimus porro, totam vero obcaecati
										eum, a excepturi rerum ipsa!
									</p>
									<div className={'flex flex-row gap-4 items-center'}>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>Tech Talk</p>
										</div>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>AI</p>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='bg-zinc-300 w-full sm:min-w-[300px] rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover w-full h-full'} />
								</div>
								<div className='flex flex-col gap-4'>
									<p className='text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl xl:text-3xl font-bold line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita distinctio assumenda similique, ipsa, aut quibusdam accusantium a sunt dolore alias blanditiis, error odit consectetur. Provident
										omnis nulla ad vero?
									</h1>
									<p className='text-sm md:text-md font-medium line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odit reprehenderit qui obcaecati? Soluta accusamus corrupti tenetur. Sapiente distinctio inventore possimus porro, totam vero obcaecati
										eum, a excepturi rerum ipsa!
									</p>
									<div className={'flex flex-row gap-4 items-center'}>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>Tech Talk</p>
										</div>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>AI</p>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='bg-zinc-300 w-full sm:min-w-[300px] rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover w-full h-full'} />
								</div>
								<div className='flex flex-col gap-4'>
									<p className='text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl xl:text-3xl font-bold line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita distinctio assumenda similique, ipsa, aut quibusdam accusantium a sunt dolore alias blanditiis, error odit consectetur. Provident
										omnis nulla ad vero?
									</h1>
									<p className='text-sm md:text-md font-medium line-clamp-2 leading-relaxed tracking-wide'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odit reprehenderit qui obcaecati? Soluta accusamus corrupti tenetur. Sapiente distinctio inventore possimus porro, totam vero obcaecati
										eum, a excepturi rerum ipsa!
									</p>
									<div className={'flex flex-row gap-4 items-center'}>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>Tech Talk</p>
										</div>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>AI</p>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-row gap-2 justify-center sm:justify-start items-center'>
								<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center'>
									<ChevronLeft color='#D7AB6C' />
								</div>
								<div className='bg-[#D7AB6C] w-10 h-10 rounded-full flex justify-center items-center'>
									<p className='text-gray-100 text-md font-semibold'>1</p>
								</div>
								<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center'>
									<p className='text-gray-900 text-md'>2</p>
								</div>
								<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center'>
									<p className='text-gray-900 text-md'>3</p>
								</div>
								<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center'>
									<p className='text-gray-900 text-md'>4</p>
								</div>
								<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center'>
									<p className='text-gray-900 text-md'>5</p>
								</div>
								<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center'>
									<ChevronRight color='#D7AB6C' />
								</div>
							</div>
						</div>
						<div className='lg:sticky lg:top-20 w-full lg:w-[40%]'>
							<div className='flex flex-col gap-6'>
								<div className='flex flex-row gap-2'>
									<input type='text' className='w-full px-4 py-2 text-base rounded-full bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:ring-[#D7AB6C]' placeholder='Cari artikel...' />
									<Button label='Filter' variant='primary' className='lg:hidden rounded-full'></Button>
								</div>
								<div className='hidden lg:flex flex-col gap-4'>
									<p className='text-md font-medium'>Filter</p>
									<div className='w-full flex flex-row items-center gap-2'>
										<select name='filter' id='filter' className='w-full px-4 py-2 text-base rounded-full bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:ring-[#D7AB6C]'>
											<option value='terbaru'>Terbaru</option>
											<option value='terlama'>Terlama</option>
										</select>
										<input type='date' id='filter' name='filter' className='w-full px-4 py-2 text-base rounded-full bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:ring-[#D7AB6C]' />
									</div>
								</div>
								<div className='hidden lg:flex flex-col gap-4'>
									<p className='text-md font-medium'>Kategori</p>
									<div className='flex flex-wrap gap-4 items-center'>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>AI</p>
										</div>
										<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] hover:shadow-md duration-300 rounded-full'}>
											<p>Blockchain &amp; Crypto </p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Career in Tech</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Cybersecurity</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Data Science</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>DevOps &amp; Cloud</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Edukasi</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Game Dev</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Gadget &amp; Reviews</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Hardware &amp; IoT</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Mobile Dev</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Programming Tips</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Startup Insights</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Tech News</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Tech Talk</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>UI/UX</p>
										</div>
										<div className={'bg-zinc-100 px-4 py-1 text-xs md:text-sm xl:text-md text-gray-900 hover:shadow-md duration-300 rounded-full'}>
											<p>Web Dev</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
