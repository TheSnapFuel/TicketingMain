import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

function EventDetails({
	imgSrc,
	title,
	genres,
	playbackTimeHr,
	playbackTimeMin,
	date,
	children,
}) {
	return (
		<div className="flex justify-between items-center">
			<div className="flex">
				<div>
					<img
						src={imgSrc}
						className="w-36 h-48 object-cover rounded-2xl"></img>
				</div>
				<div className="ml-4 flex flex-col opacity-90 justify-center">
					<h1 className="text-3xl mb-2">{title}</h1>
					<span className="flex my-2">
						{genres.map((genre, index) => (
							<span
								key={index}
								className="text-sm px-2 min-w-16 text-center border border-white rounded-full mr-2 opacity-90">
								{genre.toLowerCase()}
							</span>
						))}
					</span>
					<span className="flex my-2 text-lg items-center">
						{/* time icon */}
						<AiOutlineClockCircle className="h-6 w-6 pr-2" />
						{playbackTimeHr}h {playbackTimeMin}m
					</span>
					{date && <p className="text-lg">{date}</p>}
				</div>
			</div>
			{children}
		</div>
	);
}

export default EventDetails;
