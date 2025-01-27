interface ArtikelHeaderProps {
	title: string;
    date: string;
	author: string;
}

export default function ArtikelHeader({ title, date, author }: ArtikelHeaderProps) {
	return (
		<>
			<div className='text-gray-900 flex flex-col justify-start items-start gap-6'>
				<h1 className='text-4xl md:text-5xl font-bold leading-normal tracking-wide'>{title}</h1>
				<div className='flex items-center gap-2 text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
					<b>{date}</b>
					<div className='text-gray-900/50'>•</div>
					<div>
						Artikel Dibuat oleh <span className='text-[#D7AB6C]'>{author}</span>
					</div>
				</div>
			</div>
		</>
	);
}
