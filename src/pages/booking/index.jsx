import React from 'react';
import BookingCard from '../../components/Booking/BookingCard';
import BookingRow from '../../components/Booking/BookingRow';
import TrendingCard from '../../components/Booking/TrendingCard';
import Header from '../../components/Profile/Header';
import Scrollspy from 'react-scrollspy';
import styles from '../../components/Booking/Booking.module.scss';
import Link from 'next/link';

import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import {massEventAddress} from '../../../config'
import MassEvent from '../../../artifacts/contracts/MassEvent.sol/MassEvent.json'

function Booking() {
	const [tickets, setTickets] = useState([])
	const [loadingState, setLoadingState] = useState('not-loaded')
	useEffect(() => {
		loadNFTs()
	  }, [])
	async function loadNFTs() {
	const web3Modal = new Web3Modal({
		network: 'mainnet',
		cacheProvider: true,
	})
	const connection = await web3Modal.connect()
	const provider = new ethers.providers.Web3Provider(connection)
	const signer = provider.getSigner()

	const contract = new ethers.Contract(massEventAddress, MassEvent.abi, signer)
	const data = await contract.getTotalTickets()

	// const items = await Promise.all(data.map(async i => {
	// 	const tokenUri = await contract.tokenURI(i.tokenId)
	// 	const meta = await axios.get(tokenUri)
	// 	let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
	// 	let item = {
	// 	price,
	// 	tokenId: i.tokenId.toNumber(),
	// 	seller: i.seller,
	// 	owner: i.owner,
	// 	image: meta.data.image,
	// 	}
	// 	return item
	// }
	// ))

	setTickets(items)
	setLoadingState('loaded') 
	}
	const itemData = [
		{
			index: 1,
			img: '/images/item1.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹1,000',
			seats: '1',
			url: '/1',
		},
		{
			index: 2,
			img: '/images/item2.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹656',
			seats: '23',
			url: '/2',
		},
		{
			index: 3,
			img: '/images/item3.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹100',
			seats: '34',
			url: '/3',
		},
		{
			index: 4,
			img: '/images/item4.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹2999',
			seats: '10',
			url: '/4',
		},
	];

	const items = (
		<>
			{itemData.map(item => (
				<BookingCard key={item.index} {...item} />
			))}
			{itemData.map(item => (
				<BookingCard key={item.index + 4} {...item} />
			))}
		</>
	);

	const trendingItems = (
		<>
			{itemData.map(item => (
				<TrendingCard key={item.index} {...item} index={item.index} />
			))}
			{itemData.map(item => (
				<TrendingCard key={item.index + 4} {...item} index={item.index + 4} />
			))}
			{itemData.map(item => (
				<TrendingCard key={item.index + 8} {...item} index={item.index + 8} />
			))}
		</>
	);
	if (loadingState === 'loaded' && !tickets.length) 
	return (
		<div className="p-4 relative">
		<div className="my-4 mx-8">
			<Header title="Booking" />
			<div className="w-full flex relative my-4 p-4">
				<div className="max-w-2xl mx-auto">
					<form className="flex items-center">
						<div className="relative w-80">
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							</div>

						</div>
						<div className="text-8xl pr-96">
							No Tickets Found
						</div>
					</form>
				</div>
				<div className="absolute right-0 pr-4">
					<Link href="/booking/new">
						<a className="rounded-full bg-[#22A6B3] px-4 py-2 text-sm transform duration-200 hover:scale-110 block">
							Generate tickets
						</a>
					</Link>
				</div>
			</div>
		</div>
	</div>
	)

	return (
		<div className="p-4 relative">
			<div className="my-4 mx-8">
				<Header title="Booking" />
				<div className="w-full flex relative my-4 p-4">
					<div className="max-w-2xl mx-auto">
						<form className="flex items-center">
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative w-80">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg
										className="w-5 h-5 text-[#D9D9D9]"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clipRule="evenodd"></path>
									</svg>
								</div>
								<input
									type="text"
									id="simple-search"
									className="bg-[#1D1F21] text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-[#585757]"
									placeholder="Type here to search the ticket"
								/>
							</div>
						</form>
					</div>
					<div className="absolute right-0 pr-4">
						<Link href="/booking/new">
							<a className="rounded-full bg-[#22A6B3] px-4 py-2 text-sm transform duration-200 hover:scale-110 block">
								Generate tickets
							</a>
						</Link>
					</div>
				</div>
				<div className="w-full mt-12 align-middle">
					<Scrollspy
						items={[
							'section-tr',
							'section-ex',
							'section-re',
							'section-fa',
							'section-ne',
							'section-li',
						]}
						offset={-100}
						currentClassName={styles['is-current']}
						className={`flex justify-center sticky top-0 bg-primary z-50 mb-12 border-0 border-b-2 border-gray-800 ${styles['scroll-nav']}`}>
						<li>
							<a href="#section-tr">Trending </a>
						</li>
						<li>
							<a href="#section-ex">Explore</a>
						</li>
						<li>
							<a href="#section-re">Recent</a>
						</li>
						<li>
							<a href="#section-fa">Favourites</a>
						</li>
						<li>
							<a href="#section-ne">Near Me</a>
						</li>
						<li>
							<a href="#section-li">Limited</a>
						</li>
					</Scrollspy>
					<BookingRow title="Trending" items={trendingItems} sec="tr" />
					<BookingRow title="Explore" items={items} sec="ex" />
					<BookingRow title="Recent" items={items} sec="re" />
					<BookingRow title="Favourites" items={items} sec="fa" />
					<BookingRow title="Near Me" items={items} sec="ne" />
					<BookingRow title="Limited" items={items} sec="li" />
				</div>
			</div>
		</div>
	);
}

export default Booking;
