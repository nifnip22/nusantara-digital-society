'use client';

import Footer from '@/components/navigation/Footer';
import PastEventCard from '@/components/layouts/PastEventCard';
import Navbar from '@/components/navigation/Navbar';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Event } from '@/utils/types';

const eventData: Event[] = [
  {
    id: 1,
    imageSrc: '/img/image_placeholder.png',
    title: 'Judul Event',
    location: 'Lokasi',
    datetime: 'Tanggal | Waktu',
    participantsCount: '200',
    guests: [
      {
        guestImageSrc: '/img/image_placeholder.png',
        guestName: 'John Doe',
        guestRole: 'Narasumber',
      },
      {
        guestImageSrc: '/img/image_placeholder.png',
        guestName: 'Jane Smith',
        guestRole: 'Moderator',
      },
    ],
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
  {
    id: 2,
    imageSrc: '/img/image_placeholder.png',
    title: 'Judul Event',
    location: 'Lokasi',
    datetime: 'Tanggal | Waktu',
    participantsCount: '200',
    guests: [
      {
        guestImageSrc: '/img/image_placeholder.png',
        guestName: 'Alice Brown',
        guestRole: 'Keynote Speaker',
      },
      {
        guestImageSrc: '/img/image_placeholder.png',
        guestName: 'Bob White',
        guestRole: 'Panelist',
      },
    ],
    highlights: ['Lomba RPL.', 'Lomba UI/UX'],
  },
];

export default function PastEvents() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [events, setEvents] = useState<{
    filtered: Event[];
    all: Event[];
  }>({
    filtered: [],
    all: [],
  });

  useEffect(() => {
    async function fetchevents() {
      const items = eventData.filter((event) =>
        event.title.toLowerCase().includes(searchParams.get('search') || '')
      );
      setEvents({ filtered: items, all: items });
    }
    fetchevents();
  }, []);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    if (query) {
      const filtered = events.all.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setEvents((prev) => ({ ...prev, filtered }));
    } else {
      setEvents((prev) => ({ ...prev, filtered: prev.all }));
    }
  }, [searchParams, events.all]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim().toLowerCase();
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (query) {
      newSearchParams.set('search', query);
    } else {
      newSearchParams.delete('search');
    }

    router.push(`?${newSearchParams.toString()}`);
  };
  return (
    <>
      <header className="bg-[#f9f2e9]">
        <Navbar />
        <div className="px-6 md:px-16 2xl:px-40 pt-6 py-12 mb-8">
          <div
            className={
              'text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4'
            }
          >
            <h1 className="text-4xl md:text-5xl font-bold">Past Events</h1>
            <p className="text-sm md:text-md">
              Rekam jejak event teknologi kami yang telah sukses diselenggarakan
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="px-6 md:px-16 2xl:px-40 pt-6 py-12">
          <div className="flex flex-col gap-y-12">
            <div className="w-full">
              <input
                onChange={handleSearchInput}
                type="text"
                className="w-full px-4 py-2 text-sm md:text-base rounded-3xl bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:outline-[#D7AB6C]"
                placeholder="Cari event..."
              />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20">
              {events.filtered.length > 0 ? (
                events.filtered.map((event) => (
                  <PastEventCard key={event.id} data={event} />
                ))
              ) : (
                <p className="text-gray-500 text-center w-full">
                  Tidak ada artikel yang ditemukan.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
