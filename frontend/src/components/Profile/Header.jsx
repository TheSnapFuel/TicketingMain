import React from 'react';
import { TiMessages } from 'react-icons/ti';
import { IoMdNotificationsOutline } from 'react-icons/io';
import ProfileDropDown from './ProfileDropDown';

function Header({ title }) {
	const iconStyle = {
		fontSize: '24px',
		cursor: 'pointer',
	};
	const [open, setOpen] = React.useState(false);
	const drop = React.useRef(null);
	function handleClick(e) {
		if (!e.target.closest(`.${drop.current.className}`) && open) {
			setOpen(false);
		}
	}
	React.useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
	return (
		<div className="mx-4 flex justify-between z-30 relative">
			<div className="my-auto">
				<h1 className="text-3xl text-secondary">{title}</h1>
			</div>
			<div className="flex align-middle">
				<div className="mx-2 my-auto hover:text-accent transition duration-200 transform hover:scale-110">
					<TiMessages style={iconStyle} />
				</div>

				<div className="mx-2 my-auto hover:text-accent transition duration-200 transform hover:scale-110">
					<IoMdNotificationsOutline style={iconStyle} />
				</div>

				<div className="mx-2 my-auto transition duration-200 transform cursor-pointer">
					<div
						className="dropdown"
						ref={drop}
						style={{
							position: 'relative',
							margin: '16px',
							width: 'auto',
							display: 'inline-block',
						}}>
						<div onClick={() => setOpen(open => !open)}>
							<img
								src="/images/profile.png"
								className="w-16 h-16 rounded-lg shadow-sm"
							/>
						</div>
						{open && <ProfileDropDown setOpen={setOpen} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
