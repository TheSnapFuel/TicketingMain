import '../../styles/globals.css';
import '../components/SeatPicker/styles/index.scss';

import Layout from '../components/Layout/layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
