import { CircleUser, SquareUser } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
	return (
		<div className=' mt-10 '>
			<h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>
				Join the global <br className=' hidden md:block' /> live-streaming
				platform
			</h1>
			<p className='text-center md:text-2xl font-bold mt-5'>
				for content creation, social communication, and live entertainment.
			</p>
			<div className=' '>
				<button className='flex btn-gradient mt-5 py-3  rounded-3xl  items-center justify-center gap-3 md:text-xl font-bold w-full'>
					<CircleUser size={24} />
					Log in / Sign up
				</button>
				<button className='flex bg-white text-gray-800 mt-2 py-3  rounded-3xl  items-center justify-center gap-3 md:text-xl font-bold w-full'>
					Get DDL App
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
