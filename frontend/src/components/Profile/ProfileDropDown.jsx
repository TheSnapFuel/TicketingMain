import React from 'react';
import AnimateWhenVisible from '../../utils/AnimateWhenVisible';

function ProfileDropDown() {
	const data = {
		name: 'Abhinav',
		image: '/images/profile.png',
		address: '0xruei..432',
		trades: '50+',
		tickets: 5,
	};
	return (
		<AnimateWhenVisible
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0 },
			}}>
			<div className="p-4 rounded-3xl shadow-2xl shadow-[#1a1a1a] absolute z-1000 right-0 bg-[#2a2a2a] min-w-56 cursor-default">
				<div className="flex items-center">
					<div className="w-16 h-16 rounded-lg mr-2">
						<img src={data.image} className="w-full h-full object-cover" />
					</div>
					<div>
						<h1 className="text-lg">{data.name}</h1>
						<p className="text-sm text-[#716d6d] font-light">{data.address}</p>
					</div>
				</div>
				<hr className="my-2" />
				<div className="flex justify-center items-center px-4">
					{[
						{ name: 'Trades', value: data.trades },
						{ name: 'Tickets', value: data.tickets },
					].map(({ name, value }, index) => (
						<div
							className="flex flex-col justify-center items-center mx-4"
							key={index}>
							<p className="font-light">{name}</p>
							<p className="text-lg text-accent font-light">{value}</p>
						</div>
					))}
				</div>
				<hr className="my-2" />
				<div className="flex justify-around items-center pb-2 pt-4">
					{[
						{ label: 'Wallet', icon: '/images/icons/Wallet.svg' },
						{ label: 'Settings', icon: '/images/icons/Settings.svg' },
						{ label: 'Logout', icon: '/images/icons/Logout.svg' },
					].map(({ label, icon }, index) => (
						<div
							className="flex flex-col justify-center items-center mx-2 cursor-pointer"
							key={index}>
							<p className="text-lg text-accent font-light">
								<img src={icon} className="w-6 h-6 mb-2" />
							</p>
							<p className="text-sm text-[#959595] font-light">{label}</p>
						</div>
					))}
				</div>
			</div>
		</AnimateWhenVisible>
	);
}

export default ProfileDropDown;
