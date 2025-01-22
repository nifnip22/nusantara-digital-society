import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import Image from 'next/image';

export default function DetailArtikel() {
	return (
		<>
			<Navbar />
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='w-full flex flex-col justify-start gap-8'>
						<div className={'text-gray-900 flex flex-col justify-start items-start gap-6'}>
							<h1 className='text-4xl md:text-5xl font-bold leading-relaxed tracking-wide'>NVIDIA Campus Tour Roadshow Balikpapan 2024 Sukses Digelar</h1>
							<p className='text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
								<b>21 Desember 2024</b> - Artikel Dibuat oleh <span className='text-[#D7AB6C]'>Admin</span>
							</p>
						</div>
						<div className='bg-zinc-300 w-full rounded-3xl overflow-hidden'>
							<Image src={'/img/Test.jpg'} alt={'Artikel'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
						</div>
						<p className='text-sm md:text-md font-medium leading-relaxed tracking-normal'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis necessitatibus saepe, sed veniam odit odio a corporis sint, maiores distinctio nobis sapiente nisi quod dolorem assumenda cupiditate
							ullam optio! Fuga nostrum quae ratione, doloremque neque odit rem eum sit nemo provident reiciendis maiores animi dicta consequuntur nam voluptatibus alias quos commodi vel hic, laborum asperiores odio molestiae
							deserunt. Odio! Consectetur quasi nisi magnam! Laboriosam itaque, aperiam dolores magnam accusamus tempora adipisci fugit quis reiciendis laborum dignissimos dicta rerum architecto eaque vel error enim placeat?
							Dicta esse quod omnis amet! Unde saepe deserunt officia debitis in? Repellendus ipsam rem explicabo optio, illum quia facere voluptatum. Enim nulla repudiandae odio et a vel aliquid iste alias cupiditate
							mollitia, fugiat id ex! Error sit tempora fuga suscipit laudantium possimus dignissimos assumenda consequuntur perferendis? Officiis, sequi exercitationem sit esse odit ipsum nobis soluta obcaecati commodi
							voluptatibus, enim quod iure eius maiores quis. Nisi. Odit beatae, quod cupiditate perferendis minus quaerat optio placeat autem qui non at magnam molestiae dignissimos laboriosam, aliquam impedit nam consequatur
							explicabo. Aliquid repellat modi quo voluptas aut vitae perspiciatis! Cupiditate non odio quibusdam quaerat, illo at, quam vel eveniet eos est aspernatur facilis vitae accusamus, commodi libero porro eum culpa
							sapiente. Aperiam laborum corporis inventore vitae tempore laudantium iste. Porro exercitationem nam culpa quaerat provident voluptatem, dignissimos vel voluptatibus dolorem quasi eaque eligendi ab repudiandae
							atque ea cum placeat a quos minus. Est nihil minima quasi accusantium, et ea! Officiis praesentium quibusdam est dolor molestiae reprehenderit sequi ipsum quaerat suscipit, libero qui porro amet dolorem, eius
							odit iste quisquam et ea eveniet ab. Dicta quod minus omnis dolore at. Aspernatur, accusamus! Doloribus sed ea ratione dicta explicabo suscipit laboriosam officia ullam facere delectus aliquam mollitia hic, sequi
							excepturi laudantium iure quam repellat obcaecati, porro sint ut debitis quaerat corporis! Eveniet id illo, blanditiis laudantium perspiciatis at fuga soluta, voluptate aspernatur expedita tempore dolore
							dignissimos sit, obcaecati a amet? Cum repellat numquam doloremque veritatis rerum, ipsum fuga iure exercitationem similique! Quam dignissimos nemo explicabo, sint voluptate alias dolores quae fugit, laborum
							placeat amet! Cumque, porro iusto. Nesciunt, voluptatem blanditiis beatae, quos laborum molestias saepe ut aspernatur eveniet, inventore veritatis vero.
						</p>
						<div className='w-full flex flex-row justify-between items-center gap-2'>
							<hr className='w-full h-1 bg-[#D7AB6C]' />
							<p className='text-sm md:text-md text-[#D7AB6C] font-medium whitespace-nowrap'>Akhir dari Artikel</p>
							<hr className='w-full h-1 bg-[#D7AB6C]' />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
