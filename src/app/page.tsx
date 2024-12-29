import Navbar from '../components/navbar';
import Main from '@/sections/Main';
import Article from '@/sections/articles/ArticleHome';
import JoinUs from '@/sections/contacts/JoinUs';
import Footer from '@/components/footer';
import Event from '@/sections/events/Event';

export default function Home() {
  return (
    <div className="font-geist-sans">
      <Navbar />
      <Main />
      <Article />
      <Event />
      <JoinUs />
      <Footer />
    </div>
  );
}
