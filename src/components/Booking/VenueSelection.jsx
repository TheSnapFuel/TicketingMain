import React from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import BookingRow from './BookingRow';
import Cover from './Cover';
import EventDetails from './EventDetails';

function VenueSelection({
	event,
	dates,
	venues,
	timingSelected,
	setTimingSelected,
	dateSelected,
	setDateSelected,
	setStage,
}) {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const {
		img: imgSrc,
		coverImg,
		title,
		genres,
		playbackTimeHr,
		playbackTimeMin,
	} = event;

	const [pickDate, setPickDate] = React.useState(null);

	return (
		<>
			<Cover coverImg={coverImg} />
			<div className="w-full my-2 px-8">
				<EventDetails
					imgSrc={imgSrc}
					title={title}
					genres={genres}
					playbackTimeHr={playbackTimeHr}
					playbackTimeMin={playbackTimeMin}>
					<div className="max-w-128 flex items-center">
						<div className="max-w-96">
							<BookingRow small={true}>
								{dates.map((possibleDate, index) => (
									<label
										htmlFor={possibleDate.toString()}
										className={`min-w-24 h-24 border-2 border-accent rounded-xl flex flex-col items-center justify-center cursor-pointer duration-200 ${
											dateSelected === index ? 'bg-accent border-0' : ''
										} checked:bg-accent`}
										key={`dates-${index}`}>
										<p>{days[possibleDate.getDay()]}</p>
										<p className="text-2xl">{possibleDate.getDate()}</p>
										<p>{months[possibleDate.getMonth()]}</p>
										<input
											type="checkbox"
											className="hidden"
											selected={dateSelected === index}
											id={possibleDate.toString()}
											onChange={e => {
												setDateSelected(index);
												localStorage
												console.log(index);
												setPickDate(null);
											}}
										/>
									</label>
								))}
							</BookingRow>
						</div>
						<label
							htmlFor={'pick-date'}
							className={`w-24 p-2 h-24 border-2 border-accent rounded-xl flex flex-col items-center justify-center cursor-pointer duration-200 ${
								pickDate ? 'bg-accent border-0' : ''
							} checked:bg-accent`}
							key={`pick-date}`}>
							{pickDate ? (
								<>
									<p>{days[pickDate.getDay()]}</p>
									<p className="text-2xl">{pickDate.getDate()}</p>
									<p>{months[pickDate.getMonth()]}</p>
								</>
							) : (
								<p className="text-lg text-center">Pick a Date</p>
							)}

							<input
								type="date"
								id="pick-date"
								className="h-0 w-0 outline-none"
								name="fromDate"
								onClick={e => {
									e.target.showPicker();
								}}
								onChange={e => {
									e.target?.blur();
									if (e.target.value) {
										setPickDate(new Date(e.target.value));
									}
									setDateSelected(-1);
									console.log(e.target.value);
								}}
							/>
						</label>
					</div>
				</EventDetails>
				<br />
				{venues.map((venue, index) => (
					<div
						key={index}
						className="w-full px-6 py-4 border border-opacity-60 border-white rounded-3xl flex min-h-28 mt-6 items-center justify-between">
						<div className="flex items-center py-4">
							<h1 className="text-3xl text-white min-w-56">{venue.title}</h1>
							<div className="flex flex-wrap overflow-auto max-w-192">
								{venue.timings.map((timing, idx) => (
									<label
										key={idx}
										htmlFor={index + timing.toString() + idx}
										className={`flex items-center border border-accent rounded-2xl py-2 px-4 mx-2 my-1 cursor-pointer duration-200 ${
											timingSelected[0] === index && timingSelected[1] === idx
												? 'bg-accent'
												: ''
										} checked:bg-accent w-28 justify-center`}>
										<p className="text-white text-sm text-center w-full">
											{timing}
										</p>
										<input
											type="checkbox"
											className="hidden"
											id={index + timing.toString() + idx}
											onChange={e => {
												const newSelected = [...timingSelected];
												newSelected[0] = index;
												newSelected[1] = idx;
												setTimingSelected(newSelected);
												console.log(newSelected);
												localStorage.setItem("selected", JSON.stringify(newSelected));
											}}
										/>
									</label>
								))}
							</div>
						</div>
						<span className="flex items-center">
							{venue.seats ? (
								<span className="w-2 h-2 bg-accent rounded-full mr-2 mt-1"></span>
							) : (
								<span className="w-2 h-2 bg-red-700 rounded-full mr-2 mt-1"></span>
							)}
							{venue.seats ? 'seats available' : 'sold out'}
						</span>
					</div>
				))}
				<div className="w-full flex justify-end pr-8 my-12">
					<button
						className="bg-accent text-white py-2 border-0 px-4 rounded-lg duration-200 hover:scale-110 transform w-48"
						onClick={() => {
							setStage(2);
						}}>
						Proceed
					</button>
				</div>
			</div>
		</>
	);
}

export default VenueSelection;

