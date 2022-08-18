import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimateWhenVisible({
	children,
	variants,
	resetAnimation = false,
	classNames = '',
}) {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	const [animated, setAnimated] = useState(false);
	useEffect(() => {
		if (animated && !resetAnimation) {
			return;
		}
		if (inView) {
			controls.start('visible');
			setAnimated(true);
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={
				variants || {
					visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
					hidden: { opacity: 0, scale: 0 },
				}
			}
			className={classNames}>
			{children}
		</motion.div>
	);
}
