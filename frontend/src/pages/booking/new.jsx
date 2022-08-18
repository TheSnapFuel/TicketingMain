import React from 'react';
import Header from '../../components/Profile/Header';
import { BsCalendar2Date } from 'react-icons/bs';
import Link from 'next/link';
import FadeInWhenVisible from '../../utils/FadeInWhenVisible';
import NumberInput from '../../utils/NumberInput';

function CreateEvent() {
	let eventTypes = ['Concert', 'Sports', 'Comedy Night'];
	let paymentTypes = ['Stripe', 'Paypal', 'Cash'];

	const [success, setSuccess] = React.useState(false);
	const [supply, setSupply] = React.useState(0);
	const [link, setLink] = React.useState('/booking');

	const [timings, setTimings] = React.useState([
		'12:00 PM',
		'1:00 PM',
		'2:00 PM',
	]);
	const [timingInput, setTimingInput] = React.useState(false);

	const [locations, setLocations] = React.useState(['Theatre 1', 'PVR ECX']);
	const [locationInput, setLocationInput] = React.useState(false);

	const updateTiming = e => {
		if (timingInput) {
			const newTimings = [...timings, timingInput];
			setTimings(newTimings);
			setTimingInput(false);
		}
	};

	const updateLocation = e => {
		if (locationInput) {
			const newLocations = [...locations, locationInput];
			setLocations(newLocations);
			setLocationInput(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener(
			'keydown',
			function (e) {
				if (
					e.keyIdentifier == 'U+000A' ||
					e.keyIdentifier == 'Enter' ||
					e.keyCode == 13
				) {
					if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
						updateTiming();
						updateLocation();
						e.preventDefault();
						return false;
					}
				}
			},
			true
		);
	});

	return (
		<div className="p-4 relative">
			<div className="my-4 mx-8">
				<Header title="Create" />
				{success ? (
					<FadeInWhenVisible>
						<div className="w-full my-4 p-4">
							<div className="flex flex-col items-center justify-center">
								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 130.2 130.2"
									className="w-48 h-48">
									<circle
										className="path circle"
										fill="none"
										stroke="#ffffff"
										strokeWidth="6"
										strokeMiterlimit="10"
										cx="65.1"
										cy="65.1"
										r="62.1"
									/>
									<polyline
										className="path check"
										fill="none"
										stroke="#ffffff"
										strokeWidth="10"
										strokeLinecap="round"
										strokeMiterlimit="10"
										points="100.2,40.2 51.5,88.8 29.8,67.5 "
									/>
								</svg>
								<h1 className="text-white text-3xl font-medium mt-12 max-w-xl text-center">
									Your event has been scheduled, click the link below to view
									and edit your event.
								</h1>
								<Link href={link}>
									<a className="text-white text-xl mt-12 hover:underline">
										{/* {process.env.NEXT_PUBLIC}/{link} */}
										thesnapfuel.com{link}
									</a>
								</Link>
							</div>
						</div>
					</FadeInWhenVisible>
				) : (
					<form className="w-full my-4 p-4 block">
						<div className="flex relative">
							<div
								className="w-full h-64 bg-cover bg-center rounded-3xl"
								style={{ backgroundImage: 'url(/images/cover.png)' }}></div>
							<label
								htmlFor="cover-file"
								className="absolute bg-black top-0 left-0 h-64 w-full rounded-3xl opacity-0 hover:opacity-60 duration-200 cursor-pointer">
								<input id="cover-file" type="file" className="hidden"></input>
							</label>
							<div className="absolute -bottom-16 right-0 left-0 mx-auto w-32 h-32 bg-white rounded-lg">
								<div className="flex justify-center items-center w-full h-full">
									<label
										htmlFor="dropzone-file"
										className="flex flex-col justify-center items-center group w-full h-full bg-black rounded-lg opacity-90 hover:opacity-100 duration-200 cursor-pointer">
										<div className="flex flex-col justify-center items-center w-full h-full p-4">
											<img
												src="/images/icons/Cameras.svg"
												alt="camera"
												className="opacity-80 group-hover:opacity-100 duration-200"
											/>
										</div>
										<input id="dropzone-file" type="file" className="hidden" />
									</label>
								</div>
							</div>
						</div>
						<div className="mt-24 mx-28">
							<div className="grid grid-cols-12 gap-4">
								<div className="col-span-12 md:col-span-2 flex flex-col justify-center">
									<label htmlFor="eventname">Event Name:</label>
								</div>
								<div className="col-span-12 md:col-span-6">
									<input className="w-full inp" type="text" name="eventname" />
								</div>
								<div className="col-span-4"></div>
								<div className="col-span-12 md:col-span-2 flex flex-col justify-center">
									<label htmlFor="hr">Length of Event:</label>
								</div>
								<div className="col-span-12 md:col-span-6 flex items-center">
									<input className="w-12 inp" type="text" name="eventname" />
									<p className="mx-2">hr</p>
									<input className="w-12 inp" type="text" name="eventname" />
									<p className="mx-2">min</p>
								</div>
								<div className="col-span-4"></div>
								<div className="col-span-12 md:col-span-2 flex flex-col justify-center">
									<label htmlFor="organizer">Event Organizer:</label>
								</div>
								<div className="col-span-12 md:col-span-6 flex items-center">
									<div className="col-span-12 md:col-span-6">
										<input
											className="w-full inp"
											type="text"
											name="organizer"></input>
									</div>
								</div>
								<div className="col-span-4"></div>
								<div className="col-span-12">
									<label htmlFor="description">Description:</label>
								</div>
								<div className="col-span-12">
									<textarea
										className="w-full inp"
										name="description"></textarea>
								</div>
								<div className="col-span-12 mt-4">
									<label htmlFor="description">Event Type:</label>
									<select className="w-full select-inp mt-4">
										<option value="">Select Event Type</option>
										{eventTypes.map((type, index) => (
											<option key={index} value={type}>
												{type}
											</option>
										))}
									</select>
								</div>
								<div className="col-span-12 mt-4">
									<label htmlFor="date">Date:</label>
								</div>
								<div className="col-span-12 -mt-3 flex items-center">
									<label htmlFor="fromDate" className="mr-4 text-[#D9D9D9]">
										From:{' '}
									</label>
									<div className="relative w-48">
										<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
											<BsCalendar2Date className="w-5 h-5 text-accent" />
										</div>
										<input
											type="date"
											className="date-inp block w-full"
											name="fromDate"
											onClick={e => {
												e.target.showPicker();
											}}
										/>
									</div>{' '}
									<label htmlFor="toDate" className="ml-6 mr-4 text-[#D9D9D9]">
										To:{' '}
									</label>
									<div className="relative w-48">
										<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
											<BsCalendar2Date className="w-5 h-5 text-accent" />
										</div>
										<input
											type="date"
											className="date-inp block w-full"
											name="toDate"
											onClick={e => {
												e.target.showPicker();
											}}
										/>
									</div>
								</div>
								<div className="col-span-12 mt-4">
									<label htmlFor="timings">Timings:</label>
									<div className="flex w-full mt-4 items-center">
										{timings.map((timing, index) => (
											<div
												className="px-6 py-1 bg-accent rounded-2xl mx-2"
												key={index}>
												{timing}
											</div>
										))}
										{timingInput === false && (
											<button
												className="px-4 py-1 mx-2 bg-transparent border border-accent rounded-2xl"
												onClick={e => {
													e.preventDefault();
													setTimingInput('');
												}}>
												+
											</button>
										)}
										{timingInput !== false && (
											<input
												className="w-28 inp"
												type="text"
												name="timings"
												value={timingInput}
												onChange={e => {
													setTimingInput(e.target.value);
												}}
											/>
										)}
									</div>
									<hr className="mt-4 border-[#292b2e] mb-6" />
								</div>
								<div className="col-span-12">
									<label htmlFor="location">Locations:</label>

									<div className="flex w-full mt-4 items-center">
										{locations.map((location, index) => (
											<div
												className="px-6 py-1 bg-accent rounded-2xl mx-2"
												key={index}>
												{location}
											</div>
										))}
										{locationInput === false && (
											<button
												className="px-4 py-1 mx-2 bg-transparent border border-accent rounded-2xl"
												onClick={e => {
													e.preventDefault();
													setLocationInput('');
												}}>
												+
											</button>
										)}
										{locationInput !== false && (
											<input
												className="w-28 inp"
												type="text"
												name="location"
												value={locationInput}
												onChange={e => {
													setLocationInput(e.target.value);
												}}
											/>
										)}
									</div>
									<hr className="mt-4 border-[#292b2e] mb-8" />
								</div>
								<div className="col-span-12">
									<label htmlFor="supply">Ticket Supply:</label>
									<div className="flex items-center justify-between">
										<span className="text-sm text-[#585757]">
											Supply is the number of tickets you want to sell
										</span>

										<NumberInput
											value={supply}
											setValue={setSupply}
											buttonClasses="w-8 h-8 text-xs border-accent border rounded-lg hover:bg-accent hover:text-white"
											inputClasses={
												'text-sm font-normal w-12 py-2 rounded-xl mx-2 border border-accent'
											}
										/>
										{/* <input type="number" className="w-32 inp" name="supply" /> */}
									</div>
									<hr className="mt-4 border-[#292b2e] mb-8" />
								</div>
								<div className="col-span-12">
									<label htmlFor="permission">Permission:</label>
									<div className="flex items-center justify-between">
										<span className="text-sm text-[#585757]">
											Ask for permission before trade
										</span>
										<label
											htmlFor="permission"
											className="inline-flex relative items-center mb-4 cursor-pointer">
											<input
												type="checkbox"
												value=""
												id="permission"
												className="sr-only peer"
											/>
											<div className="w-11 h-6 bg-transparent ring-2 ring-gray-300/25 peer-checked:ring-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-[6px] peer-checked:after:bg-accent after:border-gray-300/25 after:border-2 peer-checked:after:border-0 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
										</label>
									</div>
									<hr className="mt-4 border-[#292b2e] mb-8" />
								</div>
								<div className="col-span-12">
									<label htmlFor="status">Status:</label>
									<div className="flex items-center justify-between">
										<span className="text-sm text-[#585757]">
											Visibility in marketplace
										</span>
										<label
											htmlFor="status"
											className="inline-flex relative items-center mb-4 cursor-pointer">
											<input
												type="checkbox"
												value=""
												id="status"
												className="sr-only peer"
											/>
											<div className="w-11 h-6 bg-transparent ring-2 ring-gray-300/25 peer-checked:ring-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-[6px] peer-checked:after:bg-accent after:border-gray-300/25 after:border-2 peer-checked:after:border-0 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
										</label>
									</div>
									<hr className="mt-4 border-[#292b2e] mb-8" />
								</div>
								<div className="col-span-12 mt-4">
									<label htmlFor="payment">Payment:</label>
									<select className="w-full select-inp mt-4" id="payment">
										{paymentTypes.map((type, index) => (
											<option key={index} value={type}>
												{type}
											</option>
										))}
									</select>
								</div>
								<div className="col-span-12 mt-4 flex justify-between">
									<div>
										<label htmlFor="price">Price per ticket: </label>
										<br />
										<div className="relative w-48">
											<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
												$
											</div>
											<input
												className="w-32 date-inp block mt-4"
												type="number"
												id="price"
												style={{ paddingLeft: '2rem' }}
											/>
										</div>
									</div>
									<div className="flex flex-col justify-end">
										<button
											className="w-40 mb-2 bg-accent py-2 px-6 rounded-xl shadow-sm shadow-accent transform hover:scale-110 duration-200"
											type="submit"
											onClick={() => setSuccess(true)}>
											Create
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

export default CreateEvent;
