import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
	return (
		<>
			<div className='flex flex-row gap-2 sm:gap-4 justify-center items-center'>
				<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
					<ChevronLeft color='#D7AB6C' />
				</div>
				<div className='bg-[#D7AB6C] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
					<p className='text-gray-100 text-md font-semibold'>1</p>
				</div>
				<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
					<p className='text-gray-900 text-md'>2</p>
				</div>
				<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
					<p className='text-gray-900 text-md'>3</p>
				</div>
				<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
					<p className='text-gray-900 text-md'>4</p>
				</div>
				<div className='hover:bg-zinc-100 transform duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
					<ChevronRight color='#D7AB6C' />
				</div>
			</div>
		</>
	);
}
