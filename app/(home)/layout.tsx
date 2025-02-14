import Container from '@/components/layout/Container';
import NavBar from '@/components/layout/NavBar';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className=' home-wrapper '>
			<video autoPlay loop muted playsInline className='home-video'>
				<source src='/bg-video.mp4' type='video/mp4' />
			</video>
			<NavBar />
			<Container>
				<div className='content  w-[95%] md:w-[70%]  '>{children}</div>
			</Container>
			<div className='FBUxA flex'>
				<div className='bkaTO'></div>
				<div className='xC58k'></div>
				<div className='aAEoL'></div>
			</div>
		</div>
	);
};

export default HomeLayout;
