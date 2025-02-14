import { Button } from '@/components/ui/button';
import HomeLayout from './(home)/layout';
import HeroSection from '@/components/layout/HeroSection';
import EmblaCarousel from '@/components/carousel/Carousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
	return (
		<HomeLayout>
			<div>
				<HeroSection />
				{/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
			</div>
		</HomeLayout>
	);
}
