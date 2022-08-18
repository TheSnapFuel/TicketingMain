import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';
import Scrollspy from 'react-scrollspy';
import BookingRow from '../../components/Booking/BookingRow';
import Header from '../../components/Profile/Header';
import styles from '../../components/Booking/Booking.module.scss';
import BookingCard from '../../components/Booking/BookingCard';
import TrendingCard from '../../components/Booking/TrendingCard';
import MarketCard from '../../components/Marketplace/MarketCard';
import { TabGroup } from '../../utils/TabGroup';
import CustomTab from '../../components/Profile/CustomTab';
import CustomTabPanel from '../../components/Profile/CustomTabPanel';
import MarketplaceItemWrapper from '../../components/Marketplace/MarketplaceItemWrapper';

function Marketplace() {
	const iconStyle = {
		fontSize: '24px',
		cursor: 'pointer',
	};
	const itemData = [
		{
			index: 1,
			img: '/images/movie.jpg',
			title: 'Moonlight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '1',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			index: 2,
			img: '/images/item2.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '23',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			index: 3,
			img: '/images/item3.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '34',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			index: 4,
			img: '/images/item4.png',
			title: 'MoonKnight',
			qr: '/images/qr.png',
			price: '3.4$',
			seats: '10',
			url: '/marketplace/1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	];

	const items = (
		<>
			{itemData.map(item => (
				<MarketCard key={item.index} {...item} />
			))}
			{itemData.map(item => (
				<MarketCard key={item.index + 4} {...item} />
			))}
			{itemData.map(item => (
				<MarketCard key={item.index + 8} {...item} />
			))}
			{itemData.map(item => (
				<MarketCard key={item.index + 12} {...item} />
			))}
			{itemData.map(item => (
				<MarketCard key={item.index + 16} {...item} />
			))}
		</>
	);

	return (
		<div className="p-4 relative">
			<div className="my-4 mx-8">
				<Header title="Marketplace" />
				<div className="w-full flex relative my-4 p-4">
					<div className="max-w-2xl mx-auto flex items-center">
						<form className="flex items-center">
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative w-80">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg
										className="w-5 h-5 text-[#D9D9D9]"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clipRule="evenodd"></path>
									</svg>
								</div>
								<input
									type="text"
									id="simple-search"
									className="bg-[#1D1F21] text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-[#585757]"
									placeholder="Type here to search the ticket"
								/>
							</div>
						</form>
						<TiMessages
							style={iconStyle}
							className="ml-2 text-[#828282] hover:text-white duration-200"
						/>
						<IoMdNotificationsOutline
							style={iconStyle}
							className="ml-2 text-[#828282] hover:text-white duration-200"
						/>
					</div>
				</div>
				<div className="w-full mt-12 align-middle relative">
					<TabGroup numTabs={5} direction={TabGroup.direction.HORIZONTAL}>
						<TabGroup.TabList className="ml-2 text-center sticky top-0 z-50 bg-[#17181e] border-0 border-b-2 border-gray-800">
							<CustomTab index={0} text="Trending" />
							<CustomTab index={1} text="Explore" />
							<CustomTab index={2} text="Recent" />
							<CustomTab index={3} text="Collectibles" />
							<CustomTab index={4} text="Limited" />
						</TabGroup.TabList>
						<CustomTabPanel index={0}>
							<MarketplaceItemWrapper items={items} />
						</CustomTabPanel>
						<CustomTabPanel index={1}>
							<MarketplaceItemWrapper items={items} />
						</CustomTabPanel>
						<CustomTabPanel index={2}>
							<MarketplaceItemWrapper items={items} />
						</CustomTabPanel>
						<CustomTabPanel index={3}>
							<MarketplaceItemWrapper items={items} />
						</CustomTabPanel>
						<CustomTabPanel index={4}>
							<MarketplaceItemWrapper items={items} />
						</CustomTabPanel>
					</TabGroup>
				</div>
			</div>
		</div>
	);
}

export default Marketplace;
