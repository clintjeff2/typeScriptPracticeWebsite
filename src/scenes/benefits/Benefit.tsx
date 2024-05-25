import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
	icon: JSX.Element;
	key: string;
	title: string;
	description: string;
	setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};
function Benefit({ key, title, description, icon, setSelectedPage }: Props) {
	return (
		<motion.div
			className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
			key={key}
			variants={childVariant}
		>
			<div className="mb-4 flex justify-center">
				<div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
					{icon}
				</div>
			</div>
			<h4 className="font-bold">{title}</h4>
			<p className="my-3">{description}</p>
			<AnchorLink
				onClick={() => setSelectedPage(SelectedPage.ContactUs)}
				className="text-sm font-bold text-primary-500 underline hover:bg-yellow-500"
				href={`#${SelectedPage.ContactUs}`}
			>
				<p>Learn More</p>
			</AnchorLink>
		</motion.div>
	);
}

export default Benefit;
