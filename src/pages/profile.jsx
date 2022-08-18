import Header from '../components/Profile/Header';
import Hero from '../components/Profile/Hero';
import ProfileSection from '../components/Profile/ProfileSection';

function Profile() {
	return (
		<div className="p-4">
			<div className="my-4 mx-8">
				<Header />
				<Hero />
				<ProfileSection />
			</div>
		</div>
	);
}

export default Profile;
