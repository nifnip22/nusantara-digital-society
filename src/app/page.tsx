import Navbar from '@/components/navigation/Navbar';
import Button from '@/components/ui/Button';
import Footer from '@/components/navigation/Footer';
import Form from 'next/form';
import FloatingLabelInput from '@/components/forms/FloatingInput';
import { JoinUsInput } from '@/etc/constant';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCarousel from '@/components/layouts/ArticleCarousel';
import EventSection from '@/components/layouts/EventSection';

export default function Home() {
	return (
		<>
			<div className={'bg-[#f9f2e9] relative'}>
				<Navbar />
				<Image src={'/icons/circle.svg'} alt='' width={2000} height={2000} className={'absolute overflow-hidden translate-x-1/4 -translate-y-1/2 opacity-20 z-[0]'} />
				<section id={'home'} className={'z-10 relative pt-12 pb-[48rem] md:pb-[54rem] md:pt-28 lg:pb-[28rem] xl:pb-[34rem] xl:pt-20'}>
					<main className={'px-6 md:px-10 2xl:px-28'}>
						<div className='flex flex-col text-center text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-snug mb-12'>
							<h1>Empowering Innovation</h1>
							<p>
								Advancing <span className='text-[#D7AB6C]'>Nusantara</span>
							</p>
						</div>
						<div className={'flex gap-4 justify-center items-center'}>
							<Button label={'About Us'} type={'button'} variant={'primary'} className={'rounded-full'}></Button>
							<Link href={'#join-us'}>
								<Button label={'Join Us'} type={'button'} variant={'dark'} className={'rounded-full'}></Button>
							</Link>
						</div>
					</main>
					<main className={'px-6 md:px-16 2xl:px-40 mt-40 absolute -translate-y-12'}>
						<div className={'bg-white w-full h-auto rounded-3xl p-10 sm:p-24 shadow-lg'}>
							<div className={'flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 w-full mb-24 md:mb-32'}>
								<div className={'lg:w-1/2 text-center lg:text-start'}>
									<p className={'text-md md:text-lg font-semibold text-[#D7AB6C] uppercase mb-4'}>Visi & Misi</p>
									<h1 className={'text-xl md:text-2xl font-medium'}>Menjadi Penggerak Utama Ekosistem Digital Nusantara untuk Mendukung Pembangunan Ibu Kota Nusantara (IKN) sebagai Pusat Digital Nasional.</h1>
								</div>
								<div className={'w-full lg:w-1/2'}>
									<iframe src={'https://www.youtube.com/embed/mFVyoyNyE5U'} allowFullScreen className={'w-full aspect-square md:aspect-video md:h-auto rounded-3xl'}></iframe>
								</div>
							</div>
							<div className={'flex flex-col lg:flex-row justify-center items-start gap-16 lg:gap-32 w-full'}>
								<div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 w-full lg:w-1/2'}>
									<div className={'bg-[#f9f2e9] p-4 rounded-3xl text-[#D7AB6C] shrink-0'}>
										<Image src={'/icons/connect.svg'} alt={'Connect Icon'} width={1500} height={1500} className={'w-10 md:w-16 2xl:w-20'} />
									</div>
									<div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start gap-4'}>
										<h1 className={'text-xl md:text-2xl font-medium'}>Connect</h1>
										<p className={'text-sm md:text-md font-medium text-gray-900'}>Menghubungkan Seluruh Talenta Digital Nusantara.</p>
									</div>
								</div>
								<div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 w-full lg:w-1/2'}>
									<div className={'bg-[#f9f2e9] p-4 rounded-3xl text-[#D7AB6C] shrink-0'}>
										<Image src={'/icons/skill.svg'} alt={'Skill Icon'} width={1500} height={1500} className={'w-10 md:w-16 2xl:w-20'} />
									</div>
									<div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start gap-4'}>
										<h1 className={'text-xl md:text-2xl font-medium'}>Upgrade</h1>
										<p className={'text-sm md:text-md font-medium text-gray-900'}>Meningkatkan Keterampilan Talenta Digital Nusantara.</p>
									</div>
								</div>
								<div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 w-full lg:w-1/2'}>
									<div className={'bg-[#f9f2e9] p-4 rounded-3xl text-[#D7AB6C] shrink-0'}>
										<Image src={'/icons/startup.svg'} alt={'Startup Icon'} width={1500} height={1500} className={'w-10 md:w-16 2xl:w-20'} />
									</div>
									<div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start gap-4'}>
										<h1 className={'text-xl md:text-2xl font-medium'}>Push</h1>
										<p className={'text-sm md:text-md font-medium text-gray-900'}>Mendorong Lahirnya Startup Lokal yang Dapat Bersaing di Tingkat Nasional maupun Global.</p>
									</div>
								</div>
							</div>
						</div>
					</main>
				</section>
			</div>
			<section id={'article'} className={'bg-zinc-50 pt-[62rem] sm:pt-[70rem] pb-20 md:pt-[60rem] md:pb-32 lg:pt-[36rem] xl:pt-[40rem] xl:pb-40'}>
				<main className={'px-6 md:px-16 2xl:px-40'}>
					<div className={'mb-10 md:mb-20 text-4xl md:text-5xl font-bold text-gray-900 flex flex-col justify-center items-center gap-4'}>
						<hr className={'w-16 h-3 bg-[#D7AB6C] rounded-full'} />
						<h1>Artikel</h1>
					</div>
					<ArticleCarousel />
					<div className={'flex justify-center items-center'}>
						<Link href={'/artikel'}>
							<Button label={'Lihat Semua Artikel'} type={'button'} variant={'primary'} className={'rounded-full after:content-["_→"]'} />
						</Link>
					</div>
				</main>
			</section>
			<section id={'event'} className={'py-20 md:py-32 xl:py-40'}>
				<EventSection />
			</section>
			<section id={'join-us'} className={'bg-[#f9f2e9]'}>
				<main>
					<div className={'flex flex-col lg:flex-row items-center'}>
						<div className={'w-full max-w-6xl lg:h-screen overflow-hidden'}>
							<Image src={'/img/Test.jpg'} alt={'Join Us'} width={1500} height={1500} className={'w-full h-full object-cover'} />
						</div>
						<div className={'max-w-6xl flex flex-col gap-8 py-20 lg:py-0 pl-4 md:pl-8 pr-6 md:pr-16 2xl:pr-40'}>
							<h1 className={'text-4xl md:text-5xl font-bold text-gray-900'}>Join Us</h1>
							<p className={'text-sm md:text-lg font-medium text-gray-900 leading-relaxed'}>Bergabung dengan Komunitas Nusantara Digital Society dan Bersama Kita Tumbuhkan Ekosistem Digital dan Teknologi Nusantara</p>
							<Form action={'#'} className={'flex gap-10 col-span-3'}>
								<div className={'flex flex-col gap-12 w-full'}>
									{JoinUsInput.map((input, index) => (
										<FloatingLabelInput key={index} {...input} />
									))}
									<Button label={'Ajukan Permohonan'} variant={'secondary'} type={'submit'} className={'rounded-full'} />
								</div>
							</Form>
						</div>
					</div>
				</main>
			</section>
			<Footer />
		</>
	);
}
