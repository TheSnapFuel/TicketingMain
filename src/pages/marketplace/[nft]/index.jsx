import Link from 'next/link';
import React from 'react';
import Cover from '../../../components/Booking/Cover';
import Header from '../../../components/Profile/Header';
import { BsChevronRight } from 'react-icons/bs';
import NFTSection from '../../../components/Marketplace/NFTSection';
import Accordion from '../../../utils/Accordion';
import BookingRow from '../../../components/Booking/BookingRow';
import MarketCard from '../../../components/Marketplace/MarketCard';
import NFTDetails from '../../../components/Marketplace/NFTDetails';
import PriceGraph from '../../../components/Marketplace/PriceGraph';

function AboutNFT() {
	const itemData = [
		{
			index: 1,
			img: '/images/movie.jpg',
			title: 'Moonlight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '1',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			index: 2,
			img: '/images/item2.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '23',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			index: 3,
			img: '/images/item3.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '34',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			index: 4,
			img: '/images/item4.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '10',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	];

	const items = (
		<>
			{itemData.map(item => (
				<MarketCard key={item.index} {...item} />
			))}
			{itemData.map(item => (
				<MarketCard key={item.index + 4} {...item} />
			))}
		</>
	);

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
					<div className="grid grid-cols-12 mt-16">
						<div className="col-span-5">
							<NFTSection>
								<div className="object-cover h-[400px]">
									<img
										src="/images/movie.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
							</NFTSection>
							<div className="mt-12">
								<NFTSection title="Description">
									<div className="p-4">
										<p className="pt-2 pb-2">Uploaded By</p>
										<div className="flex mt-2">
											<div className="min-w-16 h-16 rounded-lg overflow-hidden">
												<img
													src="/images/movie.jpg"
													className="w-16 h-16 object-cover"
												/>
											</div>
											<div className="ml-2">
												<h3>Abhinav Rana</h3>
												<p className="text-[#585757]">0x43..29</p>
												<p className="text-[#a7a7a7] line-clamp-2">
													{description}
												</p>
												<div className="mr-20">
													<Accordion />
												</div>
											</div>
										</div>
									</div>
									<div className="bg-[#242425] px-20 py-8">
										<div className="flex justify-between items-center py-2">
											<p>Address</p>
											<p className="text-[#a7a7a7]">0x65343...43454</p>
										</div>
										<div className="flex justify-between items-center py-2">
											<p>Token Id</p>
											<p className="text-[#a7a7a7]">0345677</p>
										</div>
										<div className="flex justify-between items-center py-2">
											<p>Protocol</p>
											<p className="text-[#a7a7a7]">erc-741</p>
										</div>
										<div className="flex justify-between items-center py-2">
											<p>Creator Fees</p>
											<p className="text-[#a7a7a7]">4 %</p>
										</div>
									</div>
								</NFTSection>
							</div>
						</div>
						<div className="col-span-7 ml-8">
							<NFTSection title="Recent Price">
								<div className="flex px-8 py-6 justify-between items-center">
									<div className="flex items-center">
										<img
											src="/images/icons/ethereum.svg"
											className="h-16 mx-4"
										/>
										<span className="text-2xl">73.01 = $123,000</span>
									</div>
									<Link href="/marketplace/1/buy">
										<a
											className="px-6 py-2 w-48 bg-accent rounded-lg duration-200 hover:scale-110 block text-center"
											style={{
												boxShadow: '0px 0px 30px -15px rgba(126, 199, 206, 1)',
												webkitBoxShadow:
													'0px 0px 30px -15px rgba(126, 199, 206, 1)',
												mozBoxShadow:
													'0px 0px 30px -15px rgba(126, 199, 206, 1)',
											}}>
											Place Bid
										</a>
									</Link>
								</div>
							</NFTSection>
							<div className="my-8"></div>
							<NFTSection title="History of Item">
								<div className="w-full h-96 overflow-x-hidden overflow-y-auto">
									<table className="w-full table-auto">
										<thead>
											<tr>
												<th className="p-2 pl-6 border-b text-center text-accent border-[#5b5d5e] font-normal">
													To
												</th>
												<th className="p-2 border-b text-center text-accent border-[#5b5d5e] font-normal">
													USD Price
												</th>
												<th className="p-2 border-b text-center text-accent border-[#5b5d5e] font-normal">
													Floor Price
												</th>
												<th className="p-2 pr-6 border-b text-center text-accent border-[#5b5d5e] font-normal">
													Date Sold
												</th>
											</tr>
										</thead>
										<tbody>
											{[1, 2, 3, 4, 5].map((item, index) => (
												<tr key={index}>
													{[
														<div key="person" className="flex items-center">
															<div className="w-12 h-12 rounded-lg mr-2">
																<img
																	src="/images/movie.jpg"
																	className="w-12 h-12 object-cover"
																/>
															</div>
															<div>
																<p className="pb-1 text-sm">Comedy</p>
																<p className="text-[#585757] text-xs">
																	Retrieved
																</p>
															</div>
														</div>,
														'$123,000',
														'0.8 eth',
														<span key="price" className="text-[#d2e599]">
															12/12/2019
														</span>,
													].map((item, idx) => (
														<td
															key={idx}
															className={`${
																idx == 0 && 'pl-8'
															} p-2 py-4 border-b text-center border-[#5b5d5e] font-normal ${
																idx == 3 && 'pr-8'
															} ${index == 4 && 'border-b-0'}`}>
															{item}
														</td>
													))}
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</NFTSection>
							<div className="my-8"></div>
							<NFTSection title="Price History">
								<div className="flex items-center w-full">
									<PriceGraph />
								</div>
							</NFTSection>
						</div>
					</div>
					<div className="my-12 -ml-12">
						<BookingRow title="Similar Collections" items={items}></BookingRow>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutNFT;
