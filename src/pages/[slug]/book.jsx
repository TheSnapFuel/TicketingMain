import React from 'react';
import BookingModal from '../../components/Booking/BookingModal';
import VenueSelection from '../../components/Booking/VenueSelection';
import Header from '../../components/Profile/Header';
import NumberInput from '../../utils/NumberInput';
import { SeatPicker } from '../../components/SeatPicker/SeatPicker';
import { IoIosArrowDown } from 'react-icons/io';

function EventPage() {
	const today = new Date();
	const dates = Array.from({ length: 7 }, (_, i) => {
		return new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
	});
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
	const { title } = event;

	const venues = [
		{
			title: 'Theatre 1',
			timings: [
				new Date(),
				new Date(today.getTime() + 1 * 1 * 55 * 60 * 1000),
				new Date(today.getTime() + 1 * 6 * 60 * 60 * 1000),
				new Date(),
				new Date(today.getTime() + 1 * 1 * 55 * 60 * 1000),
				new Date(today.getTime() + 1 * 1 * 55 * 60 * 1000),
				new Date(today.getTime() + 1 * 1 * 55 * 60 * 1000),
				new Date(today.getTime() + 1 * 6 * 60 * 60 * 1000),
				new Date(),
			],
			price: 'Rs. 1000',
			seats: true,
		},
		{
			title: 'Theatre 1',
			timings: [
				new Date(),
				new Date(today.getTime() + 1 * 1 * 55 * 60 * 1000),
				new Date(today.getTime() + 1 * 6 * 60 * 60 * 1000),
				new Date(),
			],
			price: 'Rs. 1000',
			seats: false,
		},
	];
	const rows = [
		[
			{ id: 1, number: 1, isSelected: true },
			{ id: 2, number: 2 },
			null,
			{
				id: 3,
				number: '3',
				isReserved: true,
			},
			{ id: 4, number: '4' },
			null,
			{ id: 5, number: 5 },
			{ id: 6, number: 6 },
		],
		[
			{
				id: 7,
				number: 1,
				isReserved: true,
			},
			{ id: 8, number: 2, isReserved: true },
			null,
			{ id: 9, number: '3', isReserved: true },
			{ id: 10, number: '4' },
			null,
			{ id: 11, number: 5 },
			{ id: 12, number: 6 },
		],
		[
			{ id: 13, number: 1 },
			{ id: 14, number: 2 },
			null,
			{ id: 15, number: 3, isReserved: true },
			{ id: 16, number: '4' },
			null,
			{ id: 17, number: 5 },
			{ id: 18, number: 6 },
		],
		[
			{ id: 19, number: 1 },
			{ id: 20, number: 2 },
			null,
			{ id: 21, number: 3 },
			{ id: 22, number: 4 },
			null,
			{ id: 23, number: 5 },
			{ id: 24, number: 6 },
		],
		[
			{ id: 25, number: 1, isReserved: true },
			{ id: 26, number: 2 },
			null,
			{ id: 27, number: 3, isReserved: true },
			{ id: 28, number: 4 },
			null,
			{ id: 29, number: 5 },
			{ id: 30, number: 6, isReserved: true },
		],
	];

	const [timingSelected, setTimingSelected] = React.useState([-1, -1]);
	const [dateSelected, setDateSelected] = React.useState(0);
	const [stage, setStage] = React.useState(1);
	const [numTickets, setNumTickets] = React.useState(1);
	const [seatLoading, setSeatLoading] = React.useState(false);

	const headerTitles = ['', 'Buy Now', 'Buy Now', 'Payment', 'Buy Now'];

	const addSeatCallback = async (
		{ row, number, id },
		addCb,
		params,
		removeCb
	) => {
		setSeatLoading(true);

		if (removeCb) {
			await new Promise(resolve => setTimeout(resolve, 10));
			console.log(
				`Removed seat ${params.number}, row ${params.row}, id ${params.id}`
			);
			removeCb(params.row, params.number);
		}
		await new Promise(resolve => setTimeout(resolve, 10));
		console.log(`Added seat ${number}, row ${row}, id ${id}`);
		const newTooltip = ``;
		addCb(row, number, id, newTooltip);
		setSeatLoading(false);
	};

	const removeSeatCallback = async ({ row, number, id }, removeCb) => {
		setSeatLoading(true);

		await new Promise(resolve => setTimeout(resolve, 10));
		console.log(`Removed seat ${number}, row ${row}, id ${id}`);
		// A value of null will reset the tooltip to the original while '' will hide the tooltip
		const newTooltip = ['A', 'B', 'C'].includes(row) ? null : '';
		removeCb(row, number, newTooltip);
		setSeatLoading(false);
	};

	const paymentMethods = [
		{
			title: 'Snap Wallet',
			logo: '/images/icons/snap.svg',
			subtitle: 'Rahul_P',
		},
		{
			title: 'Stripe',
			logo: '/images/icons/stripe.svg',
			subtitle: '',
		},
		{
			title: 'UPI',
			logo: '/images/icons/upi.svg',
			subtitle: '',
		},
		{
			title: 'Paypal',
			logo: '/images/icons/paypal.svg',
			subtitle: '',
		},
	];

	return (
		<div className="flex flex-col p-4 relative h-screen">
			<div className="my-4 mx-8 h-full">
				<Header title={headerTitles[stage - 1]} />
				{stage == 1 && (
					<VenueSelection
						event={event}
						venues={venues}
						dates={dates}
						timingSelected={timingSelected}
						setDateSelected={setDateSelected}
						dateSelected={dateSelected}
						setTimingSelected={setTimingSelected}
						setStage={setStage}
					/>
				)}
				{stage == 2 && (
					<div className="flex w-full h-full items-center justify-between flex-col">
						<BookingModal>
							<div className="w-full h-full flex flex-col justify-between items-center pt-8 pb-2">
								<h1 className="text-4xl font-bold text-center">
									Select the number of tickets
								</h1>
								<div>
									<NumberInput value={numTickets} setValue={setNumTickets} />
								</div>
								<div>
									<p className="text-xs font-light">
										Note: You can buy upto a maximum of 6 tickets only
									</p>
								</div>
							</div>
						</BookingModal>
						<div className="w-full flex justify-between pr-8 mb-12">
							<button
								className="bg-black bg-opacity-20 rounded-lg px-4 py-2 border-0 duration-200 hover:scale-110 w-48 ml-6"
								onClick={() => {
									setStage(1);
								}}>
								Back
							</button>
							<button
								className="bg-accent text-white py-2 border-0 px-4 rounded-lg duration-200 hover:scale-110 transform w-48"
								onClick={() => {
									setStage(3);
								}}>
								Select Seats
							</button>
						</div>
					</div>
				)}
				{stage == 3 && (
					<div className="w-full flex flex-col items-center justify-center pr-16">
						<div className="relative">
							<p className="text-center text-xs">Screen this side</p>
							<div className="relative mb-32 mt-8 w-96">
								<img
									src="/images/screen/1.png"
									className="absolute top-0 left-0"
								/>
								<img
									src="/images/screen/2.png"
									className="absolute -top-3 left-0"
								/>
								<img
									src="/images/screen/3.png"
									className="absolute -top-3 left-0"
								/>
							</div>
						</div>
						<SeatPicker
							addSeatCallback={addSeatCallback}
							removeSeatCallback={removeSeatCallback}
							rows={rows}
							maxReservableSeats={3}
							loading={seatLoading}
							alpha
							continuous
							visible
						/>
						<h1 className="mt-8 text-3xl">Select your seats</h1>
						<div className="w-full flex justify-center mt-12 mb-4">
							<button
								className="bg-accent text-white py-2 border-0 px-4 rounded-lg duration-200 hover:scale-110 transform w-48"
								onClick={() => {
									setStage(4);
								}}>
								Pay Now
							</button>
						</div>
						<div className="w-full flex justify-center">
							<button
								className="rounded-lg px-4 py-2 border-0 duration-200 hover:scale-110 w-48"
								onClick={() => {
									setStage(2);
								}}>
								Back
							</button>
						</div>
					</div>
				)}
				{stage == 4 && (
					<div className="grid grid-cols-12 ml-4 mt-8">
						<div className="col-span-5">
							<h2 className="text-xl">Payment Summary</h2>
							<div className="flex flex-col my-4 px-6 py-6 bg-[#282b2e] rounded-xl">
								<div className="flex items-center">
									<img
										src="/images/movie.jpg"
										className="w-24 h-32 rounded-3xl m-2 p-2"
									/>
									<div>
										<h2 className="text-lg">{title}</h2>
										<p className="opacity-60 text-sm mt-2">
											This is some about the movie.
										</p>
									</div>
								</div>
								<div className="pl-4 pr-6 text-[#a7a7a7]  font-light">
									<hr className="border-[#a7a7a7] mt-2 mb-4" />
									<div className="flex pb-4 w-full justify-between">
										<p>Subtotal</p>
										<p className="text-accent">$30</p>
									</div>
									<div className="flex pb-4 w-full justify-between">
										<p>Convenience Fees</p>
										<p className="text-accent">$2</p>
									</div>
									<div className="flex pb-4 w-full justify-between">
										<p>Taxes</p>
										<p className="text-accent">3.2%</p>
									</div>
									<hr className="border-[#a7a7a7] mb-2" />
									<div className="flex pt-2 pb-4 w-full justify-between">
										<p>Grand Total</p>
										<p className="text-accent">$33.03</p>
									</div>
								</div>
								<div className="flex justify-center my-8">
									<button
										className="bg-accent py-2 px-6 w-56 rounded-lg duration-200 hover:scale-110"
										style={{
											boxShadow: '0px 0px 30px -15px rgba(126, 199, 206, 1)',
											webkitBoxShadow:
												'0px 0px 30px -15px rgba(126, 199, 206, 1)',
											mozBoxShadow: '0px 0px 30px -15px rgba(126, 199, 206, 1)',
										}}
										onClick={e => {
											setStage(5);
										}}>
										Make payment
									</button>
								</div>
							</div>
						</div>
						<div className="col-span-7 ml-12">
							<h2 className="text-xl">Payment Methods</h2>
							<div className="flex flex-col my-4">
								{paymentMethods.map((method, index) => (
									<div
										className="text-sm flex bg-[#1d1f21] items-center px-4 py-4 rounded-lg my-2 max-w-128"
										key={index}>
										<input
											type="radio"
											id={`payment-${method.title}`}
											name="payment"
											className="radio"
										/>
										<label
											htmlFor={`payment-${method.title}`}
											className="flex ml-4 items-center justify-between w-full cursor-pointer">
											<div className="flex items-center">
												<img src={method.logo} className="h-12 mr-4 max-w-16" />
												<div>
													<h3 className="font-light text-lg">{method.title}</h3>
													<p className="text-[#464849] text-xs">
														{method.subtitle}
													</p>
												</div>
											</div>
											<div>
												<IoIosArrowDown className="text-accent" />
											</div>
										</label>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
				{stage == 5 && (
					<>
						<BookingModal>
							<div className="w-full h-full flex flex-col justify-between items-center pt-8 pb-6">
								<h1 className="text-4xl font-bold text-center">
									Booking Summary
								</h1>
								<p className="font-light text-xl text-center">
									Tickets: 3<br />
									Seats: E2, E3, E4 ($30)
									<br />
									Convenience Fees: $1
									<br />
									Total Cost: $31
								</p>
								<p className="text-xs font-light text-center opacity-80">
									Your tickets are accessible on your wallet.
									<br />
									Present them at the event for your entry.
								</p>
							</div>
						</BookingModal>
					</>
				)}
			</div>
		</div>
	);
}

export default EventPage;
