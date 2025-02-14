import { CircleUser, SquareUser } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
	return (
		<div className=' mt-14 '>
			<h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>
				Join the global <br className=' hidden md:block' /> live-streaming
				platform
			</h1>
			<p className='text-center md:text-2xl font-bold mt-5'>
				for content creation, social communication, and live entertainment.
			</p>
			<div className='flex justify-center md:justify-start '>
				<button className='flex btn-gradient mt-5 py-3  rounded-2xl  items-center justify-center gap-3 text-xl font-bold w-full'>
					<CircleUser size={25} />
					Log in / Sign up
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
