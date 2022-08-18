import React from 'react';
import { CgUserList } from 'react-icons/cg';
import { BsCardText } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
function Accordion() {
	const [open, setOpen] = React.useState(0);

	const content = [
		{
			title: 'About',
			display: (
				<div className="accordion-content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quidem.
					</p>
				</div>
			),
			icon: <CgUserList className="text-accent h-6 w-6 mr-3" />,
		},
		{
			title: 'Details',
			display: (
				<div className="accordion-content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quidem.
					</p>
				</div>
			),
			icon: <BsCardText className="text-accent h-6 w-6 mr-3" />,
		},
	];
	return (
		<>
			{content.map((item, index) => (
				<div
					key={index}
					onClick={() => {
						if (open === index) {
							setOpen(-1);
						} else {
							setOpen(index);
						}
					}}>
					<div className="accordion-header cursor-pointer transition flex items-center h-16 justify-between">
						<div className="flex items-center">
							{item.icon}
							<h3>{item.title}</h3>
						</div>
						<div>
							{open === index ? (
								<FiChevronUp className="text-accent h-8 w-8 mr-3" />
							) : (
								<FiChevronDown className="text-accent h-8 w-8 mr-3" />
							)}
						</div>
					</div>
					<div
						className={`accordion-content pt-0 pb-2 overflow-hidden duration-200 transition border-b border-[#5b5d5e] ${
							!(open === index) && 'max-h-0 pb-0'
						}`}>
						{item.display}
					</div>
				</div>
			))}
		</>
	);
}

export default Accordion;
