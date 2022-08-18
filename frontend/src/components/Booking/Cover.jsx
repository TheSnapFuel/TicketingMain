import React from 'react';

function Cover({ coverImg }) {
	return (
		<div className="w-full mb-2 p-4">
			<div className="flex relative">
				<div
					className="w-full h-64 bg-cover bg-center rounded-3xl"
					style={{ backgroundImage: `url(${coverImg})` }}></div>
			</div>
		</div>
	);
}

export default Cover;
