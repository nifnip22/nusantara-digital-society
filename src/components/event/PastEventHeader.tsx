import { PastEventHeaderProps } from "@/utils/types";
import { MapPin, Calendar, Users } from "lucide-react";

export default function PastEventHeader({eventTitle, eventLocation, eventDate, eventTime, participantsCount}: PastEventHeaderProps) {
    return (
        <>
            <h1 className='text-4xl md:text-5xl font-bold leading-normal tracking-wide'>{eventTitle}</h1>
			<div className={'flex flex-col gap-4'}>
				<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
					<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
						<MapPin className={'w-8 h-8 text-[#D7AB6C]'} />
					</div>
					<div>
						<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Lokasi</p>
						<p className={'text-base md:text-lg font-medium'}>{eventLocation}</p>
					</div>
				</div>
				<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
					<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
						<Calendar className={'w-8 h-8 text-[#D7AB6C]'} />
					</div>
					<div>
						<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Tanggal & Waktu</p>
						<p className={'text-base md:text-lg font-medium'}>
							{eventDate} | {eventTime} WITA
						</p>
					</div>
				</div>
				<div className={'group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'}>
					<div className={'p-2 bg-[#D7AB6C] bg-opacity-20 rounded-xl'}>
						<Users className={'w-8 h-8 text-[#D7AB6C]'} />
					</div>
					<div>
						<p className={'text-xs md:text-sm font-semibold text-gray-500 group-hover:text-[#D7AB6C] transition-colors'}>Jumlah Peserta yang Hadir</p>
						<p className={'text-base md:text-lg font-medium'}>
							{participantsCount}
						</p>
					</div>
				</div>
			</div>
        </>
    )
}