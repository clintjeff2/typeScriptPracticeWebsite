import { SelectedPage } from './../../shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from './../../assets/images/ContactUsPageGraphic.png';
import HText from '../../shared/HText';

type Props = { setSelectedPage: (value: SelectedPage) => void };

function ContactUs({ setSelectedPage }: Props) {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();

		if (!isValid) {
			e.preventDefault();
		}
	};

	const inputStyle =
		'mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white outline-0';

	return (
		<section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
			>
				{/* HEADER */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView={'visible'}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.4 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>
						<span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
					</HText>
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Praesentium cum fuga voluptatibus harum accusantium ullam minus
						commodi dolorum provident, eius rem blanditiis sequi! Et accusantium
						eos autem. Accusamus, ipsum tempora!
					</p>
				</motion.div>

				{/* FORM AND IMAGE */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView={'visible'}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4 }}
						variants={{
							hidden: { opacity: 0, y: -50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<form
							target="_blank"
							action="https://formsubmit.co/d82c32c1e1037b3b7b9087e2c0a296ae"
							onSubmit={onSubmit}
							method="POST"
						>
							<input
								className={inputStyle}
								type="text"
								placeholder="NAME"
								{...register('name', {
									required: true,
									maxLength: 100,
								})}
							/>
							{errors.name && (
								<p className="mt-1 text-primary-500">
									{errors.name.type === 'required' && 'This field is required.'}
									{errors.name.type === 'maxLength' &&
										'Max length is 100 characters atmost'}
								</p>
							)}

							<input
								className={inputStyle}
								type="text"
								placeholder="EMAIL"
								{...register('email', {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className="mt-1 text-primary-500">
									{errors.email.type === 'required' &&
										'This field is required.'}
									{errors.email.type === 'pattern' && 'Invalid Email Address'}
								</p>
							)}

							<textarea
								rows={4}
								cols={50}
								className={inputStyle}
								placeholder="MESSAGE"
								{...register('message', {
									required: true,
									maxLength: 2000,
								})}
							/>
							{errors.message && (
								<p className="mt-1 text-primary-500">
									{errors.message.type === 'required' &&
										'This field is required.'}
									{errors.message.type === 'maxLength' &&
										'Max length is 2000 characters atmost'}
								</p>
							)}

							<button
								type="submit"
								className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
							>
								SUBMIT
							</button>
						</form>
					</motion.div>
					<motion.div
						className="relative mt-16 basis-2/5 md:mt-0"
						initial="hidden"
						whileInView={'visible'}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						variants={{
							hidden: { opacity: 0, y: -50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
							<img
								className="w-full"
								src={ContactUsPageGraphic}
								alt="Contact us"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}

export default ContactUs;
