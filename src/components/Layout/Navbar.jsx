import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Navbar() {
	const navItems = [
		{
			link: '/#how-it-works',
			name: 'How It Works',
		},
		{
			link: '/#our-mission',
			name: 'Our Mission',
		},
		{
			link: '/#about',
			name: 'About',
		},
	];
	const navClass = 'px-8 flex justify-between text-secondary h-full';

	return (
		<div className="fixed top-0 left-0 w-full z-50 h-20 bg-[#17181e]">
			<nav className={navClass} id="navbar" style={{ transition: '0.4s' }}>
				<div className="flex flex-1 h-full items-center">
					<div id="logo" className="flex items-center shrink-0">
						<Link href="/#">
							<a>
								<img
									src="/images/icons/snap.svg"
									className="block h-8 w-auto"
									alt="logo"
								/>
							</a>
						</Link>
					</div>
					<h1 className="ml-3 text-2xl">The Snap Fuel</h1>
				</div>
				<div id="" className="flex items-stretch content-center align-middle">
					{navItems.map((item, index) => (
						<Link href={item.link} key={index}>
							<a className="flex py-auto px-4 hover:opacity-90 hover:border-b-2 border-accent duration-100">
								<div className="my-auto">{item.name}</div>
							</a>
						</Link>
					))}
					<Link href="/booking">
						<div className="flex items-center">
							<button
								className="rounded-lg px-6 py-2 mx-2 button-fill-left hover:text-accent"
								type="button">
								Book Now
							</button>
						</div>
					</Link>
				</div>
			</nav>
		</div>
	);
}