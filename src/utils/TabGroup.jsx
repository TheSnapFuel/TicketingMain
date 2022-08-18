import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

import { useUID } from 'react-uid';

const Direction = {
	HORIZONTAL: 'HORIZONTAL',
	VERTICAL: 'VERTICAL',
};

let TabContext = createContext({
	id: 'Please provide a unique id',
	activeTab: 0,
	numTabs: 0,
	setActiveTab: () => {},
	direction: Direction.HORIZONTAL,
});

export function useTab(index) {
	let { activeTab } = useContext(TabContext);

	return {
		isActive: activeTab === index,
	};
}

export function TabGroup({
	initialActiveTab = 0,
	numTabs,
	direction = Direction.HORIZONTAL,
	children,
}) {
	let id = useUID();
	let [activeTab, setActiveTab] = useState(initialActiveTab);

	let value = useMemo(
		() => ({ id, activeTab, setActiveTab, numTabs, direction }),
		[activeTab, setActiveTab, numTabs, direction, id]
	);

	return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

export function Tab({
	index,
	className,
	activeClassName,
	inactiveClassName,
	trigger = 'click',
	...props
}) {
	let { id, activeTab, setActiveTab } = useContext(TabContext);
	let tabRef = useRef();

	useEffect(() => {
		if (activeTab === index) {
			tabRef.current?.focus({ preventScroll: true });
		}
	}, [activeTab, index]);

	let calculatedClassName = useMemo(() => {
		return [
			className,
			activeTab === index ? activeClassName : inactiveClassName,
		].join(' ');
	}, [className, activeClassName, inactiveClassName, activeTab, index]);

	let interactionProps = useMemo(() => {
		let interactions = {};

		interactions.onClick = () => setActiveTab(index);

		if (trigger === 'hover') {
			interactions.onMouseEnter = () => setActiveTab(index);
		}

		return interactions;
	}, [trigger, setActiveTab, index]);

	return (
		<button
			ref={tabRef}
			role="tab"
			aria-controls={`${id}-${index}`}
			aria-selected={activeTab === index}
			tabIndex={activeTab === index ? 0 : -1}
			className={calculatedClassName}
			{...interactionProps}
			{...props}
		/>
	);
}

export function TabPanel({
	as: Component = 'div',
	index,
	className,
	activeClassName,
	inactiveClassName,
	...props
}) {
	let { id, activeTab } = useContext(TabContext);

	let calculatedClassName = useMemo(() => {
		return [
			className,
			activeTab === index ? activeClassName : inactiveClassName,
		].join(' ');
	}, [className, activeClassName, inactiveClassName, activeTab, index]);

	return (
		<Component
			style={{
				...props.style,
				visibility: activeTab === index ? 'visible' : 'hidden',
			}}
			id={`${id}-${index}`}
			role="tabpanel"
			className={calculatedClassName}
			{...props}
		/>
	);
}

export function TabList({ as: Component = 'div', ...props }) {
	let tabListRef = useRef();
	let { setActiveTab, numTabs, activeTab, direction } = useContext(TabContext);

	let handleKeyUp = useCallback(
		e => {
			let actions = {
				End: () => {
					setActiveTab(numTabs - 1);
				},
				Home: () => {
					setActiveTab(0);
				},
			};

			if (direction === Direction.HORIZONTAL) {
				actions.ArrowLeft = () => {
					let previous = activeTab - 1 >= 0 ? activeTab - 1 : numTabs - 1;
					setActiveTab(previous);
				};

				actions.ArrowRight = () => {
					let next = activeTab + 1 < numTabs ? activeTab + 1 : 0;
					setActiveTab(next);
				};
			}

			if (direction === Direction.VERTICAL) {
				actions.ArrowUp = () => {
					let previous = activeTab - 1 >= 0 ? activeTab - 1 : numTabs - 1;
					setActiveTab(previous);
				};

				actions.ArrowDown = () => {
					let next = activeTab + 1 < numTabs ? activeTab + 1 : 0;
					setActiveTab(next);
				};
			}

			let action = actions[e.key];

			if (action) {
				e.preventDefault();
				action();
			}
		},
		[setActiveTab, activeTab, numTabs, direction]
	);

	useEffect(() => {
		tabListRef.current.addEventListener('keyup', handleKeyUp);

		return () => tabListRef?.current?.removeEventListener('keyup', handleKeyUp);
	}, [handleKeyUp]);

	// @ts-ignore
	return <Component ref={tabListRef} role="tablist" {...props} />;
}

TabGroup.Tab = Tab;
TabGroup.TabPanel = TabPanel;
TabGroup.TabList = TabList;
TabGroup.useTab = useTab;

TabGroup.direction = Direction;
