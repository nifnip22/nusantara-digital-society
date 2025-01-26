import Footer from '@/components/navigation/Footer';
import ArticleCard from '@/components/layouts/ArticleCard';
import Navbar from '@/components/navigation/Navbar';
import Pagination from '@/components/navigation/Pagination';
import { Search } from 'lucide-react';

export default function Artikel() {
	return (
		<>
			<header className='bg-[#f9f2e9]'>
				<Navbar />
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12 mb-8'>
					<div className={'text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4'}>
						<h1 className='text-4xl md:text-5xl font-bold'>Artikel</h1>
						<p className='text-sm md:text-md'>Jelajahi wawasan, aktivitas, dan pembaruan dari komunitas Nusantara Digital Society</p>
					</div>
				</div>
			</header>
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='flex flex-col gap-y-12'>
						<div className='relative w-full'>
							<input type='text' className='w-full px-4 py-2 text-sm md:text-base rounded-3xl bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:outline-[#D7AB6C] pl-10' placeholder='Cari artikel...' />
							<div className='absolute inset-y-0 left-3 flex items-center'>
								<Search color='#9CA3AF' size={18} />
							</div>
						</div>
						<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16'>
							<ArticleCard
								linkHref='/artikel/slug'
								imageSrc='/img/image_placeholder.png'
								date='21 Desember 2024'
								author='Admin'
								title='Judul Artikel'
								description='Deskripsi/Slug Artikel'
							/>
							<ArticleCard
								linkHref='/artikel/slug'
								imageSrc='/img/image_placeholder.png'
								date='21 Desember 2024'
								author='Admin'
								title='Judul Artikel'
								description='Deskripsi/Slug Artikel'
							/>
							<ArticleCard
								linkHref='/artikel/slug'
								imageSrc='/img/image_placeholder.png'
								date='21 Desember 2024'
								author='Admin'
								title='Judul Artikel'
								description='Deskripsi/Slug Artikel'
							/>
						</div>
						<Pagination />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
