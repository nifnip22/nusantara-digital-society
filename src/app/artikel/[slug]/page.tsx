import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import ArtikelHeader from '@/components/artikel/ArtikelHeader';
import ArtikelImage from '@/components/artikel/ArtikelImage';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
	try {
		const filePath = path.join(process.cwd(), 'src/mdx', `${slug}.mdx`);
		const content = await fs.readFile(filePath, 'utf8');

		const { frontmatter } = await compileMDX<{ title: string }>({
			source: content,
			options: {
				parseFrontmatter: true,
			},
		});

		return {
			title: frontmatter.title,
		};
	} catch {
		return {
			title: 'Artikel Tidak Ditemukan',
		};
	}
}

export default async function ArtikelSlug({ params }: { params: { slug: string } }) {
    const { slug } = await params;
	const filePath = path.join(process.cwd(), 'src/mdx', `${slug}.mdx`);

	try {
		const content = await fs.readFile(filePath, 'utf8');

		const data = await compileMDX<{
			title: string;
			date: string;
			author: string;
			imageSrc: string;
		}>({
			source: content,
			options: {
				parseFrontmatter: true,
			},
		});

		return (
			<>
				<ArtikelHeader title={data.frontmatter.title} date={data.frontmatter.date} author={data.frontmatter.author} />
				<ArtikelImage imageSrc={data.frontmatter.imageSrc} />
				<article>{data.content}</article>
			</>
		);
	} catch {
		notFound();
	}
}
