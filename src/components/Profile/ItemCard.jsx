import styles from './ItemCard.module.css';

function ItemCard(props) {
	return (
		<div
			className={`${styles['item-card']} mr-3 min-w-56 h-64 rounded-xl overflow-hidden relative`}>
			<div className="py-2 px-3 w-full relative">
				<div
					className="h-24 w-full shadow-xl bg-cover bg-center rounded-2xl"
					style={{ backgroundImage: `url(${props.img})` }}></div>
			</div>
			<div className="py-2 px-3 flex">
				<div className="z-20">
					<img src={props.qr} alt="qr" className="h-20 min-w-20 z-20" />
				</div>
				<div
					className={`${styles['highlight']} absolute top-28 left-24 w-20 h-20 z-10`}></div>
				<div className={`pl-2 flex flex-col text-xs} z-20`}>
					<div className="text-md">{props.title}</div>
					<p className="w-full">
						<span className="opacity-80 text-sm">Price:</span>&emsp;
						{props.price}
					</p>
					<p className="w-full">
						<span className="opacity-80 text-sm">Seats:</span>&emsp;
						{props.seats}
					</p>
					{/* <p className="w-full opacity-80">Seats:&emsp;{props.seats}</p> */}
				</div>
			</div>
			<div className="absolute -bottom-3 w-full z-20">
				<img
					src="/images/ItemBottomDesign.svg"
					alt="item-bottom-design"
					className="mx-auto"
				/>
			</div>
		</div>
	);
}

export default ItemCard;
