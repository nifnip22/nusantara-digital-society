import { EventAgendaProps } from '@/utils/types';

export default function EventAgenda({
  agendaTime,
  agendaDescription,
}: EventAgendaProps) {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        <div className="flex gap-x-2 items-start text-sm text-gray-600">
          <div className="w-2 h-2 bg-[#D7AB6C] flex-shrink-0 self-center rounded-full"></div>
          <p className={'text-sm md:text-md font-medium'}>{agendaTime} WITA</p>
        </div>
        <h1 className="text-md md:text-lg font-semibold">
          {agendaDescription}
        </h1>
      </div>
      <hr />
    </>
  );
}
