import React from 'react';

function NFTSection({ title, children }) {
	return (
		<section>
			<h2 className="text-xl font-light mb-2">{title}</h2>
			<div className="bg-[#272a2d] rounded-2xl w-full overflow-hidden">
				{children}
			</div>
		</section>
	);
}

export default NFTSection;
