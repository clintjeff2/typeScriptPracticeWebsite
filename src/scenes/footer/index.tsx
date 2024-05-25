import Logo from '../../assets/images/Logo.png';

function Footer() {
	return (
		<footer className="bg-primary-100 py-16">
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className="mt-16 basis-1/2 md:mt-0">
					<img src={Logo} alt="logo" />
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						dolor inventore velit quae reprehenderit, earum corrupti architecto
						exercitationem, culpa commodi a, odio aliquid minus. Quae delectus
						sapiente eius esse nesciunt.
					</p>
					<p>@ Evogym All Rights Reserved.</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Links</h4>
					<p className="my-5">Massa orci senectus</p>
					<p className="my-5">Lorem ipsum dolor sit.</p>
					<p className="my-5"> Consectetur, adipisicing elit.</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Contact Us</h4>
					<p className="my-5">Sit amet adipisicing.</p>
					<p className="my-5">Lorem ipsum dolor sit.</p>
					<p className="my-5">(333)425-6825</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
