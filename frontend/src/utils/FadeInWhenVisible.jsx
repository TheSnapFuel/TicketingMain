import React from 'react';
import AnimateWhenVisible from './AnimateWhenVisible';

export default function FadeInWhenVisible({
	children,
	resetAnimation,
	classNames = '',
}) {
	const variants = {
		visible: {
			opacity: 1,
			scale: 1,
			transition: { delay: 0.1, duration: 0.2 },
		},
		hidden: { opacity: 0, scale: 0.75 },
	};
	return (
		<AnimateWhenVisible
			variants={variants}
			resetAnimation={resetAnimation}
			classNames={classNames}>
			{children}
		</AnimateWhenVisible>
	);
}
