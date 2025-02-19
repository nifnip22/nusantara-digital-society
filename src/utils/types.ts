export interface FloatingLabelInputProps {
	id: string;
	label: string;
	value?: string;
	setValue?: (value: string) => void;
	name: string;
	type: string;
	maxLength?: number;
	required?: boolean;
	disabled?: boolean;
}
export interface ArtikelHeaderProps {
	slug?: string;
	title: string;
	date: string;
	author: string;
}
export interface ArtikelImageProps {
	imageSrc?: string;
	imageAlt?: string;
}
export interface EventAgendaProps {
	agendaTime: string;
	agendaDescription: string;
}
export interface EventGuestsProps {
	guestImageSrc: string;
	guestName: string;
	guestRole: string;
	guestDescription?: string;
}
export interface UpcomingEventHeaderProps {
	eventTitle: string;
	eventLocation: string;
	eventDate: string;
	eventTime: string;
	registrationDeadlineDate: string;
	registrationDeadlineTime: string;
	registrationLink?: string;
}

export interface PastEventHeaderProps {
	eventTitle: string;
	eventLocation: string;
	eventDate: string;
	eventTime: string;
	participantsCount: number;
}

export interface EventImageProps {
	eventImageSrc: string;
	eventImageAlt?: string;
}

export interface IframeProps {
  iframeSrc: string;
}

export interface ArticleCardProps {
	linkHref: string;
	imageSrc: string;
	date: string;
	author: string;
	title: string;
	description: string;
}
export interface EventData {
	imageSrc: string;
	title: string;
	location: string;
	datetime: string;
	participantsCount: string;
	guests: GuestProps[];
	highlights: string[];
}

export interface GuestProps {
	guestImageSrc: string;
	guestName: string;
	guestRole: string;
}
export interface ButtonProps {
	label: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'secondary' | 'outline' | 'dark';
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

export interface ArtikelProps extends ArtikelHeaderProps, ArtikelImageProps {
	description: string;
	linkHref: string;
}

export interface MasonryProps {
	imageSrc: string;
	imageAlt?: string;
}

export interface MasonryArrayProps {
	photos: MasonryProps[];
}