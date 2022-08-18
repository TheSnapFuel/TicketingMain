import React from 'react';
import Cover from '../../../components/Booking/Cover';
import NFTDetails from '../../../components/Marketplace/NFTDetails';
import Header from '../../../components/Profile/Header';

function Buy() {
	const nft = {
		imgSrc: '/images/movie.jpg',
		title: 'Moonlight',
		author: 'A4Productions',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		owners: [
			{
				imgSrc: '/images/movie.jpg',
				url: '#',
			},
			{
				imgSrc: '/images/movie.jpg',
				url: '#',
			},
			{
				imgSrc: '/images/movie.jpg',
				url: '#',
			},
		],
		coverImg: '/images/movie.jpg',
		description:
			"Chiron, a young African-American boy, finds guidance in Juan, a drug dealer, who teaches him to carve his own path. As he grows up in Miami, Juan's advice leaves a lasting impression on him.",
	};
	const { coverImg, imgSrc, title, author, owners, description } = nft;

	const wallets = [
		{
			logo: '/images/icons/stripe.svg',
			name: 'Stripe',
			balance: '41 USD',
			address: '0x783...23',
		},
		{
			logo: '/images/icons/stripe.svg',
			name: 'Stripe',
			balance: '41 USD',
			address: '0x783...23',
		},
		{
			logo: '/images/icons/stripe.svg',
			name: 'Stripe',
			balance: '41 USD',
			address: '0x783...23',
		},
		{
			logo: '/images/icons/stripe.svg',
			name: 'Stripe',
			balance: '41 USD',
			address: '0x783...23',
		},
		{
			logo: '/images/icons/stripe.svg',
			name: 'Stripe',
			balance: '41 USD',
			address: '0x783...23',
		},
		{
			logo: '/images/icons/stripe.svg',
			name: 'Stripe',
			balance: '41 USD',
			address: '0x783...23',
		},
	];
	return (
		<div className="p-4 relative">
			<div className="my-4 mx-8">
				<Header title="Buy Now" />
				<Cover coverImg={coverImg} />
				<div className="w-full my-2 px-8">
					<NFTDetails
						imgSrc={imgSrc}
						title={title}
						author={author}
						owners={owners}
						description={description}
					/>
					<div className="flex flex-wrap justify-center items-center mt-16">
						{wallets.map(({ logo, name, balance, address }, index) => (
							<div
								key={index}
								className="mx-8 my-16 relative flex flex-col justify-center items-center bg-[#1d1f21] py-16 px-20 rounded-xl">
								<img src={logo} className="absolute -top-8 h-16" />
								<h2 className="text-2xl">{name}</h2>
								<p className="text-[#575757] my-1 text-xs">{address}</p>
								<p className="mt-4">
									Total Fund:{' '}
									<span className="ml-2 text-accent">{balance}</span>
								</p>
								<button
									className="absolute -bottom-6 h-12 w-32 bg-accent py-2 px-6 rounded-2xl flex justify-center items-center hover:scale-110 duration-200"
									style={{
										boxShadow: '0px 0px 30px -15px rgba(126, 199, 206, 1)',
										webkitBoxShadow:
											'0px 0px 30px -15px rgba(126, 199, 206, 1)',
										mozBoxShadow: '0px 0px 30px -15px rgba(126, 199, 206, 1)',
									}}>
									<img src="/images/icons/SettingsIcon.svg" className="h-6" />
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Buy;
