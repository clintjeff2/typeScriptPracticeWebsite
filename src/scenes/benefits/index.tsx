import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import {
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon,
} from '@heroicons/react/24/solid';
import Benefit from './Benefit';
import HText from '../../shared/HText';
import ActionButton from '@/shared/ActionButton';

import BenefitPageGraphic from './../../assets/images/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: 'State of the Art Facilities',
		description:
			"We believe that fitness is a journey, and at EVOGYM, we're here to support you every step of the way.",
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of diverse classes",
		description:
			'Ditch the workout rut and dive into a world of variety!  At EVOGYM, we boast hundreds of diverse classes that cater to every fitness level and interest. ',
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: 'Expert and Pro Trainers',
		description:
			"Don't settle for just any trainer. At EVOGYM, we take pride in our team of expert and pro trainers who are more than just instructors – they're your partners in reaching your fitness goals.",
	},
];

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.2 } },
};

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};
function Benefits({ setSelectedPage }: Props) {
	return (
		<section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div
				className=""
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.4 }}
				variants={{ hidden: {}, visible: {} }}
				onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
			>
				{/* HEADER */}
				<motion.div
					className="md:my-5 md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>MORE THAN JUST A GYM.</HText>
					<p className="my-5 text-sm">
						It's about building a healthier, happier you. At our gym, you'll
						find a supportive community that motivates you to reach your goals,
						expert trainers who guide you every step of the way, and a diverse
						range of classes and equipment to keep your workouts exciting. We're
						here to empower you to not only transform your body, but also boost
						your confidence and overall well-being.
					</p>
				</motion.div>
				{/* BENEFITS */}
				<motion.div
					className="md:flex items-center justify-between gap-8 mt-5"
					initial="hidden"
					whileInView="visible"
					variants={container}
					viewport={{ once: true, amount: 0.5 }}
				>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>

				{/* GRAPHIC */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					<img
						className="mx-auto"
						src={BenefitPageGraphic}
						alt="benefits page graphics"
					/>

					{/* DESCRIPTION */}
					<div>
						{/* TITLE */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.3 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}
								>
									<HText>
										MILLIONS OF HAPPY MEMBERS GETTING{' '}
										<span className="text-primary-500">FIT</span>
									</HText>
								</motion.div>
							</div>
						</div>
						{/* DESCRIPTION */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.4 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<p className="my-5">
								EVOGYM isn't just a gym, it's your launchpad for a fitter,
								stronger you. Here, the state-of-the-art equipment becomes your
								playground, pushing you to new limits and sculpting your
								physique. Hundreds of diverse classes cater to every whim, from
								the high-octane intensity of HIIT to the mindful flow of yoga.
								But EVOGYM goes beyond the machines. Our expert and pro trainers
								are your personal cheerleaders and coaches, crafting
								personalized programs and celebrating every milestone with you.
								In this supportive environment, sweat becomes a badge of honor,
								and every workout a step closer to the fit and confident you
								that's waiting to be unleashed.
							</p>
							<p className="mb-5">
								At EVOGYM, fitness isn't just about aesthetics; it's about
								empowering yourself. It's about feeling the surge of endorphins
								after a challenging class, the newfound strength in your core,
								the confidence that radiates from within. It's about a community
								that motivates you, expert guidance that keeps you safe, and a
								personalized plan that gets you results. This is your fitness
								evolution, and EVOGYM is here to guide you every step of the
								way.
							</p>
						</motion.div>
						{/* BUTTON */}
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>
									Join Now
								</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default Benefits;
