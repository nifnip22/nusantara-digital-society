import { promises as fs } from 'fs';
import path from 'path';

import Footer from '@/components/navigation/Footer';
import ArticleCard from '@/components/layouts/ArticleCard';
import Navbar from '@/components/navigation/Navbar';
import Pagination from '@/components/navigation/Pagination';
import { Search } from 'lucide-react';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function Artikel() {
	const filenames = await fs.readdir(path.join(process.cwd(), 'src/mdx'));
	const articles = await Promise.all(
		filenames.map(async (filename) => {
			const content = await fs.readFile(path.join(process.cwd(), 'src/mdx', filename), 'utf8');
			const { frontmatter } = await compileMDX<{ title: string, imageSrc: string, date: string, author: string, description: string }>({
				source: content,
				options: {
					parseFrontmatter: true,
				},
			});
			return {
				filename,
				slug: filename.replace('.mdx', ''),
				...frontmatter,
			};
		})
	);

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
							{articles.map((article) => (
								<ArticleCard key={article.slug} linkHref={`artikel/${article.slug}`} imageSrc={article.imageSrc} date={article.date} author={article.author} title={article.title} description={article.description} />
							))}
						</div>
						<Pagination />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
