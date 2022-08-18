import React from 'react';
import styles from './Booking.module.scss';

function BookingModal({ children }) {
	return (
		<div className="flex items-center justify-center w-full h-full -mt-12 p-4">
			<div className={`${styles['booking-modal']} h-96 w-1/2 p-4 rounded-3xl`}>
				{children}
			</div>
		</div>
	);
}

export default BookingModal;
