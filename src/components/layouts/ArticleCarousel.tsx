import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default async function ArticleCarousel() {
	const filenames = await fs.readdir(path.join(process.cwd(), 'src/mdx/artikel'));
	const articles = await Promise.all(
		filenames.map(async (filename) => {
			const content = await fs.readFile(path.join(process.cwd(), 'src/mdx/artikel', filename), 'utf8');
			const { frontmatter } = await compileMDX<{ title: string; imageSrc: string; date: string; author: string; description: string }>({
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
			<div className={'mb-4 flex flex-row justify-end items-start'}>
				<div className='flex flex-row items-center gap-4'>
					<div className='w-10 h-10 flex justify-center items-center group bg-zinc-200 cursor-pointer hover:bg-[#f9f2e9] duration-300 rounded-full'>
						<ChevronLeft className='left-button text-gray-900/60 group-hover:text-[#D7AB6C] duration-300' />
					</div>
					<div className='w-10 h-10 flex justify-center items-center group bg-zinc-200 cursor-pointer hover:bg-[#f9f2e9] duration-300 rounded-full'>
						<ChevronRight className='right-button text-gray-900/60 group-hover:text-[#D7AB6C] duration-300' />
					</div>
				</div>
			</div>
			<div className={'article-carousel w-full flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth mb-20'}>
				{articles.map((article) => (
					<Link key={article.slug} href={`/artikel/${article.slug}`} className='snap-start flex flex-col gap-6 min-w-[220px] sm:min-w-[360px] group'>
						<div className='bg-gray-300 rounded-3xl relative aspect-video overflow-hidden mb-4'>
							<Image src={article.imageSrc} alt={article.title} width={1500} height={1500} className={'w-full h-full object-cover object-center'} />
							<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
								<Eye size={40} color={'#ffffff'} />
							</div>
						</div>
						<div className={'flex flex-col gap-4'}>
							<div className={'flex items-center gap-2 text-xs md:text-sm tracking-wide leading-relaxed'}>
								<p>{article.date}</p>
								<p className='text-gray-900/50'>•</p>
								<p className={'text-[#D7AB6C]'}>{article.author}</p>
							</div>
							<h1 className={'text-xl md:text-2xl font-bold line-clamp-2 leading-normal tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'}>{article.title}</h1>
							<p className={'text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'}>{article.description}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
