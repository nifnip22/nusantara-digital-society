import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function DetailArtikel() {
	return (
		<div className='font-geist-sans overflow-x-hidden'>
			<Navbar />
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='flex flex-col lg:flex-row gap-4 justify-between items-start'>
						<div className='w-full lg:w-3/4 flex flex-col justify-start gap-8'>
							<div className={'text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4'}>
								<div className='flex flex-wrap gap-4 items-center'>
									<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] border border-[#D7AB6C] rounded-full'}>
										<p>Tech Talk</p>
									</div>
									<div className={'bg-[#f9f2e9] px-4 py-1 text-xs md:text-sm xl:text-md text-[#D7AB6C] border border-[#D7AB6C] rounded-full'}>
										<p>AI</p>
									</div>
								</div>
								<h1 className='text-4xl md:text-5xl xl:text-4xl font-bold'>Judul Artikel</h1>
								<p className='text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
									<b>21 Desember 2024</b> - Artikel Dibuat oleh <span className='text-[#D7AB6C]'>Admin</span>
								</p>
							</div>
							<div className='bg-zinc-300 w-full rounded-3xl overflow-hidden'>
								<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
							</div>
                            <p className='text-sm md:text-md text-justify font-medium indent-8 leading-relaxed tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero hic odio? Iusto quis, laborum fuga dolorem dicta neque impedit ratione ducimus dolores veritatis illum quod ut temporibus molestias incidunt?</p>
						</div>
						<div className='w-full lg:w-1/2 flex flex-col justify-start gap-4'>Right Section</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
