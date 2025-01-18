import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";

interface ArticleCardProps {
    linkHref: string;
    imageSrc: string;
    date: string;
    author: string;
    title: string;
    description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ linkHref, imageSrc, date, author, title, description }) => {
	return (
		<>
			<Link href={linkHref} className='group flex flex-col gap-4'>
				<div className='relative bg-zinc-300 w-full aspect-video rounded-3xl overflow-hidden'>
					<Image src={imageSrc} alt={'Artikel'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
					<div className={'absolute inset-0 bg-[#D7AB6C]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
						<Eye size={40} color={'#ffffff'} />
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<p className='text-xs opacity-80 line-clamp-1 leading-relaxed tracking-wide'>
						{date} - Diterbitkan oleh <span className='text-[#D7AB6C]'>{author}</span>
					</p>
					<h1 className='text-xl md:text-2xl font-bold line-clamp-2 leading-relaxed tracking-wide group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#D7AB6C]'>
						{title}
					</h1>
					<p className='text-sm md:text-md font-medium line-clamp-3 leading-relaxed tracking-normal'>
						{description}
					</p>
				</div>
			</Link>
		</>
	);
}

export default ArticleCard;