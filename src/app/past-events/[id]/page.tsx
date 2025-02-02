import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import Image from 'next/image';
import { MapPin, Calendar, UsersRound } from 'lucide-react';

export default function DetailPastEvent() {
	return (
		<>
			<Navbar />
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='flex flex-col lg:flex-row justify-between items-center gap-6 mb-20'>
						<div className='w-full flex flex-col gap-y-4'>
							<div className='w-fit px-3 py-1 bg-gray-900 rounded-full'>
								<p className='text-base md:text-lg text-[#D7AB6C] font-semibold'>Completed</p>
							</div>
							<h1 className='text-4xl md:text-5xl font-bold leading-normal tracking-wide'>Judul Event</h1>
							<div className={'flex flex-col gap-4'}>
								<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
									<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
										<MapPin className={'w-8 h-8 text-[#D7AB6C]'} />
									</div>
									<div>
										<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Lokasi</p>
										<p className={'text-base md:text-lg font-medium'}>Gedung Cheng Ho - Universitas Mulia Balikpapan</p>
									</div>
								</div>
								<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
									<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
										<Calendar className={'w-8 h-8 text-[#D7AB6C]'} />
									</div>
									<div>
										<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Tanggal & Waktu</p>
										<p className={'text-base md:text-lg font-medium'}>19 Desember 2024 | 13:00 - 17:00 WITA</p>
									</div>
								</div>
								<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
									<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
										<UsersRound className={'w-8 h-8 text-[#D7AB6C]'} />
									</div>
									<div>
										<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Jumlah Peserta Hadir</p>
										<p className={'text-base md:text-lg font-medium'}>200</p>
									</div>
								</div>
							</div>
						</div>
						<div className={'bg-gray-300 aspect-square w-full lg:max-w-sm xl:max-w-lg rounded-3xl overflow-hidden'}>
							<Image src={'/img/image_placeholder.png'} alt={'Judul Event'} width={1500} height={1500} className={'w-full h-full object-cover'} />
						</div>
					</div>
					<div className='flex flex-col gap-y-20'>
						<div className='flex flex-col gap-y-6'>
							<div className='flex flex-col gap-1'>
								<h2 className='text-xl md:text-2xl font-semibold'>Deskripsi Event</h2>
								<hr className='w-20 h-1 bg-[#D7AB6C]' />
							</div>
							<p className='text-sm md:text-md font-medium leading-relaxed tracking-normal'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sed libero optio veritatis perferendis minima aspernatur porro unde nobis impedit a sit qui possimus saepe delectus nulla animi, facilis
								asperiores! Reprehenderit, debitis itaque doloremque eos accusamus amet minima omnis aliquid quos quas, a sed nesciunt nisi blanditiis modi natus dolores quasi minus aut dolorum. A cum fugit laudantium non
								aliquid. Excepturi quidem deleniti porro sint maxime exercitationem sed explicabo fugit, accusantium inventore natus illo nesciunt facilis minima harum nisi debitis est, quae veniam! Beatae qui pariatur eius
								possimus voluptate sapiente. Velit dolor labore veniam ut incidunt a quia? Minima cum ipsum voluptates! Minima, repudiandae. Quidem eius temporibus sint fugiat alias culpa labore libero, at magni ex
								voluptatem, error non. Consequuntur? Nisi id quam ducimus veritatis vitae cupiditate nostrum mollitia! Aliquid, consectetur molestiae doloremque consequatur eum quam accusamus explicabo laboriosam hic sit
								assumenda officia architecto distinctio voluptate, sed inventore ipsa ea? Accusamus necessitatibus eveniet dolorum aut. Eligendi neque quaerat voluptatibus nisi dolorum illum blanditiis quo, aliquam minus
								quasi aperiam aut, deleniti maiores nihil, eum et vel dolore laboriosam sint. Ipsum, voluptatum. Nihil nemo possimus animi reiciendis tenetur debitis laudantium, fugiat enim dolorum, temporibus dolor atque
								consectetur nam optio nostrum illo labore doloremque similique. Sapiente vel error sit ipsam debitis vero id. Voluptatum vero ea corporis, velit quis ab dolores perspiciatis temporibus culpa aut aperiam
								perferendis sunt ad quas. Maiores animi iure laudantium esse tempora reprehenderit, minus in, quae quasi provident est. Aut aspernatur in, modi animi aliquid reprehenderit molestias laboriosam! Quisquam,
								neque nesciunt? Modi exercitationem dolores libero aliquam ex, laborum numquam ad porro, enim itaque corrupti hic alias, ipsam esse facere? Necessitatibus mollitia facilis sit, exercitationem quibusdam
								maxime. Quisquam voluptatem, quos, est dignissimos natus at ex asperiores modi deserunt blanditiis, repellat alias temporibus exercitationem tempore esse eveniet assumenda ratione neque ut!
							</p>
						</div>
						<div className='flex flex-col gap-y-6'>
							<div className='flex flex-col gap-1'>
								<h2 className='text-xl md:text-2xl font-semibold'>Tamu Unggulan</h2>
								<hr className='w-20 h-1 bg-[#D7AB6C]' />
							</div>
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-4 gap-y-12'>
								<div className='flex flex-col gap-y-4'>
									<div className='bg-gray-300 w-full aspect-square rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Nama Tamu'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
									<div className='flex flex-col'>
										<h2 className='text-md md:text-lg font-semibold'>Nama Tamu</h2>
										<p className='text-sm md:text-md font-semibold leading-relaxed tracking-normal'>Narasumber</p>
										<p className='mt-2 text-sm md:text-md text-gray-900/80 font-medium leading-relaxed tracking-normal'>Deskripsi Tamu</p>
									</div>
								</div>
								<div className='flex flex-col gap-y-4'>
									<div className='bg-gray-300 w-full aspect-square rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Nama Tamu'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
									<div className='flex flex-col'>
										<h2 className='text-md md:text-lg font-semibold'>Nama Tamu</h2>
										<p className='text-sm md:text-md font-medium leading-relaxed tracking-normal'>Pembicara</p>
										<p className='mt-2 text-sm md:text-md text-gray-900/80 font-medium leading-relaxed tracking-normal'>Deskripsi Tamu</p>
									</div>
								</div>
								<div className='flex flex-col gap-y-4'>
									<div className='bg-gray-300 w-full aspect-square rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Nama Tamu'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
									<div className='flex flex-col'>
										<h2 className='text-md md:text-lg font-semibold'>Nama Tamu</h2>
										<p className='text-sm md:text-md font-medium leading-relaxed tracking-normal'>Pembicara</p>
										<p className='mt-2 text-sm md:text-md text-gray-900/80 font-medium leading-relaxed tracking-normal'>Deskripsi Tamu</p>
									</div>
								</div>
								<div className='flex flex-col gap-y-4'>
									<div className='bg-gray-300 w-full aspect-square rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Nama Tamu'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
									<div className='flex flex-col'>
										<h2 className='text-md md:text-lg font-semibold'>Nama Tamu</h2>
										<p className='text-sm md:text-md font-medium leading-relaxed tracking-normal'>Pembicara</p>
										<p className='mt-2 text-sm md:text-md text-gray-900/80 font-medium leading-relaxed tracking-normal'>Deskripsi Tamu</p>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-y-6'>
							<div className='flex flex-col gap-1'>
								<h2 className='text-xl md:text-2xl font-semibold'>Agenda Kegiatan</h2>
								<hr className='w-20 h-1 bg-[#D7AB6C]' />
							</div>
							<div className='flex items-start gap-x-6 sm:gap-x-12'>
								<div className='bg-[#D7AB6C] p-4 w-40 sm:w-24 flex flex-col gap-y-2 justify-center items-center text-center rounded-3xl text-gray-100'>
									<p className='text-xs md:text-sm'>Senin</p>
									<h1 className='text-lg md:text-xl font-semibold'>19 Des</h1>
								</div>
								<div className='flex flex-col gap-y-6'>
									<div className='flex flex-col gap-y-1'>
										<div className='flex gap-x-2 items-start text-sm text-gray-600'>
											<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
											<p className={'text-sm md:text-md font-medium'}>11:30</p>
										</div>
										<h1 className='text-md md:text-lg font-semibold'>Registrasi Pendaftaran On the Spot Dibuka</h1>
									</div>
									<hr />
									<div className='flex flex-col gap-y-1'>
										<div className='flex gap-x-2 items-start text-sm text-gray-600'>
											<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
											<p className={'text-sm md:text-md font-medium'}>13:30</p>
										</div>
										<h1 className='text-md md:text-lg font-semibold'>Registrasi Pendaftaran On the Spot Ditutup & Pembacaan Doa Dimulai</h1>
									</div>
									<hr />
									<div className='flex flex-col gap-y-1'>
										<div className='flex gap-x-2 items-start text-sm text-gray-600'>
											<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
											<p className={'text-sm md:text-md font-medium'}>14:00</p>
										</div>
										<h1 className='text-md md:text-lg font-semibold'>Acara Dimulai</h1>
									</div>
									<hr />
									<div className='flex flex-col gap-y-1'>
										<div className='flex gap-x-2 items-start text-sm text-gray-600'>
											<div className='w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full'></div>
											<p className={'text-sm md:text-md font-medium'}>17:00</p>
										</div>
										<h1 className='text-md md:text-lg font-semibold'>Acara Selesai</h1>
									</div>
									<hr />
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-y-6'>
							<div className='flex flex-col gap-1'>
								<h2 className='text-xl md:text-2xl font-semibold'>Galeri Foto</h2>
								<hr className='w-20 h-1 bg-[#D7AB6C]' />
							</div>
							<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
								<div className='grid gap-4'>
									<div className='bg-gray-300 max-w-full rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Foto'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
									<div className='bg-gray-300 max-w-full rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Foto'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
								</div>
								<div className='grid gap-4'>
									<div className='bg-gray-300 max-w-full rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Foto'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
									<div className='bg-gray-300 max-w-full rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Foto'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
								</div>
								<div className='grid gap-4'>
									<div className='bg-gray-300 max-w-full rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Foto'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
									<div className='bg-gray-300 max-w-full rounded-3xl overflow-hidden'>
										<Image src={'/img/image_placeholder.png'} alt={'Foto'} width={1500} height={1500} className={'w-full h-full object-cover'} />
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-y-6'>
							<div className='flex flex-col gap-1'>
								<h2 className='text-xl md:text-2xl font-semibold'>Galeri Video</h2>
								<hr className='w-20 h-1 bg-[#D7AB6C]' />
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='bg-gray-300 max-w-full aspect-video rounded-3xl overflow-hidden'>
									<iframe src='https://www.youtube.com/embed/mFVyoyNyE5U' allowFullScreen frameBorder='0' className='w-full h-full object-cover'></iframe>
								</div>
								<div className='bg-gray-300 max-w-full aspect-video rounded-3xl overflow-hidden'>
									<iframe src='https://www.youtube.com/embed/mFVyoyNyE5U' allowFullScreen frameBorder='0' className='w-full h-full object-cover'></iframe>
								</div>
								<div className='bg-gray-300 max-w-full aspect-video rounded-3xl overflow-hidden'>
									<iframe src='https://www.youtube.com/embed/mFVyoyNyE5U' allowFullScreen frameBorder='0' className='w-full h-full object-cover'></iframe>
								</div>
								<div className='bg-gray-300 max-w-full aspect-video rounded-3xl overflow-hidden'>
									<iframe src='https://www.youtube.com/embed/mFVyoyNyE5U' allowFullScreen frameBorder='0' className='w-full h-full object-cover'></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
