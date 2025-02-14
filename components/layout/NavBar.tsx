'use client';
import React from 'react';
import Container from './Container';
import { AlignJustify, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Logo from '@/public/logo_2.png';

import { Button } from '../ui/button';
import Image from 'next/image';
import { GamedIcon, LeaderBoardIcon, VideoIcon } from '@/lib/icons/CommonIcons';

const NavBar = () => {
	const router = useRouter();

	return (
		<div className='sticky top-0 border border-b-primary/10'>
			<Container>
				<div className='flex justify-between items-center'>
					<div className=' flex items-center gap-5'>
						<div className='md:hidden'>
							<AlignJustify />
						</div>
						<div className=' flex items-center gap-1 cursor-pointer'>
							<Image src={Logo} width={60} height={40} alt='logo' />
						</div>
						<div className=' hidden md:flex items-center gap-3'>
							<div className=' flex items-center gap-1 cursor-pointer'>
								<VideoIcon h={20} w={20} color='white' />
								<span>Livestreams</span>
							</div>
							<div className=' flex items-center gap-1 cursor-pointer'>
								<LeaderBoardIcon h={20} w={20} color='white' />
								<span>Leaderboard</span>
							</div>

							<div className=' flex items-center gap-1 cursor-pointer'>
								<GamedIcon h={20} w={20} color='white' />
								<span>Games</span>
							</div>
						</div>
					</div>

					<div className='hidden md:flex  items-center gap-3'>
						<div>
							<VideoIcon h={20} w={20} color='white' />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;
