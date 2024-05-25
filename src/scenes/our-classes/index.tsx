import { SelectedPage } from '@/shared/types';
import image1 from './../../assets/images/image1.png';
import image2 from './../../assets/images/image2.png';
import image3 from './../../assets/images/image3.png';
import image4 from './../../assets/images/image4.png';
import image5 from './../../assets/images/image5.png';
import image6 from './../../assets/images/image6.png';
import { motion } from 'framer-motion';
import HText from './../../shared/HText';
import { ClassType } from '../../shared/types';
import ClassBox from './ClassBox';

const classes: Array<ClassType> = [
	{
		name: 'Weight Training Classes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem magni nam earum, quae reprehenderit.',
		image: image1,
	},
	{
		name: 'Yoga Classes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem magni nam earum, quae reprehenderit.',
		image: image2,
	},
	{
		name: 'Ab Core Classes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem magni nam earum, quae reprehenderit.',
		image: image3,
	},
	{
		name: 'Adventure Classes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem magni nam earum, quae reprehenderit.',
		image: image4,
	},
	{
		name: 'Fitness Classes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem magni nam earum, quae reprehenderit.',
		image: image5,
	},
	{
		name: 'Training Classes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem magni nam earum, quae reprehenderit.',
		image: image6,
	},
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
	return (
		<section id="ourclasses" className="w-full bg-primary-100 py-40">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
			>
				<motion.div
					className="mx-auto w-5/6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					transition={{ duration: 0.4 }}
				>
					<div className="md:w-3/5">
						<HText>OUR CLASSES</HText>
						<p className="py-5">
							eel that fire in your belly? It's the strength waiting to be
							unleashed. Every workout is a step towards a stronger, healthier
							you.
						</p>
					</div>
				</motion.div>
				<div>
					<div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
						<ul className="w-[2800px] whitespace-nowrap">
							{classes.map((item, index) => (
								<ClassBox
									key={`${item.name}-${index}`}
									name={item.name}
									description={item.description}
									image={item.image}
								/>
							))}
						</ul>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default OurClasses;
