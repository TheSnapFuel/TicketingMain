import Link from 'next/link';
import React from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';

function BookingCard({ img, title, url }) {
	return (
		<Link href={url}>
			<a
				className="h-64 min-w-48 rounded-3xl bg-cover bg-center overflow-hidden transform hover:-translate-y-2 duration-200 shadow-xl mb-4 block"
				style={{
					backgroundImage: `url(${img})`,
					marginLeft: '0.5rem',
					marginRight: '0.5rem',
				}}>
				<div className="relative w-full h-full">
					<div
						className="absolute bottom-0 w-full h-24 z-10"
						style={{
							backdropFilter: 'blur(2rem)',
							webkitBackdropFilter: 'blur(2rem)',
						}}></div>
					<div className="absolute bottom-0 w-full h-24 z-20">
						<div className="relative w-full h-full flex flex-col justify-center items-center">
							<div className="text-lg">{title}</div>
							<div className="flex -mt-1">
								<img
									src="/images/icons/like.svg"
									alt="like"
									className="w-10 h-10"
								/>
								<img
									src="/images/icons/unlike.svg"
									alt="dislike"
									className="w-10 h-10 -ml-1"
								/>
							</div>
							<div className="absolute top-0 right-0 pt-2 pr-2">
								<ImArrowUpRight2 className="opacity-80 hover:opacity-100 transform hover:scale-110 duration-200 cursor-pointer" />
							</div>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
}

export default BookingCard;
