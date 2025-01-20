import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ArticleCarousel = () => {
	return (
		<>
			<div className={'mb-4 flex flex-row justify-between items-start'}>
				<div>
					<p className={'uppercase text-md md:text-lg text-[#D7AB6C] font-semibold'}>Artikel Lainnya</p>
					<hr className={'w-12 h-1 bg-[#D7AB6C]'} />
				</div>
				<div className='flex flex-row items-center gap-4'>
					<div className='w-10 h-10 flex justify-center items-center group bg-zinc-200 cursor-pointer hover:bg-[#f9f2e9] duration-300 rounded-full'>
						<ChevronLeft className='left-button text-gray-900/60 group-hover:text-[#D7AB6C] duration-300' />
					</div>
					<div className='w-10 h-10 flex justify-center items-center group bg-zinc-200 cursor-pointer hover:bg-[#f9f2e9] duration-300 rounded-full'>
						<ChevronRight className='right-button text-gray-900/60 group-hover:text-[#D7AB6C] duration-300' />
					</div>
				</div>
			</div>
			<div className={'article-carousel w-full flex flex-row gap-6 justify-start items-start overflow-x-auto snap-x snap-mandatory scroll-smooth mb-20'}>
				<Link href='/artikel/slug' className='snap-start flex flex-col gap-6 min-w-[220px] sm:min-w-[360px] group'>
					<div className='bg-gray-300 rounded-3xl relative aspect-video overflow-hidden mb-4'>
						<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'w-full h-full object-cover object-center'} />
						<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
							<Eye size={40} color={'#ffffff'} />
						</div>
					</div>
					<div className={'flex flex-col gap-4'}>
						<p className={'text-xs md:text-sm tracking-wide leading-relaxed'}>
							21 Desember 2024 - by <span className={'text-[#D7AB6C]'}>Admin</span>
						</p>
						<h1 className={'text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus eligendi
							suscipit. Eum, quo.
						</h1>
						<p className={'text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum aperiam
							laudantium neque expedita?
						</p>
					</div>
				</Link>
				<Link href='/artikel/slug' className='snap-start flex flex-col gap-6 min-w-[230px] sm:min-w-[360px] group'>
					<div className='bg-gray-300 rounded-3xl relative aspect-video overflow-hidden mb-4'>
						<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'w-full h-full object-cover object-center'} />
						<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
							<Eye size={40} color={'#ffffff'} />
						</div>
					</div>
					<div className={'flex flex-col gap-4'}>
						<p className={'text-xs md:text-sm tracking-wide leading-relaxed'}>
							21 Desember 2024 - by <span className={'text-[#D7AB6C]'}>Admin</span>
						</p>
						<h1 className={'text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus eligendi
							suscipit. Eum, quo.
						</h1>
						<p className={'text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum aperiam
							laudantium neque expedita?
						</p>
					</div>
				</Link>
				<Link href='/artikel/slug' className='snap-start flex flex-col gap-6 min-w-[230px] sm:min-w-[360px] group'>
					<div className='bg-gray-300 rounded-3xl relative aspect-video overflow-hidden mb-4'>
						<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'w-full h-full object-cover object-center'} />
						<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
							<Eye size={40} color={'#ffffff'} />
						</div>
					</div>
					<div className={'flex flex-col gap-4'}>
						<p className={'text-xs md:text-sm tracking-wide leading-relaxed'}>
							21 Desember 2024 - by <span className={'text-[#D7AB6C]'}>Admin</span>
						</p>
						<h1 className={'text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus eligendi
							suscipit. Eum, quo.
						</h1>
						<p className={'text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum aperiam
							laudantium neque expedita?
						</p>
					</div>
				</Link>
				<Link href='/artikel/slug' className='snap-start flex flex-col gap-6 min-w-[230px] sm:min-w-[360px] group'>
					<div className='bg-gray-300 rounded-3xl relative aspect-video overflow-hidden mb-4'>
						<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'w-full h-full object-cover object-center'} />
						<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
							<Eye size={40} color={'#ffffff'} />
						</div>
					</div>
					<div className={'flex flex-col gap-4'}>
						<p className={'text-xs md:text-sm tracking-wide leading-relaxed'}>
							21 Desember 2024 - by <span className={'text-[#D7AB6C]'}>Admin</span>
						</p>
						<h1 className={'text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus eligendi
							suscipit. Eum, quo.
						</h1>
						<p className={'text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum aperiam
							laudantium neque expedita?
						</p>
					</div>
				</Link>
				<Link href='/artikel/slug' className='snap-start flex flex-col gap-6 min-w-[230px] sm:min-w-[360px] group'>
					<div className='bg-gray-300 rounded-3xl relative aspect-video overflow-hidden mb-4'>
						<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'w-full h-full object-cover object-center'} />
						<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
							<Eye size={40} color={'#ffffff'} />
						</div>
					</div>
					<div className={'flex flex-col gap-4'}>
						<p className={'text-xs md:text-sm tracking-wide leading-relaxed'}>
							21 Desember 2024 - by <span className={'text-[#D7AB6C]'}>Admin</span>
						</p>
						<h1 className={'text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia, nobis, unde ab dolorum fuga commodi quos tempore dolore molestiae vero corrupti labore reprehenderit repudiandae natus eligendi
							suscipit. Eum, quo.
						</h1>
						<p className={'text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, suscipit doloremque minima deserunt nisi dolor ab maxime itaque. Dolorem illum veritatis soluta, aliquam debitis laborum aperiam
							laudantium neque expedita?
						</p>
					</div>
				</Link>
			</div>
		</>
	);
};

export default ArticleCarousel;
