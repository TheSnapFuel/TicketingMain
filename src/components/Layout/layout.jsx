import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
import { ThemeContext } from '../../context/ThemeContext';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
	const [theme, setTheme] = useState('');
	useEffect(() => {
		if (window.localStorage.getItem('theme_preference')) {
			setTheme(window.localStorage.getItem('theme_preference'));
		} else {
			// Code for system preference
			// const compStyles = window.getComputedStyle(
			// 	document.querySelector('.themed')
			// );
			// const themePreference =
			// 	compStyles.getPropertyValue('background-color') == 'rgb(255, 255, 255)'
			// 		? 'theme-light'
			// 		: 'theme-dark';
			const themePreference = 'theme-dark';
			window.localStorage.setItem('theme_preference', themePreference);
			setTheme(window.localStorage.getItem('theme_preference'));
		}
	});
	const toggleTheme = () => {
		if (theme === 'theme-light') {
			setTheme('theme-dark');
			window.localStorage.setItem('theme_preference', 'theme-dark');
		} else {
			setTheme('theme-light');
			window.localStorage.setItem('theme_preference', 'theme-light');
		}
	};

	const pageTitle = 'The Snap Fuel';
	const description = "This is Snap Fuel's website.";

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={'bg-primary text-secondary'}>
				<Head>
					<title>{pageTitle}</title>
					<link rel="icon" href="/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<meta property="og:title" content={pageTitle} key="ogtitle" />
					<meta property="og:description" content={description} key="ogdesc" />
					<meta name="description" content={description}></meta>
					<meta name="twitter:card" content="summary" key="twcard" />
					<meta
						property="og:url"
						content={`${process.env.PUBLIC_URL}`}
						key="ogurl"
					/>
					<meta property="og:image" content="/vercel.svg" key="ogimage" />
					<meta
						property="og:image:secure_url"
						content={`${process.env.PUBLIC_URL}/vercel.svg`}
					/>
					<meta property="og:image:type" content="image/webp" />
					<meta property="og:image:width" content="512" />
					<meta property="og:image:height" content="512" />
					<meta property="og:image:alt" content="Logo" />
					<meta
						property="og:site_name"
						content="The Snap Fuel"
						key="ogsitename"
					/>
				</Head>
				<div className="theme-dark hidden"></div>
				<Sidebar />
				<div
					id="content"
					className="bg-primary ml-16 transition-all duration-500 min-h-screen">
					{children}
				</div>
				{/* <Footer /> */}
			</div>
		</ThemeContext.Provider>
	);
}
