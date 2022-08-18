import { TabGroup } from '../../utils/TabGroup';
import CustomTab from './CustomTab';
import CustomTabPanel from './CustomTabPanel';
import ProfileItems from './ProfileItems';

export default function ProfileSection() {
	return (
		<div className="flex flex-col mx-16 mt-12">
			<TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
				<TabGroup.TabList className="ml-2">
					<CustomTab index={0} text="Items" unreadNotifications={69} />
					<CustomTab index={1} text="Activity" />
					<CustomTab index={2} text="Wallet" />
					<CustomTab index={3} text="History" />
				</TabGroup.TabList>
				<CustomTabPanel index={0}>
					<ProfileItems />
				</CustomTabPanel>
				<CustomTabPanel index={1}>Something here</CustomTabPanel>
				<CustomTabPanel index={2}> Something here</CustomTabPanel>
				<CustomTabPanel index={3}> Something here</CustomTabPanel>
			</TabGroup>
		</div>
	);
}
