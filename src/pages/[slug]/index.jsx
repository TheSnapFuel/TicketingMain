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

function EventPage() {
	const event = {
		title: 'Moonlight(18+)',
		img: '/images/movie.jpg',
		coverImg: '/images/cover.png',
		date: '2 September, 2016',
		genres: ['Drama', 'Indie'],
		rating: '4.5',
		playbackTimeHr: 1,
		playbackTimeMin: 51,
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
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
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
