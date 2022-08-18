import React from 'react';

function NumberInput({ value, setValue, buttonClasses, inputClasses }) {
	return (
		<div className="flex items-center">
			<button
				className={`${
					buttonClasses
						? buttonClasses
						: 'w-16 h-16 text-4xl pb-1 border-white border-2 rounded-full hover:border-accent hover:text-accent'
				} duration-200`}
				onClick={e => {
					setValue(value - 1);
				}}
				type="button">
				-
			</button>
			<input
				type="number"
				className={`${
					inputClasses
						? inputClasses
						: 'text-7xl font-bold w-32 p-4 rounded-3xl mx-4 border-2 border-white'
				} bg-transparent text-center focus:border-accent focus:outline-none`}
				value={value}
				onChange={e => {
					if (parseInt(e.target.value) || e.target.value === '') {
						setValue(parseInt(e.target.value));
					}
				}}
			/>
			<button
				className={`${
					buttonClasses
						? buttonClasses
						: 'w-16 h-16 text-4xl pb-1 border-white border-2 rounded-full hover:border-accent hover:text-accent'
				} duration-200`}
				onClick={() => {
					setValue(value + 1);
				}}
				type="button">
				+
			</button>
		</div>
	);
}

export default NumberInput;
