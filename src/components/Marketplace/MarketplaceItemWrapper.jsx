import React from 'react';

function MarketplaceItemWrapper({ items }) {
	return (
		<div className="flex flex-wrap my-8 justify-center items-center">
			{items}
		</div>
	);
}

export default MarketplaceItemWrapper;
