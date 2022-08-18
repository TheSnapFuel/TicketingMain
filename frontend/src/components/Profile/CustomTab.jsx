import React from 'react';
import { TabGroup } from '../../utils/TabGroup';

function CustomTab({
	index,
	text,
	unreadNotifications,
	className,
	activeClassName,
	inactiveClassName,
	children,
}) {
	const internal = unreadNotifications ? (
		<span>
			{text} <span className="opacity-60">({unreadNotifications})</span>
		</span>
	) : (
		text
	);
	const tabDisplay = children || internal;

	return (
		<TabGroup.Tab
			index={index}
			className={`h-12 px-12 text-white opacity-80 hover:opacity-100 duration-200 ${
				className ?? ''
			}`}
			activeClassName={`border-b-4 border-b-accent opacity-100 ${
				activeClassName ?? ''
			}`}
			inactiveClassName={`${inactiveClassName ?? ''}`}>
			{tabDisplay}
		</TabGroup.Tab>
	);
}

export default CustomTab;
