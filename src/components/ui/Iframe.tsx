import { IframeProps } from "@/utils/types";

export default function iframe({iframeSrc}: IframeProps) {
	return (
		<>
			<div className='bg-gray-300 max-w-full aspect-video rounded-3xl overflow-hidden'>
				<iframe src={iframeSrc} allowFullScreen frameBorder='0' className='w-full h-full object-cover'></iframe>
			</div>
		</>
	);
}
