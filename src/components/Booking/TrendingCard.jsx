import Link from 'next/link';
import React from 'react';

function TrendingCard({ index, img, url }) {
	return (
		<Link href={url}>
			<a
				className="relative h-64 min-w-48 rounded-3xl bg-cover bg-center transform hover:-translate-y-2 duration-200 shadow-xl mb-4 block"
				style={{
					backgroundImage: `url(${img})`,
					marginLeft: '2rem',
					marginRight: '0rem',
					zIndex: 50 + -index,
				}}>
				<span
					className="absolute bottom-0 -left-12 text-9xl font-black text-[#17181e]"
					style={{
						filter: 'drop-shadow(0px 0px 2px rgba(34, 166, 179, 1))',
					}}>
					{index}
				</span>
			</a>
		</Link>
	);
}

export default TrendingCard;
