import { TabGroup } from '../../utils/TabGroup';
import FadeInWhenVisible from '../../utils/FadeInWhenVisible';

function CustomTabPanel({ index, children }) {
	return (
		<TabGroup.TabPanel
			index={index}
			className="transition-all transform"
			activeClassName="opacity-100 duration-500 translate-x-0"
			inactiveClassName="hidden">
			<FadeInWhenVisible resetAnimation={true}>{children}</FadeInWhenVisible>
		</TabGroup.TabPanel>
	);
}

export default CustomTabPanel;
