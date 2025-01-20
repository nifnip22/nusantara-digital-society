import Footer from '@/components/footer';
import ArticleCard from '@/components/layouts/ArticleCard';
import Navbar from '@/components/navbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Artikel() {
	return (
		<>
			<header className='bg-[#f9f2e9]'>
				<Navbar />
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12 mb-8'>
					<div className={'text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4'}>
						<h1 className='text-4xl md:text-5xl font-bold'>Artikel</h1>
						<p className='text-xs md:text-md'>Jelajahi wawasan, aktivitas, dan pembaruan dari komunitas Nusantara Digital Society</p>
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
							<ArticleCard linkHref='/artikel/slug' imageSrc='/img/Test.jpg' date='21 Desember 2024' author='Admin' title='Judul Artikel' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' />
							<ArticleCard linkHref='/artikel/slug' imageSrc='/img/Test.jpg' date='21 Desember 2024' author='Admin' title='Judul Artikel' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' />
							<ArticleCard linkHref='/artikel/slug' imageSrc='/img/Test.jpg' date='21 Desember 2024' author='Admin' title='Judul Artikel' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' />
							<ArticleCard linkHref='/artikel/slug' imageSrc='/img/Test.jpg' date='21 Desember 2024' author='Admin' title='Judul Artikel' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' />
							<ArticleCard linkHref='/artikel/slug' imageSrc='/img/Test.jpg' date='21 Desember 2024' author='Admin' title='Judul Artikel' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' />
							<ArticleCard linkHref='/artikel/slug' imageSrc='/img/Test.jpg' date='21 Desember 2024' author='Admin' title='Judul Artikel' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' />
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
		</>
	);
}
