import Link from 'next/link';
import React from 'react';
import {
	AiFillStar,
	AiOutlineClockCircle,
	AiOutlineStar,
} from 'react-icons/ai';
import BookingRow from '../../components/Booking/BookingRow';
import Cover from '../../components/Booking/Cover';
import EventDetails from '../../components/Booking/EventDetails';
import Header from '../../components/Profile/Header';

import { useRouter } from "next/router";
import { ethers } from "ethers";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import {massEventAddress} from '../../../config';
import MassEvent from '../../../artifacts/contracts/MassEvent.sol/MassEvent.json';
import moment from 'moment';
function EventPage() {
	const [tickets, setTickets] = useState([])
	const [loadingState, setLoadingState] = useState('not-loaded')
	const router = useRouter()

	const ticketCurr = router['query']['slug'];
	let jsonTicket = 0;
	useEffect(() => {
		loadTickets()
	  }, [])

	async function loadTickets() {
	const web3Modal = new Web3Modal({
		network: 'mainnet',
		cacheProvider: true,
	})
	const connection = await web3Modal.connect()
	const provider = new ethers.providers.Web3Provider(connection)
	const signer = provider.getSigner()

	const contract = new ethers.Contract(massEventAddress, MassEvent.abi, signer)
	const data = await contract.fetchEvents()
	let contractURI = await contract.uri(0)

	let jsonIPFS = contractURI.replace("{id}", "/"+ticketCurr)
	const ticketsFromContract = await fetch(jsonIPFS)
	const jsonTicket = await ticketsFromContract.json()
	const items = await Promise.all(data.map(async i => {

		let indexNeeded = i.ticketsIDStart.toNumber()
		let jsonIPFS = contractURI.replace("{id}", "/"+indexNeeded)
		const ticketsFromContract = await fetch(jsonIPFS)
		const jsonTicket = await ticketsFromContract.json()
		let Formattedprice = ethers.utils.formatUnits((i.price*10000000000000000).toString(), 'ether')
		let item = {
		index: i.eventId.toNumber()+1,
		img: jsonTicket['properties']['image']?jsonTicket['properties']['image']:"data:image/jpeg;base64,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",
		title: jsonTicket['properties']['eventName'],
		qr: jsonTicket['properties']['image']?jsonTicket['properties']['image']:"https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png",
		price: Formattedprice+" ETH",
		seats: jsonTicket['properties']['supply'],
		fromDate: jsonTicket['properties']['fromDate'],
		hrs: jsonTicket['properties']['hrs'],
		mins: jsonTicket['properties']['mins'],
		descrption: jsonTicket['descrption'],
		url: '/'+(i.eventId).toString()
		}
		return item
	}))

	// console.log(jsonTicket)

	// console.log(items)
	setLoadingState('loaded') 
	setTickets(items)
	}

	console.log(tickets.length>0);
	const event = {
		title: tickets.length>0?tickets[ticketCurr]['title']:'Error',
		img: tickets.length>0?tickets[ticketCurr]['img']:'Error',
		coverImg: '/images/cover.png',
		date: tickets.length>0?tickets[ticketCurr]['fromDate']:'Error',
		rating: '4.5',
		playbackTimeHr: tickets.length>0?tickets[ticketCurr]['hrs']:'Error',
		playbackTimeMin: tickets.length>0?tickets[ticketCurr]['mins']:'Error',
		genres: ['Drama', 'Indie'],

		cast: [
			{
				name: 'Mahershala Ali',
				img: '/images/cast1.jpeg',
			},
			{
				name: 'Trevante Rhodes',
				img: '/images/cast2.jpeg',
			},
		],
		description: tickets.length>0?tickets[ticketCurr]["descrption"]:'Error',
		reviews: [
			{
				name: 'Mahershala Ali',
				rating: 5,
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
			},
			{
				name: 'Random Ali',
				rating: 1,
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
			},
			{
				name: 'John Doe',
				rating: 4,
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
			},
			{
				name: 'Mahershala Ali',
				rating: 2,
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.',
			},
		],
		totalReviewCount: 10000,
	};
	const {
		title,
		img: imgSrc,
		coverImg,
		date,
		genres,
		rating,
		playbackTimeHr,
		playbackTimeMin,
		cast,
		description,
		reviews,
		totalReviewCount,
	} = event;
	if (tickets.length === 0 || loadingState === 'not-loaded') return (
		<div>
			Error 404
		</div>
	);
	return (
		<div className="p-4 relative">
			<div className="my-4 mx-8">
				<Header title={''} />
				<Cover coverImg={coverImg} />
				<div className="w-full my-2 px-8">
					<EventDetails
						imgSrc={imgSrc}
						title={title}
						genres={genres}
						playbackTimeHr={playbackTimeHr}
						playbackTimeMin={playbackTimeMin}
						date={date}>
						<div>
							<Link href="1/book">
								<a className="bg-accentDark px-4 py-2 rounded-2xl text-xl transform hover:scale-110 cursor-pointer duration-200 block">
									Book Tickets
								</a>
							</Link>
						</div>
					</EventDetails>
					<div className="w-full mt-8">
						<h2 className="text-2xl mb-2">About Movie</h2>
						<p className="opacity-90">{description}</p>
					</div>
					<div className="w-full mt-6">
						<h2 className="text-2xl mb-2">Cast</h2>
						<div className="flex items-center">
							{cast.map((cast, index) => (
								<div
									key={index}
									className="flex flex-col justify-between items-center my-2 mr-3 px-4 max-w-48">
									<img
										src={cast.img}
										className="w-24 h-32 object-cover rounded-3xl"></img>
									<h1 className="text-lg mt-2 text-center">{cast.name}</h1>
								</div>
							))}
						</div>
					</div>
					<div className="w-full mt-6">
						<div className="flex justify-between mb-2 items-center">
							<h2 className="text-2xl">Reviews (10k+)</h2>
							<Link href="#">
								<a className="text-lg underline opacity-60 pr-12 hover:opacity-90 duration-400">
									Attended the event? Leave a rating!
								</a>
							</Link>
						</div>
						<div className="-ml-12">
							<BookingRow>
								{reviews.map((review, index) => (
									<div
										className="py-2 px-6 border mr-4 rounded-2xl min-w-half h-48 mb-4"
										key={index}>
										<div className="flex justify-between items-center mb-4 mt-2">
											<h3 className="text-lg">{review.name}</h3>
											<span className="flex items-center">
												{[...Array(review.rating)].map((_, i) => (
													<AiFillStar key={i} className="h-6 w-6 pr-1" />
												))}
												{[...Array(5 - review.rating)].map((_, i) => (
													<AiOutlineStar key={i} className="h-6 w-6 pr-1" />
												))}
											</span>
										</div>
										<div className="w-full mb-4">
											<p className="opacity-90 text-sm line-clamp-4">
												{review.description}
											</p>
										</div>
									</div>
								))}
							</BookingRow>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EventPage;
