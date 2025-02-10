'use client';

import Footer from '@/components/navigation/Footer';
import ArticleCard from '@/components/layouts/ArticleCard';
import Navbar from '@/components/navigation/Navbar';
import { Search } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';
import { useEffect, useState } from 'react';
import { ArtikelProps } from '@/utils/types';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Artikel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<{
    filtered: ArtikelProps[];
    all: ArtikelProps[];
  }>({
    filtered: [],
    all: [],
  });

  useEffect(() => {
    async function fetchArticles() {
      const posts = (await getAllPosts()) as ArtikelProps[];
      setArticles({ filtered: posts, all: posts });
    }
    fetchArticles();
  }, []);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    if (query) {
      const filtered = articles.all.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setArticles((prev) => ({ ...prev, filtered }));
    } else {
      setArticles((prev) => ({ ...prev, filtered: prev.all }));
    }
  }, [searchParams, articles.all]);

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
          <div className="text-gray-900 flex flex-col justify-center items-center text-center sm:justify-start sm:items-start gap-4">
            <h1 className="text-4xl md:text-5xl font-bold">Artikel</h1>
            <p className="text-sm md:text-md">
              Jelajahi wawasan, aktivitas, dan pembaruan dari komunitas
              Nusantara Digital Society
            </p>
          </div>
        </div>
      </header>

      <main>
        <div className="px-6 md:px-16 2xl:px-40 pt-6 py-12">
          <div className="flex flex-col gap-y-12">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full px-4 py-2 text-sm md:text-base rounded-3xl bg-zinc-50 border border-gray-300 focus:border-[#D7AB6C] focus:outline-[#D7AB6C] pl-10"
                placeholder="Cari artikel..."
                onChange={handleSearchInput}
                defaultValue={searchParams.get('search') || ''}
              />
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Search color="#9CA3AF" size={18} />
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
              {articles.filtered.length > 0 ? (
                articles.filtered.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    linkHref={`artikel/${article.slug}`}
                    imageSrc={article.imageSrc ?? 'default-image-src'}
                    date={article.date}
                    author={article.author}
                    title={article.title}
                    description={article.description}
                  />
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
