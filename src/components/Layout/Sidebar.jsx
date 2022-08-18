import Link from 'next/link';
import { useEffect } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
	const iconStyles = {
		color: 'inherit',
		opacity: 0.8,
		width: '1.5rem',
		height: '1.5rem',
	};
	const links = [
		{
			title: 'Home',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 39 39"
					fill="none"
					style={iconStyles}>
					<path
						d="M3.63598 13.596L2.99743 12.8264L3.63598 13.596ZM14.6033 4.49595L13.9647 3.72637L13.9647 3.72637L14.6033 4.49595ZM24.2331 4.49595L23.5945 5.26553L24.2331 4.49595ZM35.2004 13.596L34.5618 14.3655L35.2004 13.596ZM18.1216 2.10368L18.3916 3.06654L18.1216 2.10368ZM20.7143 2.10368L20.4443 3.06654L20.7143 2.10368ZM1.28761 16.5385L2.25168 16.8042L1.28761 16.5385ZM1.92792 15.2001L1.1148 14.618H1.1148L1.92792 15.2001ZM1.48701 34.6592L0.570617 35.0595L1.48701 34.6592ZM14.5002 34.6592L13.5838 34.2589L14.5002 34.6592ZM12.0273 37.0044L12.3929 37.9352L12.0273 37.0044ZM24.3355 34.6592L23.4191 35.0595L24.3355 34.6592ZM37.3487 34.6592L36.4323 34.2589L37.3487 34.6592ZM34.8758 37.0044L35.2414 37.9352L34.8758 37.0044ZM37.5484 16.5385L36.5843 16.8042L37.5484 16.5385ZM36.9079 15.2001L37.7211 14.618L36.9079 15.2001ZM36.6967 18.8139V30.8344H38.6967V18.8139H36.6967ZM24.9876 30.8342V28.6676H22.9876V30.8342H24.9876ZM13.8483 28.6676V30.8342H15.8483V28.6676H13.8483ZM2.13916 30.8344V18.8139H0.13916V30.8344H2.13916ZM4.27453 14.3655L15.2418 5.26553L13.9647 3.72637L2.99743 12.8264L4.27453 14.3655ZM23.5945 5.26553L34.5618 14.3655L35.8389 12.8264L24.8716 3.72637L23.5945 5.26553ZM15.2418 5.26553C16.1064 4.54817 16.7124 4.04612 17.2207 3.68565C17.7181 3.33285 18.0648 3.15817 18.3916 3.06654L17.8516 1.14082C17.2184 1.31838 16.6589 1.63211 16.0636 2.05429C15.4792 2.46879 14.806 3.02829 13.9647 3.72637L15.2418 5.26553ZM24.8716 3.72637C24.0303 3.02824 23.357 2.46875 22.7724 2.05423C22.177 1.63206 21.6175 1.31837 20.9843 1.14082L20.4443 3.06654C20.7711 3.15818 21.118 3.33291 21.6155 3.6857C22.1239 4.04616 22.73 4.54821 23.5945 5.26553L24.8716 3.72637ZM18.3916 3.06654C19.0608 2.87886 19.7751 2.87886 20.4443 3.06654L20.9843 1.14082C19.9619 0.854101 18.874 0.854101 17.8516 1.14082L18.3916 3.06654ZM2.13916 18.8139C2.13916 17.6012 2.14754 17.1821 2.25168 16.8042L0.323542 16.2729C0.130782 16.9724 0.13916 17.711 0.13916 18.8139H2.13916ZM2.99743 12.8264C2.12014 13.5543 1.53752 14.0275 1.1148 14.618L2.74105 15.7822C2.97791 15.4513 3.3142 15.1624 4.27453 14.3655L2.99743 12.8264ZM2.25168 16.8042C2.35155 16.4417 2.51648 16.0959 2.74105 15.7822L1.1148 14.618C0.754855 15.1208 0.486779 15.6805 0.323542 16.2729L2.25168 16.8042ZM7.99423 36.3343C6.91665 36.3343 6.15596 36.3338 5.55846 36.2951C4.96898 36.257 4.60907 36.1847 4.32623 36.0736L3.59504 37.9352C4.15198 38.1539 4.74426 38.2466 5.42933 38.291C6.10639 38.3348 6.94261 38.3343 7.99423 38.3343V36.3343ZM0.13916 30.8344C0.13916 31.8295 0.138558 32.6286 0.18522 33.2771C0.232608 33.9357 0.332397 34.5141 0.570617 35.0595L2.4034 34.2589C2.29377 34.0079 2.21964 33.6835 2.18006 33.1336C2.13976 32.5735 2.13916 31.8584 2.13916 30.8344H0.13916ZM4.32623 36.0736C3.44244 35.7265 2.75661 35.0675 2.4034 34.2589L0.570617 35.0595C1.145 36.3744 2.23943 37.4027 3.59504 37.9352L4.32623 36.0736ZM13.8483 30.8342C13.8483 31.8581 13.8476 32.5733 13.8072 33.1334C13.7676 33.6834 13.6934 34.0079 13.5838 34.2589L15.4166 35.0595C15.6548 34.5142 15.7546 33.9357 15.8021 33.2771C15.8488 32.6285 15.8483 31.8294 15.8483 30.8342H13.8483ZM7.99423 38.3343C9.04586 38.3343 9.88195 38.3348 10.5589 38.291C11.2439 38.2466 11.836 38.1539 12.3929 37.9352L11.6617 36.0736C11.3788 36.1848 11.019 36.257 10.4297 36.2951C9.83237 36.3338 9.07182 36.3343 7.99423 36.3343V38.3343ZM13.5838 34.2589C13.2304 35.0678 12.5452 35.7266 11.6617 36.0736L12.3929 37.9352C13.7488 37.4026 14.8423 36.3741 15.4166 35.0595L13.5838 34.2589ZM19.4179 23.3342C16.3926 23.3342 13.8483 25.6727 13.8483 28.6676H15.8483C15.8483 26.876 17.3958 25.3342 19.4179 25.3342V23.3342ZM24.9876 28.6676C24.9876 25.6727 22.4433 23.3342 19.4179 23.3342V25.3342C21.4401 25.3342 22.9876 26.876 22.9876 28.6676H24.9876ZM30.8427 36.3343C29.7651 36.3343 29.0044 36.3338 28.4069 36.2951C27.8175 36.257 27.4576 36.1847 27.1747 36.0736L26.4435 37.9352C27.0005 38.1539 27.5927 38.2466 28.2778 38.291C28.9549 38.3348 29.7911 38.3343 30.8427 38.3343V36.3343ZM22.9876 30.8342C22.9876 31.8293 22.987 32.6285 23.0337 33.277C23.0811 33.9356 23.1809 34.5141 23.4191 35.0595L25.2519 34.2589C25.1423 34.0079 25.0681 33.6835 25.0285 33.1335C24.9882 32.5734 24.9876 31.8582 24.9876 30.8342H22.9876ZM27.1747 36.0736C26.2909 35.7265 25.6051 35.0675 25.2519 34.2589L23.4191 35.0595C23.9935 36.3744 25.0879 37.4027 26.4435 37.9352L27.1747 36.0736ZM36.6967 30.8344C36.6967 31.8583 36.6961 32.5734 36.6557 33.1335C36.6161 33.6834 36.5419 34.0079 36.4323 34.2589L38.265 35.0595C38.5032 34.5142 38.6031 33.9358 38.6506 33.2772C38.6973 32.6287 38.6967 31.8296 38.6967 30.8344H36.6967ZM30.8427 38.3343C31.8943 38.3343 32.7304 38.3348 33.4074 38.291C34.0924 38.2466 34.6845 38.1539 35.2414 37.9352L34.5102 36.0736C34.2273 36.1848 33.8675 36.257 33.2782 36.2951C32.6809 36.3338 31.9203 36.3343 30.8427 36.3343V38.3343ZM36.4323 34.2589C36.0789 35.0678 35.3937 35.7266 34.5102 36.0736L35.2414 37.9352C36.5973 37.4026 37.6908 36.3741 38.265 35.0595L36.4323 34.2589ZM38.6967 18.8139C38.6967 17.7112 38.7052 16.9724 38.5124 16.2729L36.5843 16.8042C36.6884 17.1821 36.6967 17.6012 36.6967 18.8139H38.6967ZM34.5618 14.3655C35.5218 15.162 35.8579 15.4512 36.0948 15.7822L37.7211 14.618C37.2984 14.0276 36.7166 13.5546 35.8389 12.8264L34.5618 14.3655ZM38.5124 16.2729C38.3492 15.6803 38.0809 15.1207 37.7211 14.618L36.0948 15.7822C36.3195 16.096 36.4845 16.4419 36.5843 16.8042L38.5124 16.2729Z"
						fill="currentColor"
					/>
				</svg>
			),
			href: '/profile',
		},
		{
			title: 'Marketplace',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					style={iconStyles}
					viewBox="0 0 44 42"
					fill="none">
					<path
						d="M1.85449 0.5C1.30221 0.5 0.854492 0.947715 0.854492 1.5C0.854492 2.05228 1.30221 2.5 1.85449 2.5V0.5ZM6.06272 4.3374L5.08115 4.5285L6.06272 4.3374ZM10.994 29.6668L10.0124 29.8579C10.1039 30.3277 10.5154 30.6668 10.994 30.6668L10.994 29.6668ZM4.53339 1.6852L4.14657 2.60736L4.53339 1.6852ZM5.49597 2.44501L4.68442 3.02929L5.49597 2.44501ZM7.56661 7C7.01433 7 6.56661 7.44772 6.56661 8C6.56661 8.55229 7.01433 9 7.56661 9V7ZM41.9484 12.2461L40.9768 12.0096V12.0096L41.9484 12.2461ZM38.363 26.9794L39.3346 27.2158L38.363 26.9794ZM34.8008 29.6667V28.6667H34.8008L34.8008 29.6667ZM37.7382 28.7765L38.531 29.386L37.7382 28.7765ZM36.7889 29.4929L36.4139 28.5659L36.7889 29.4929ZM41.2819 8.30749L40.7883 9.17721L41.2819 8.30749ZM42.284 9.50069L41.3375 9.82318L42.284 9.50069ZM36.1272 39.5C35.3669 39.5 34.8424 38.9283 34.8424 38.3333H32.8424C32.8424 40.1316 34.3638 41.5 36.1272 41.5V39.5ZM37.4121 38.3333C37.4121 38.9283 36.8875 39.5 36.1272 39.5V41.5C37.8907 41.5 39.4121 40.1316 39.4121 38.3333H37.4121ZM36.1272 37.1667C36.8875 37.1667 37.4121 37.7384 37.4121 38.3333H39.4121C39.4121 36.5351 37.8907 35.1667 36.1272 35.1667V37.1667ZM36.1272 35.1667C34.3638 35.1667 32.8424 36.5351 32.8424 38.3333H34.8424C34.8424 37.7384 35.3669 37.1667 36.1272 37.1667V35.1667ZM13.2787 39.5C12.5184 39.5 11.9939 38.9283 11.9939 38.3333H9.99389C9.99389 40.1316 11.5153 41.5 13.2787 41.5V39.5ZM14.5636 38.3333C14.5636 38.9283 14.039 39.5 13.2787 39.5V41.5C15.0422 41.5 16.5636 40.1316 16.5636 38.3333H14.5636ZM13.2787 37.1667C14.039 37.1667 14.5636 37.7384 14.5636 38.3333H16.5636C16.5636 36.5351 15.0422 35.1667 13.2787 35.1667V37.1667ZM13.2787 35.1667C11.5153 35.1667 9.99389 36.5351 9.99389 38.3333H11.9939C11.9939 37.7384 12.5184 37.1667 13.2787 37.1667V35.1667ZM1.85449 2.5H2.46762V0.5H1.85449V2.5ZM5.08115 4.5285L10.0124 29.8579L11.9755 29.4757L7.04429 4.14631L5.08115 4.5285ZM2.46762 2.5C3.02298 2.5 3.3877 2.50058 3.67003 2.52064C3.94108 2.53989 4.06628 2.57368 4.14657 2.60736L4.9202 0.763044C4.55898 0.611523 4.19255 0.552712 3.81173 0.525663C3.44218 0.499416 2.99478 0.5 2.46762 0.5V2.5ZM7.04429 4.14631C6.94903 3.65698 6.86735 3.23339 6.77136 2.88723C6.67157 2.52736 6.53903 2.18229 6.30752 1.86073L4.68442 3.02929C4.72512 3.08582 4.77769 3.18222 4.84409 3.42166C4.91429 3.67481 4.97988 4.00836 5.08115 4.5285L7.04429 4.14631ZM4.14657 2.60736C4.37065 2.70135 4.55515 2.84974 4.68442 3.02929L6.30752 1.86073C5.95678 1.37355 5.47467 0.995627 4.9202 0.763044L4.14657 2.60736ZM7.56661 9H38.3863V7H7.56661V9ZM40.9768 12.0096L37.3913 26.7429L39.3346 27.2158L42.9201 12.4825L40.9768 12.0096ZM34.8008 28.6667L10.994 28.6668L10.994 30.6668L34.8008 30.6667L34.8008 28.6667ZM37.3913 26.7429C37.271 27.2376 37.1934 27.554 37.1153 27.7941C37.0416 28.0206 36.9874 28.1124 36.9455 28.1669L38.531 29.386C38.7641 29.0827 38.9056 28.7557 39.0171 28.413C39.1242 28.0838 39.2215 27.6806 39.3346 27.2158L37.3913 26.7429ZM34.8008 30.6667C35.7483 30.6667 36.5096 30.6846 37.1639 30.4199L36.4139 28.5659C36.2091 28.6487 35.9301 28.6667 34.8008 28.6667V30.6667ZM36.9455 28.1669C36.814 28.3379 36.632 28.4777 36.4139 28.5659L37.1639 30.4199C37.7036 30.2016 38.1771 29.8463 38.531 29.386L36.9455 28.1669ZM38.3863 9C39.1885 9 39.7278 9.00082 40.1363 9.03496C40.5386 9.06858 40.7018 9.1281 40.7883 9.17721L41.7755 7.43778C41.3202 7.1794 40.8205 7.08517 40.3029 7.04191C39.7915 6.99918 39.1539 7 38.3863 7V9ZM42.9201 12.4825C43.092 11.776 43.2383 11.1794 43.3107 10.6892C43.3844 10.1901 43.4023 9.68224 43.2306 9.17821L41.3375 9.82318C41.3599 9.88895 41.3865 10.0285 41.3321 10.3971C41.2764 10.7744 41.1579 11.2656 40.9768 12.0096L42.9201 12.4825ZM40.7883 9.17721C41.0597 9.33121 41.2496 9.56519 41.3375 9.82318L43.2306 9.17821C42.9781 8.4371 42.4542 7.82294 41.7755 7.43778L40.7883 9.17721Z"
						fill="currentColor"
					/>
				</svg>
			),
			href: '/marketplace',
		},
		{
			title: 'Booking',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					style={iconStyles}
					viewBox="0 0 44 38"
					fill="none">
					<path
						d="M31.5575 9.33463C31.0052 9.33463 30.5575 9.78235 30.5575 10.3346C30.5575 10.8869 31.0052 11.3346 31.5575 11.3346V9.33463ZM42.9818 36.3346L42.363 37.1202C42.6639 37.3572 43.0737 37.4015 43.4183 37.2343C43.763 37.0671 43.9818 36.7177 43.9818 36.3346H42.9818ZM35.3652 30.3348L34.7464 31.1203L34.7464 31.1203L35.3652 30.3348ZM14.2787 21.168C14.2787 20.6157 13.831 20.168 13.2787 20.168C12.7264 20.168 12.2787 20.6157 12.2787 21.168H14.2787ZM9.47103 21.6681L10.0898 22.4536L10.0899 22.4536L9.47103 21.6681ZM1.85449 27.668H0.854492C0.854492 28.0511 1.0733 28.4005 1.41792 28.5677C1.76254 28.7349 2.1724 28.6906 2.4733 28.4536L1.85449 27.668ZM31.5575 11.3346H40.6969V9.33463H31.5575V11.3346ZM40.6969 11.3346C41.4572 11.3346 41.9818 11.9063 41.9818 12.5013H43.9818C43.9818 10.703 42.4604 9.33463 40.6969 9.33463V11.3346ZM41.9818 12.5013V36.3346H43.9818V12.5013H41.9818ZM43.6006 35.5491L35.984 29.5492L34.7464 31.1203L42.363 37.1202L43.6006 35.5491ZM35.9841 29.5493C35.3938 29.0842 34.659 28.8346 33.906 28.8346V30.8346C34.2195 30.8346 34.5162 30.939 34.7464 31.1203L35.9841 29.5493ZM33.906 28.8346H15.5636V30.8346H33.906V28.8346ZM15.5636 28.8346C14.8033 28.8346 14.2787 28.2629 14.2787 27.668H12.2787C12.2787 29.4662 13.8001 30.8346 15.5636 30.8346V28.8346ZM14.2787 27.668V21.168H12.2787V27.668H14.2787ZM29.2727 2.66797C30.033 2.66797 30.5575 3.23968 30.5575 3.83464H32.5575C32.5575 2.03636 31.0361 0.667969 29.2727 0.667969V2.66797ZM30.5575 3.83464V19.0013H32.5575V3.83464H30.5575ZM30.5575 19.0013C30.5575 19.5963 30.033 20.168 29.2727 20.168V22.168C31.0361 22.168 32.5575 20.7996 32.5575 19.0013H30.5575ZM29.2727 20.168H10.9303V22.168H29.2727V20.168ZM10.9303 20.168C10.1773 20.168 9.44251 20.4175 8.85219 20.8825L10.0899 22.4536C10.32 22.2723 10.6167 22.168 10.9303 22.168V20.168ZM8.85221 20.8825L1.23568 26.8825L2.4733 28.4536L10.0898 22.4536L8.85221 20.8825ZM2.85449 27.668V3.83464H0.854492V27.668H2.85449ZM2.85449 3.83464C2.85449 3.23968 3.37903 2.66797 4.13934 2.66797V0.667969C2.37588 0.667969 0.854492 2.03635 0.854492 3.83464H2.85449ZM4.13934 2.66797H29.2727V0.667969H4.13934V2.66797Z"
						fill="currentColor"
					/>
				</svg>
			),
			href: '/booking',
		},
		{
			title: 'Settings',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 49 44"
					fill="none"
					style={iconStyles}>
					<path
						d="M42.6603 14.8927L42.1938 15.7772L42.6603 14.8927ZM43.4971 15.3341L43.9637 14.4497H43.9637L43.4971 15.3341ZM47.2546 21.3774L48.2546 21.375L47.2546 21.3774ZM47.2575 22.5953L46.2575 22.5977V22.5977L47.2575 22.5953ZM43.4898 28.6753L43.955 29.5606V29.5606L43.4898 28.6753ZM42.6637 29.1095L42.1985 28.2243L42.6637 29.1095ZM40.0341 33.4247L41.0339 33.407L40.0341 33.4247ZM40.0504 34.3448L39.0506 34.3626L40.0504 34.3448ZM36.4102 40.4579L36.8923 41.334L36.4102 40.4579ZM35.2959 41.0711L34.8138 40.1951L35.2959 41.0711ZM27.8626 41.0189L27.3679 41.888H27.3679L27.8626 41.0189ZM27.0491 40.5558L27.5438 39.6867H27.5438L27.0491 40.5558ZM21.7895 40.5529L21.2957 39.6833L21.7895 40.5529ZM20.9811 41.0119L21.4748 41.8815L20.9811 41.0119ZM13.5744 41.0709L13.0949 41.9484L13.5744 41.0709ZM12.4463 40.4545L12.9259 39.5769L12.4463 40.4545ZM8.78701 34.3302L9.78686 34.348L8.78701 34.3302ZM8.80273 33.4472L7.80289 33.4294L8.80273 33.4472ZM6.15841 29.0991L5.69182 29.9835H5.69182L6.15841 29.0991ZM5.33966 28.6671L5.80625 27.7827H5.80625L5.33966 28.6671ZM1.58284 22.6242L2.58284 22.6218L1.58284 22.6242ZM1.57992 21.4062L0.579926 21.4086L1.57992 21.4062ZM5.34747 15.3261L4.88229 14.4409L5.34747 15.3261ZM6.17359 14.8919L6.63877 15.7771L6.17359 14.8919ZM8.80222 10.5768L7.80238 10.5945L8.80222 10.5768ZM8.7859 9.65671L9.78574 9.63897L8.7859 9.65671ZM12.4263 3.54355L11.9441 2.66747L12.4263 3.54355ZM13.5405 2.93031L14.0227 3.80639L13.5405 2.93031ZM20.9744 2.98241L21.4691 2.11337L20.9744 2.98241ZM21.7879 3.44558L21.2932 4.31462L21.7879 3.44558ZM27.0468 3.44858L26.5531 2.57898V2.57898L27.0468 3.44858ZM27.8553 2.98955L28.349 3.85915L27.8553 2.98955ZM35.2614 2.93057L34.7818 3.8081L35.2614 2.93057ZM36.3896 3.54712L36.8692 2.66959L36.3896 3.54712ZM40.0501 9.67099L39.0503 9.65325V9.65325L40.0501 9.67099ZM40.0341 10.5745L41.0339 10.5922V10.5922L40.0341 10.5745ZM40.0312 10.8565L41.031 10.8404L40.0312 10.8565ZM40.7184 13.0812L41.5724 12.5609L40.7184 13.0812ZM40.5718 12.8361L39.7011 13.3279L40.5718 12.8361ZM38.918 5.18134L39.6463 4.49604L38.918 5.18134ZM39.8701 6.77513L40.8199 6.4624L39.8701 6.77513ZM30.5831 1.69437L30.7913 2.67245L30.5831 1.69437ZM32.5102 1.67929L32.3176 2.66057L32.5102 1.67929ZM24.7164 4.13504L24.6859 3.1355L24.7164 4.13504ZM26.7902 3.59115L27.2566 4.47573L26.7902 3.59115ZM22.044 3.58883L21.5767 4.47292L22.044 3.58883ZM24.1227 4.13504L24.1532 3.1355L24.1227 4.13504ZM16.3002 1.6658L16.4945 2.64674L16.3002 1.6658ZM18.2354 1.67929L18.0273 2.6574L18.2354 1.67929ZM8.96542 6.76984L9.91556 7.08166L8.96542 6.76984ZM9.9127 5.17932L9.18295 4.49561L9.9127 5.17932ZM8.11874 13.0793L8.97276 13.5996L8.11874 13.0793ZM8.26315 12.8379L7.39268 12.3457L8.26315 12.8379ZM8.80527 10.8544L9.80515 10.87L8.80527 10.8544ZM6.42807 14.7555L5.93586 13.885L5.93586 13.885L6.42807 14.7555ZM7.97036 13.3185L7.13364 12.7709L7.97036 13.3185ZM1.80481 18.5064L2.74957 18.8342L1.80481 18.5064ZM2.78594 16.9238L3.50304 17.6208H3.50304L2.78594 16.9238ZM2.79598 27.0765L2.07903 27.7737H2.07903L2.79598 27.0765ZM1.81853 25.5045L0.874698 25.8349L1.81853 25.5045ZM8.12275 30.9399L8.97887 30.4231L8.12275 30.9399ZM7.96255 30.6796L7.12513 31.2262V31.2262L7.96255 30.6796ZM6.43493 29.2478L5.93906 30.1162L6.43493 29.2478ZM8.8053 33.1494L7.80546 33.1674L8.8053 33.1494ZM8.27685 31.1994L9.15047 30.7128L8.27685 31.1994ZM9.9194 38.82L9.19113 39.5052L9.9194 38.82ZM8.96654 37.2262L9.91639 36.9135L8.96654 37.2262ZM18.2533 42.3069L18.4615 43.285L18.2533 42.3069ZM16.3264 42.3222L16.1338 43.3034L16.3264 42.3222ZM24.1194 39.8664L24.089 38.8668H24.089L24.1194 39.8664ZM22.0458 40.4103L22.5122 41.2949L22.0458 40.4103ZM26.7925 40.4124L27.2598 39.5283L26.7925 40.4124ZM24.7148 39.8664L24.7453 38.8668H24.7453L24.7148 39.8664ZM32.5358 42.3357L32.7301 43.3166L32.5358 42.3357ZM30.6018 42.3219L30.8099 41.3438L30.6018 42.3219ZM39.8712 37.2316L40.8214 37.5434L39.8712 37.2316ZM38.9239 38.8221L39.6536 39.5058L38.9239 38.8221ZM40.7174 30.9221L39.8633 30.4019L40.7174 30.9221ZM40.573 31.1635L39.7025 30.6713L40.573 31.1635ZM40.0311 33.1473L39.0313 33.1317L40.0311 33.1473ZM42.4082 29.2461L42.9004 30.1166L42.4082 29.2461ZM40.8664 30.6828L41.7032 31.2304L40.8664 30.6828ZM47.0315 25.4951L47.9762 25.8229L47.0315 25.4951ZM46.051 27.0776L45.3339 26.3806L46.051 27.0776ZM46.0403 16.9248L46.7573 16.2277L46.0403 16.9248ZM47.0181 18.4969L46.0742 18.8273L47.0181 18.4969ZM42.4026 14.7541L42.8965 13.8846L42.4026 14.7541ZM40.8694 13.3232L40.0329 13.8712L40.8694 13.3232ZM24.4184 29.6674C19.8724 29.6674 16.279 26.1856 16.279 22.0008H14.279C14.279 27.3889 18.8692 31.6674 24.4184 31.6674V29.6674ZM16.279 22.0008C16.279 17.816 19.8724 14.3341 24.4184 14.3341V12.3341C18.8692 12.3341 14.279 16.6126 14.279 22.0008H16.279ZM24.4184 14.3341C28.9643 14.3341 32.5578 17.816 32.5578 22.0008H34.5578C34.5578 16.6126 29.9675 12.3341 24.4184 12.3341V14.3341ZM32.5578 22.0008C32.5578 26.1856 28.9643 29.6674 24.4184 29.6674V31.6674C29.9675 31.6674 34.5578 27.3889 34.5578 22.0008H32.5578ZM42.1938 15.7772L43.0305 16.2186L43.9637 14.4497L43.1269 14.0083L42.1938 15.7772ZM46.2546 21.3798L46.2575 22.5977L48.2575 22.5929L48.2546 21.375L46.2546 21.3798ZM43.0246 27.7901L42.1985 28.2243L43.1289 29.9947L43.955 29.5606L43.0246 27.7901ZM39.0343 33.4424L39.0506 34.3626L41.0503 34.3271L41.0339 33.407L39.0343 33.4424ZM35.928 39.5818L34.8138 40.1951L35.7781 41.9472L36.8923 41.334L35.928 39.5818ZM28.3574 40.1499L27.5438 39.6867L26.5543 41.4248L27.3679 41.888L28.3574 40.1499ZM21.2957 39.6833L20.4873 40.1423L21.4748 41.8815L22.2832 41.4225L21.2957 39.6833ZM14.0539 40.1934L12.9259 39.5769L11.9668 41.332L13.0949 41.9484L14.0539 40.1934ZM9.78686 34.348L9.80258 33.465L7.80289 33.4294L7.78717 34.3124L9.78686 34.348ZM6.625 28.2146L5.80625 27.7827L4.87307 29.5516L5.69182 29.9835L6.625 28.2146ZM2.58284 22.6218L2.57992 21.4038L0.579926 21.4086L0.582844 22.6266L2.58284 22.6218ZM5.81265 16.2113L6.63877 15.7771L5.70841 14.0067L4.88229 14.4409L5.81265 16.2113ZM9.80207 10.5591L9.78574 9.63897L7.78606 9.67445L7.80238 10.5945L9.80207 10.5591ZM12.9084 4.41963L14.0227 3.80639L13.0583 2.05423L11.9441 2.66747L12.9084 4.41963ZM20.4796 3.85145L21.2932 4.31462L22.2827 2.57654L21.4691 2.11337L20.4796 3.85145ZM27.5406 4.31818L28.349 3.85915L27.3615 2.11995L26.5531 2.57898L27.5406 4.31818ZM34.7818 3.8081L35.9101 4.42465L36.8692 2.66959L35.7409 2.05304L34.7818 3.8081ZM39.0503 9.65325L39.0343 10.5568L41.0339 10.5922L41.05 9.68873L39.0503 9.65325ZM39.0343 10.5567C39.0319 10.6878 39.0298 10.7815 39.0313 10.8726L41.031 10.8404C41.0303 10.7924 41.0313 10.7436 41.0339 10.5922L39.0343 10.5567ZM41.5724 12.5609C41.4946 12.4331 41.4672 12.3879 41.4426 12.3443L39.7011 13.3279C39.7457 13.4068 39.7932 13.4845 39.8644 13.6014L41.5724 12.5609ZM39.0313 10.8726C39.0452 11.7328 39.2758 12.5748 39.7011 13.3279L41.4426 12.3443C41.1794 11.8783 41.0395 11.3629 41.031 10.8404L39.0313 10.8726ZM35.9101 4.42465C37.3301 5.20058 37.835 5.48961 38.1898 5.86664L39.6463 4.49604C39.0208 3.83133 38.1659 3.37816 36.8692 2.66959L35.9101 4.42465ZM41.05 9.68873C41.0751 8.27426 41.1049 7.32789 40.8199 6.4624L38.9203 7.08787C39.0741 7.55512 39.0779 8.09491 39.0503 9.65325L41.05 9.68873ZM38.1898 5.86664C38.5249 6.22276 38.7727 6.6396 38.9203 7.08787L40.8199 6.4624C40.5793 5.73164 40.1784 5.06151 39.6463 4.49604L38.1898 5.86664ZM28.349 3.85915C29.7472 3.06526 30.2617 2.78519 30.7913 2.67245L30.3749 0.716282C29.4714 0.908618 28.6459 1.39065 27.3615 2.11995L28.349 3.85915ZM35.7409 2.05304C34.4429 1.34377 33.6091 0.875882 32.7028 0.69801L32.3176 2.66057C32.8496 2.76498 33.3707 3.03697 34.7818 3.8081L35.7409 2.05304ZM30.7913 2.67245C31.2929 2.56566 31.8135 2.56164 32.3176 2.66057L32.7028 0.69801C31.9344 0.547206 31.1411 0.553172 30.3749 0.716282L30.7913 2.67245ZM24.4195 5.13727C24.5627 5.13727 24.6548 5.13738 24.7468 5.13458L24.6859 3.1355C24.6314 3.13716 24.5744 3.13727 24.4195 3.13727V5.13727ZM26.5531 2.57898C26.4245 2.65201 26.3723 2.681 26.3239 2.70656L27.2566 4.47573C27.3363 4.43375 27.4136 4.39032 27.5406 4.31818L26.5531 2.57898ZM24.7468 5.13458C25.6243 5.10787 26.4846 4.88279 27.2566 4.47573L26.3239 2.70656C25.8243 2.96996 25.2627 3.11795 24.6859 3.1355L24.7468 5.13458ZM21.2932 4.31462C21.4152 4.38407 21.4953 4.4299 21.5767 4.47292L22.5113 2.70474C22.4643 2.67991 22.4169 2.65293 22.2827 2.57654L21.2932 4.31462ZM24.4195 3.13727C24.2642 3.13727 24.2079 3.13717 24.1532 3.1355L24.0922 5.13457C24.1844 5.13739 24.276 5.13727 24.4195 5.13727V3.13727ZM21.5767 4.47292C22.3501 4.88175 23.213 5.10776 24.0922 5.13457L24.1532 3.1355C23.5751 3.11787 23.0115 2.96913 22.5113 2.70474L21.5767 4.47292ZM14.0227 3.80639C15.4381 3.02739 15.9607 2.75248 16.4945 2.64674L16.1059 0.684857C15.1962 0.865048 14.3597 1.33797 13.0583 2.05423L14.0227 3.80639ZM21.4691 2.11337C20.1794 1.37916 19.3507 0.894193 18.4435 0.701182L18.0273 2.6574C18.5591 2.77054 19.0761 3.05244 20.4796 3.85145L21.4691 2.11337ZM16.4945 2.64674C17.0002 2.54658 17.5235 2.55021 18.0273 2.6574L18.4435 0.701182C17.6744 0.537531 16.8772 0.532081 16.1059 0.684857L16.4945 2.64674ZM9.78574 9.63897C9.7582 8.08665 9.76257 7.54783 9.91556 7.08166L8.01527 6.45803C7.73206 7.32104 7.76103 8.26391 7.78606 9.67445L9.78574 9.63897ZM11.9441 2.66747C10.6532 3.37791 9.80498 3.8317 9.18295 4.49561L10.6425 5.86304C10.9954 5.48629 11.4966 5.19666 12.9084 4.41963L11.9441 2.66747ZM9.91556 7.08166C10.0621 6.63513 10.3088 6.21919 10.6425 5.86304L9.18295 4.49561C8.65405 5.06012 8.25464 5.72864 8.01527 6.45803L9.91556 7.08166ZM8.97276 13.5996C9.04298 13.4843 9.08964 13.4079 9.13362 13.3302L7.39268 12.3457C7.36837 12.3887 7.34146 12.4331 7.26472 12.5591L8.97276 13.5996ZM7.80238 10.5945C7.80506 10.7456 7.80613 10.7918 7.80539 10.8388L9.80515 10.87C9.80656 10.7799 9.80433 10.6867 9.80207 10.5591L7.80238 10.5945ZM9.13362 13.3302C9.56004 12.5761 9.79169 11.7323 9.80515 10.87L7.80539 10.8388C7.79722 11.362 7.65681 11.8786 7.39268 12.3457L9.13362 13.3302ZM6.63877 15.7771C6.76454 15.7111 6.84236 15.67 6.92028 15.6259L5.93586 13.885C5.88957 13.9112 5.83985 13.9376 5.70841 14.0067L6.63877 15.7771ZM7.26472 12.5591C7.1882 12.6847 7.16093 12.7292 7.13364 12.7709L8.80708 13.8662C8.85605 13.7913 8.90223 13.7154 8.97276 13.5996L7.26472 12.5591ZM6.92027 15.6259C7.6837 15.1943 8.33201 14.592 8.80708 13.8661L7.13364 12.7709C6.83769 13.2231 6.42822 13.6066 5.93586 13.885L6.92027 15.6259ZM2.57992 21.4038C2.57618 19.841 2.58789 19.3002 2.74957 18.8342L0.860051 18.1786C0.56064 19.0416 0.576531 19.9911 0.579926 21.4086L2.57992 21.4038ZM4.88229 14.4409C3.56958 15.1307 2.70643 15.5708 2.06884 16.2268L3.50304 17.6208C3.86536 17.248 4.37638 16.966 5.81265 16.2113L4.88229 14.4409ZM2.74957 18.8342C2.90443 18.3878 3.16032 17.9734 3.50304 17.6208L2.06884 16.2268C1.52699 16.7843 1.11308 17.4493 0.860051 18.1786L2.74957 18.8342ZM5.80625 27.7827C4.38065 27.0306 3.87316 26.7499 3.51293 26.3794L2.07903 27.7737C2.71306 28.4257 3.57054 28.8645 4.87307 29.5516L5.80625 27.7827ZM0.582844 22.6266C0.586216 24.0342 0.574606 24.9777 0.874698 25.8349L2.76237 25.1741C2.60034 24.7112 2.58656 24.1745 2.58284 22.6218L0.582844 22.6266ZM3.51293 26.3794C3.17238 26.0292 2.91772 25.6178 2.76237 25.1741L0.874698 25.8349C1.12818 26.559 1.53996 27.2193 2.07903 27.7737L3.51293 26.3794ZM8.97887 30.4231C8.9031 30.2976 8.85308 30.2144 8.79997 30.1331L7.12513 31.2262C7.15461 31.2713 7.18387 31.3195 7.26663 31.4566L8.97887 30.4231ZM5.69182 29.9835C5.83761 30.0604 5.88988 30.0881 5.93906 30.1162L6.9308 28.3794C6.8456 28.3307 6.7579 28.2847 6.625 28.2146L5.69182 29.9835ZM8.79997 30.1331C8.32916 29.4117 7.68777 28.8116 6.9308 28.3794L5.93906 30.1162C6.42649 30.3945 6.83148 30.7763 7.12513 31.2262L8.79997 30.1331ZM9.80258 33.465C9.80513 33.3213 9.80685 33.2266 9.80514 33.1314L7.80546 33.1674C7.8064 33.2192 7.80565 33.2742 7.80289 33.4294L9.80258 33.465ZM7.26663 31.4566C7.35077 31.596 7.3779 31.6406 7.40323 31.686L9.15047 30.7128C9.10337 30.6283 9.05131 30.5431 8.97887 30.4231L7.26663 31.4566ZM9.80514 33.1314C9.78992 32.2847 9.56444 31.456 9.15047 30.7128L7.40323 31.686C7.6595 32.1461 7.79622 32.6534 7.80546 33.1674L9.80514 33.1314ZM12.9259 39.5769C11.5069 38.8015 11.0027 38.5119 10.6477 38.1347L9.19113 39.5052C9.81646 40.1698 10.669 40.6228 11.9668 41.332L12.9259 39.5769ZM7.78717 34.3124C7.762 35.7265 7.73171 36.6733 8.01668 37.5389L9.91639 36.9135C9.76259 36.4464 9.7591 35.9068 9.78686 34.348L7.78717 34.3124ZM10.6477 38.1347C10.3119 37.7779 10.0637 37.361 9.91639 36.9135L8.01668 37.5389C8.25754 38.2705 8.65958 38.9404 9.19113 39.5052L10.6477 38.1347ZM20.4873 40.1423C19.0892 40.9361 18.5747 41.2161 18.0451 41.3289L18.4615 43.285C19.365 43.0927 20.1903 42.6109 21.4748 41.8815L20.4873 40.1423ZM13.0949 41.9484C14.3932 42.6579 15.2276 43.1256 16.1338 43.3034L16.519 41.3409C15.9869 41.2365 15.4647 40.9643 14.0539 40.1934L13.0949 41.9484ZM18.0451 41.3289C17.5433 41.4357 17.0229 41.4398 16.519 41.3409L16.1338 43.3034C16.9023 43.4543 17.6954 43.4481 18.4615 43.285L18.0451 41.3289ZM24.4163 38.8641C24.273 38.8641 24.1809 38.864 24.089 38.8668L24.1498 40.8659C24.2044 40.8642 24.2613 40.8641 24.4163 40.8641V38.8641ZM22.2832 41.4225C22.4131 41.3487 22.4641 41.3202 22.5122 41.2949L21.5794 39.5257C21.4994 39.5679 21.4217 39.6117 21.2957 39.6833L22.2832 41.4225ZM24.089 38.8668C23.2113 38.8935 22.3514 39.1187 21.5794 39.5257L22.5122 41.2949C23.0119 41.0314 23.5732 40.8835 24.1498 40.8659L24.089 38.8668ZM27.5438 39.6867C27.4199 39.6162 27.3407 39.5711 27.2598 39.5283L26.3251 41.2965C26.3726 41.3216 26.422 41.3495 26.5543 41.4248L27.5438 39.6867ZM24.4163 40.8641C24.5716 40.8641 24.6296 40.8643 24.6843 40.8659L24.7453 38.8668C24.6531 38.864 24.5597 38.8641 24.4163 38.8641V40.8641ZM27.2598 39.5283C26.4864 39.1195 25.6246 38.8937 24.7453 38.8668L24.6843 40.8659C25.2624 40.8835 25.8249 41.0321 26.3251 41.2965L27.2598 39.5283ZM34.8138 40.1951C33.3986 40.974 32.8754 41.249 32.3415 41.3547L32.7301 43.3166C33.6398 43.1364 34.4765 42.6636 35.7781 41.9472L34.8138 40.1951ZM27.3679 41.888C28.6578 42.6223 29.4865 43.107 30.3937 43.3L30.8099 41.3438C30.278 41.2306 29.7606 40.9488 28.3574 40.1499L27.3679 41.888ZM32.3415 41.3547C31.8361 41.4548 31.314 41.451 30.8099 41.3438L30.3937 43.3C31.1625 43.4636 31.9585 43.4694 32.7301 43.3166L32.3415 41.3547ZM39.0506 34.3626C39.0781 35.9152 39.074 36.4537 38.9211 36.9198L40.8214 37.5434C41.1046 36.6803 41.0753 35.7372 41.0503 34.3271L39.0506 34.3626ZM36.8923 41.334C38.1832 40.6236 39.0316 40.1697 39.6536 39.5058L38.1941 38.1384C37.8412 38.5151 37.3399 38.8048 35.928 39.5818L36.8923 41.334ZM38.9211 36.9198C38.7746 37.3662 38.5279 37.7822 38.1941 38.1384L39.6536 39.5058C40.1825 38.9413 40.582 38.2729 40.8214 37.5434L38.9211 36.9198ZM39.8633 30.4019C39.7932 30.5171 39.7465 30.5936 39.7025 30.6713L41.4434 31.6558C41.4677 31.6128 41.4947 31.5683 41.5714 31.4424L39.8633 30.4019ZM41.0339 33.407C41.0313 33.2571 41.0303 33.2101 41.031 33.1629L39.0313 33.1317C39.0299 33.2215 39.032 33.3137 39.0343 33.4424L41.0339 33.407ZM39.7025 30.6713C39.2759 31.4257 39.0447 32.2697 39.0313 33.1317L41.031 33.1629C41.0392 32.6393 41.1795 32.1226 41.4434 31.6558L39.7025 30.6713ZM42.1985 28.2243C42.076 28.2886 41.9948 28.3311 41.916 28.3756L42.9004 30.1166C42.9459 30.0909 42.9942 30.0655 43.1289 29.9947L42.1985 28.2243ZM41.5714 31.4424C41.645 31.3216 41.6749 31.2736 41.7032 31.2304L40.0297 30.1352C39.9818 30.2084 39.9368 30.2814 39.8633 30.4019L41.5714 31.4424ZM41.916 28.3756C41.1524 28.8074 40.5047 29.4094 40.0297 30.1352L41.7032 31.2304C41.9992 30.7781 42.4082 30.3949 42.9004 30.1166L41.916 28.3756ZM46.2575 22.5977C46.2612 24.1591 46.2485 24.701 46.0867 25.1673L47.9762 25.8229C48.2755 24.9602 48.2609 24.0118 48.2575 22.5929L46.2575 22.5977ZM43.955 29.5606C45.2679 28.8706 46.1305 28.4305 46.7681 27.7746L45.3339 26.3806C44.9715 26.7534 44.4607 27.0355 43.0246 27.7901L43.955 29.5606ZM46.0867 25.1673C45.9316 25.6142 45.6762 26.0284 45.3339 26.3806L46.7681 27.7746C47.3103 27.2167 47.7234 26.5517 47.9762 25.8229L46.0867 25.1673ZM43.0305 16.2186C44.4558 16.9705 44.9631 17.2514 45.3234 17.6219L46.7573 16.2277C46.1233 15.5757 45.2665 15.1369 43.9637 14.4497L43.0305 16.2186ZM48.2546 21.375C48.2512 19.9663 48.2619 19.0234 47.9619 18.1665L46.0742 18.8273C46.2363 19.2903 46.2509 19.828 46.2546 21.3798L48.2546 21.375ZM45.3234 17.6219C45.6641 17.9724 45.919 18.3838 46.0742 18.8273L47.9619 18.1665C47.7083 17.4422 47.2962 16.7819 46.7573 16.2277L45.3234 17.6219ZM43.1269 14.0083C42.9925 13.9374 42.9429 13.9109 42.8965 13.8846L41.9087 15.6236C41.9879 15.6686 42.0683 15.711 42.1938 15.7772L43.1269 14.0083ZM39.8644 13.6014C39.9395 13.7246 39.9846 13.7975 40.0329 13.8712L41.7059 12.7753C41.6769 12.731 41.6462 12.6821 41.5724 12.5609L39.8644 13.6014ZM42.8965 13.8846C42.4073 13.6067 42.0005 13.2251 41.7059 12.7753L40.0329 13.8712C40.5058 14.5931 41.15 15.1927 41.9087 15.6236L42.8965 13.8846Z"
						fill="currentColor"
					/>
				</svg>
			),
			href: '/settings',
		},
	];

	useEffect(() => {
		var loc = window.location.pathname;
		document.getElementById('nav-list').childNodes.forEach(node => {
			if (node.childNodes.item(0).href.includes(loc)) {
				node.classList.add(styles['nav-active']);
			} else {
				node.classList.remove(styles['nav-active']);
			}
		});
	});
	return (
		<>
			<div
				id="sidebar"
				className={`w-16 ${styles['side-bg']} group bg-[#11101D] h-screen flex flex-col justify-between pt-6 fixed top-0 left-0 transition-all duration-500 overflow-hidden z-1000 hover:w-56`}>
				<div className="sidebar-logo text-center w-full flex justify-center px-2">
					<img src="/images/icons/snap.svg" className="w-10 h-auto" />
				</div>
				<div className="sidebar-nav px-2 group-hover:px-4 duration-500">
					<ul className="flex flex-col" id="nav-list">
						{links.map((link, index) => (
							<li
								key={index}
								className="flex w-full rounded-lg items-center my-1">
								<Link href={link.href}>
									<a className="flex w-full rounded-2xl items-center pl-3 py-4 pr-0 hover:text-[#11101D] hover:bg-white duration-200">
										<span className="min-w-8">{link.icon}</span>
										<span className="ml-4 text-sm">{link.title}</span>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<hr className="border-[#A1A1A1]" />
				<div className="sidebar-footer px-4 bg-[#1D1B31] group-hover:opacity-100 opacity-0 duration-500 min-w-56 py-4 w-full">
					The Snap Fuel
				</div>
			</div>
		</>
	);
}

export default Sidebar;