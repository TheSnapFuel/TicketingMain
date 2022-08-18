/* eslint-disable @next/next/no-img-element */

function Hero() {
	const icons = [
		{
			src: '/images/icons/FacebookLogo.svg',
		},
		{
			src: '/images/icons/TwitterLogo.svg',
		},
		{
			src: '/images/icons/InstagramLogo.svg',
		},
		{
			src: '/images/icons/DiscordLogo.svg',
		},
	];
	return (
		<>
			<div className="my-4 relative">
				<div
					className="w-full h-64 bg-cover bg-center rounded-3xl"
					style={{ backgroundImage: 'url(/images/cover.png)' }}></div>
				<div>
					<img
						src="/images/profile.png"
						className="w-24 h-24 absolute left-16 -bottom-16 rounded-xl shadow-2xl"
						alt="profile-pic"
					/>
				</div>
			</div>
			<div className="flex justify-end mt-8 mr-6">
				{icons.map((icon, index) => (
					<div className="mx-2" key={index}>
						<img
							src={icon.src}
							alt="icon"
							className="transform hover:-translate-y-1 cursor-pointer duration-200"
						/>
					</div>
				))}
			</div>
			<div className="mt-2 mx-16">
				<div>
					<h1 className="pt-3">Abhinav R.</h1>
					<p className="opacity-60">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</>
	);
}

export default Hero;
