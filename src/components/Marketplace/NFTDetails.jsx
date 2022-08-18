import Link from 'next/link';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

function NFTDetails({ imgSrc, title, owners, description, author }) {
	return (
		<div className="flex justify-between items-center">
			<div className="flex">
				<div>
					<img
						src={imgSrc}
						className="min-w-36 h-36 object-cover rounded-2xl"></img>
				</div>
				<div className="ml-4 flex flex-col opacity-90 justify-center">
					<div className="flex justify-between">
						<div>
							<h1 className="text-3xl">{title}</h1>

							<span className="flex mb-2 text-sm items-center font-light text-accent">
								by {author}
							</span>
						</div>
						<div className="flex items-center -mt-6 max-w-128">
							<p className="mr-3">Owners:</p>
							{owners.map((owner, index) => (
								<Link href={owner.url} key={index}>
									<a className="w-10 h-10 flex items-center justify-center mr-2 hover:scale-110 duration-200">
										<img
											src={owner.imgSrc}
											className="w-10 h-10 rounded-full object-cover"
										/>
									</a>
								</Link>
							))}
							<button>
								<BsChevronRight className="text-accent" />
							</button>
						</div>
					</div>
					<div className="w-5/6">
						<p className="text-[#a7a7a7]">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NFTDetails;
