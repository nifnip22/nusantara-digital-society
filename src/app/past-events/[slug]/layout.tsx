import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

export default function PastEventLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
                    {children}
                </div>
			</main>
			<Footer />
		</>
	);
}
