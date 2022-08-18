import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import styles from './Booking.module.scss';

const BookingRow = ({ title, items, sec, small, children }) => {
	const rowRef = useRef(null);
	const [isMoved, setIsMoved] = useState(false);

	const handleClick = direction => {
		setIsMoved(true);

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;
			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<section
			id={`section-${sec ?? ''}`}
			className={`my-2 ${
				small ? '' : 'h-80'
			} space-y-0.5 md:space-y-2 scroll-mt-20`}>
			<h2 className="pl-12 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
				{title}
			</h2>
			<div className="group px-12 relative md:-ml-2">
				<ChevronLeftIcon
					className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
					onClick={() => handleClick('left')}
				/>

				<div
					ref={rowRef}
					className={`flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 relative ${styles['scroll-hide']}`}>
					{items ?? children}
				</div>

				<ChevronRightIcon
					className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
					onClick={() => handleClick('right')}
				/>
			</div>
		</section>
	);
};

export default BookingRow;