import Link from 'next/link';
import React from 'react';
import styles from './Marketplace.module.css';

function MarketCard({ url, title, price, description, img: imgUrl }) {
	return (
		<Link href={url}>
			<a
				className={`w-72 min-w-72 mx-2 my-2 h-64 flex flex-col rounded-xl ${styles['card-bg']} overflow-hidden hover:-translate-y-2 duration-200 relative`}>
				<div className="h-40">
					<img src={imgUrl} className="w-full object-cover h-40 shadow-lg" />
				</div>
				<div className="py-2 px-4">
					<div className="flex justify-between mb-1 items-center">
						<h2 className="text-lg">{title}</h2>
						<span className="text-accent">{price}</span>
					</div>
					<p className="text-[#d9d9d9] text-xs font-light">{description}</p>
				</div>
				<div className="absolute -bottom-5 w-full z-20">
					<img
						src="/images/ItemBottomDesign.svg"
						alt="item-bottom-design"
						className="mx-auto"
					/>
				</div>
				<div className="absolute -top-5 w-full z-20">
					<img
						src="/images/ItemBottomDesign.svg"
						alt="item-bottom-design"
						className="mx-auto"
					/>
				</div>
			</a>
		</Link>
	);
}

export default MarketCard;
