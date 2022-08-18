import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import ItemCard from './ItemCard';
import styles from '../../components/Booking/Booking.module.scss';

const ProfileItems = () => {
	const rowRef = useRef(null);
	const [isMoved, setIsMoved] = useState(false);

	const items = [
		{
			index: 1,
			img: '/images/item1.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹1,000',
			seats: '1',
		},
		{
			index: 2,
			img: '/images/item2.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹656',
			seats: '23',
		},
		{
			index: 3,
			img: '/images/item3.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹100',
			seats: '34',
		},
		{
			index: 4,
			img: '/images/item4.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '₹2999',
			seats: '10',
		},
	];

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
		<div className="my-2 space-y-0.5 md:space-y-2 overflow-x-hidden">
			<div className="group px-12 relative md:-ml-2 overflow-x-hidden">
				<ChevronLeftIcon
					className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
					onClick={() => handleClick('left')}
				/>

				<div
					ref={rowRef}
					className={`flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 ${styles['scroll-hide']}`}>
					{items.map(item => (
						<ItemCard key={item.index} {...item} />
					))}
					{items.map(item => (
						<ItemCard key={item.index + 4} {...item} />
					))}
				</div>

				<ChevronRightIcon
					className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};

export default ProfileItems;
