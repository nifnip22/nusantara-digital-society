import React from 'react';
import Image from 'next/image';
import { MasonryArrayProps, MasonryProps } from '@/utils/types';

export default function Masonry({photos}: MasonryArrayProps) {
	const columns = 3;
	const columnPhotos: MasonryProps[][] = Array.from({ length: columns }, () => []);

	photos.forEach((photo, index) => {
		columnPhotos[index % columns].push(photo);
	});

	return (
		<>
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{columnPhotos.map((column, colIndex) => (
					<div key={colIndex} className='grid gap-4'>
						{column.map((photo, photoIndex) => (
							<div key={photoIndex} className='bg-gray-300 max-w-full rounded-3xl overflow-hidden'>
								<Image src={photo.imageSrc} alt={photo.imageAlt || 'Image Not Loaded'} width={1500} height={1500} className={'w-full h-full object-cover'} />
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
