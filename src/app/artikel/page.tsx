import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Artikel() {
	return (
		<div className='font-geist-sans overflow-x-hidden'>
			<header className='bg-[#f9f2e9]'>
				<Navbar />
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12 mb-8'>
					<div className={'text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4'}>
						<h1 className='text-4xl md:text-5xl xl:text-6xl font-bold'>Artikel</h1>
						<p className='text-xs md:text-md xl:text-lg'>Jelajahi wawasan, aktivitas, dan pembaruan dari komunitas Nusantara Digital Society</p>
					</div>
				</div>
			</header>
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='relative flex flex-col gap-y-12'>
						<div className='w-full'>
							<input type='text' className='w-full px-4 py-2 text-sm md:text-base rounded-3xl bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:outline-[#D7AB6C]' placeholder='Cari artikel...' />
						</div>
						<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16'>
							<Link href={'/artikel/slug'} className='group flex flex-col gap-4'>
								<div className='relative bg-zinc-300 w-full aspect-video rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
									<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
										<Eye size={40} color={'#ffffff'} />
									</div>
								</div>
								<div className='flex flex-col gap-4 justify-between flex-grow'>
									<p className='text-xs md:text-sm line-clamp-1 leading-relaxed tracking-wide'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita distinctio assumenda similique, ipsa, aut quibusdam accusantium a sunt dolore alias blanditiis, error odit consectetur. Provident
										omnis nulla ad vero?
									</h1>
									<p className='text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odit reprehenderit qui obcaecati? Soluta accusamus corrupti tenetur. Sapiente distinctio inventore possimus porro, totam vero obcaecati
										eum, a excepturi rerum ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio placeat autem praesentium voluptate sequi inventore, quae quod eligendi, minus fugiat veniam vero
										error magni porro ad. Nemo in modi accusantium. Animi eius nostrum aperiam molestiae possimus consectetur? Eum veritatis reprehenderit itaque. Dignissimos cumque nobis earum excepturi? Doloribus aut,
										illo vitae id voluptatibus culpa obcaecati at blanditiis enim, quo nulla aliquid? Nemo sit sint quam odit delectus commodi porro quibusdam aut nulla velit! Repellat id natus voluptatibus quasi fuga
										labore distinctio, eveniet dicta error nihil, voluptate unde. Facere placeat culpa qui.
									</p>
								</div>
							</Link>
							<Link href={'#'} className='group flex flex-col gap-4'>
								<div className='relative bg-zinc-300 w-full aspect-video rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
									<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
										<Eye size={40} color={'#ffffff'} />
									</div>
								</div>
								<div className='flex flex-col gap-4 justify-between flex-grow'>
									<p className='text-xs md:text-sm line-clamp-1 leading-relaxed tracking-wide'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita distinctio assumenda similique, ipsa, aut quibusdam accusantium a sunt dolore alias blanditiis, error odit consectetur. Provident
										omnis nulla ad vero?
									</h1>
									<p className='text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odit reprehenderit qui obcaecati? Soluta accusamus corrupti tenetur. Sapiente distinctio inventore possimus porro, totam vero obcaecati
										eum, a excepturi rerum ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio placeat autem praesentium voluptate sequi inventore, quae quod eligendi, minus fugiat veniam vero
										error magni porro ad. Nemo in modi accusantium. Animi eius nostrum aperiam molestiae possimus consectetur? Eum veritatis reprehenderit itaque. Dignissimos cumque nobis earum excepturi? Doloribus aut,
										illo vitae id voluptatibus culpa obcaecati at blanditiis enim, quo nulla aliquid? Nemo sit sint quam odit delectus commodi porro quibusdam aut nulla velit! Repellat id natus voluptatibus quasi fuga
										labore distinctio, eveniet dicta error nihil, voluptate unde. Facere placeat culpa qui.
									</p>
								</div>
							</Link>
							<Link href={'#'} className='group flex flex-col gap-4'>
								<div className='relative bg-zinc-300 w-full aspect-video rounded-3xl overflow-hidden'>
									<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
									<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
										<Eye size={40} color={'#ffffff'} />
									</div>
								</div>
								<div className='flex flex-col gap-4 justify-between flex-grow'>
									<p className='text-xs md:text-sm line-clamp-1 leading-relaxed tracking-wide'>
										21 Desember 2024 - by <span className='text-[#D7AB6C]'>Admin</span>
									</p>
									<h1 className='text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita distinctio assumenda similique, ipsa, aut quibusdam accusantium a sunt dolore alias blanditiis, error odit consectetur. Provident
										omnis nulla ad vero?
									</h1>
									<p className='text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odit reprehenderit qui obcaecati? Soluta accusamus corrupti tenetur. Sapiente distinctio inventore possimus porro, totam vero obcaecati
										eum, a excepturi rerum ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio placeat autem praesentium voluptate sequi inventore, quae quod eligendi, minus fugiat veniam vero
										error magni porro ad. Nemo in modi accusantium. Animi eius nostrum aperiam molestiae possimus consectetur? Eum veritatis reprehenderit itaque. Dignissimos cumque nobis earum excepturi? Doloribus aut,
										illo vitae id voluptatibus culpa obcaecati at blanditiis enim, quo nulla aliquid? Nemo sit sint quam odit delectus commodi porro quibusdam aut nulla velit! Repellat id natus voluptatibus quasi fuga
										labore distinctio, eveniet dicta error nihil, voluptate unde. Facere placeat culpa qui.
									</p>
								</div>
							</Link>
						</div>
						<div className='flex flex-row gap-2 justify-center items-center'>
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
								<ChevronRight color='#D7AB6C' />
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
