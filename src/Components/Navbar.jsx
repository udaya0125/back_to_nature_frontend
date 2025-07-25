import React, {useState, useEffect} from 'react';
import logo from '../Images/logo.png';
import trekData from '../Data/Data.json';
import activityData from '../Data/Data.json';
import tourData from '../Data/Data.json';
import {Link} from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 10) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return() => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return() => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	const toggleDropdown = (dropdown) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
	};

	return (
		<nav 
		className={
			`top-0 fixed w-full z-50 transition-all duration-300
			 ${
				hasScrolled  ? 'backdrop-blur-sm bg-[#00304a]/80 shadow-md' : 'bg-transparent'

			}
			`
		}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 py-4">
					{/* Logo Section */}
					<div className="flex-shrink-0 flex items-center">
						<a href="/"
							className={
								`hover:text-blue-300 transition ${
									hasScrolled ? 'text-white' : 'text-white'
								}`
						}>


							<img className={
									`h-12 w-auto rounded-4xl py-2 transition-all duration-300 ${
										hasScrolled ? 'bg-white/90' : 'bg-white/90'
									}`
								}
								src={logo}
								alt="Company Logo"/>
						</a>
					</div>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex space-x-8">
						<ul className="flex space-x-8 font-semibold text-lg">
							<li>
								<a href="/"
									className={
										`hover:text-blue-300 transition ${
											hasScrolled ? 'text-white' : 'text-white'
										}`
								}>
									Home
								</a>
							</li>

							{/* Trekkings Dropdown */}
							<li className="relative"
								onMouseEnter={
									() => setActiveDropdown('trekkings')
								}
								onMouseLeave={
									() => setActiveDropdown(null)
							}>
								<button className={
									`hover:text-blue-300 transition ${
										hasScrolled ? 'text-white' : 'text-white'
									} flex items-center`
								}>
									<Link to="/trekking"
									              onClick={() => window.scrollTo(0, 0)}
>
										Trekkings
									</Link>
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
									</svg>
								</button>

								{
								activeDropdown === 'trekkings' && (
									<div className="absolute left-0 w-64 bg-white rounded-md shadow-lg z-50">
										<div className="py-1">
											{/* Group treks by region (sub_category) */}
											{
											Object.entries(trekData.filter(item => item.category === 'trekking').reduce((acc, trek) => {
												const region = trek.sub_category || 'Annapurna Regions';

												if (!acc[region]) 
													acc[region] = [];
												


												acc[region].push(trek);
												return acc;
											}, {})).map(([region, treks]) => (
												<div key={region}>
													<div className="px-4 py-2 text-gray-800 font-medium border-b">
														{region} </div>
													{
													treks.map(trek => (
														<a key={
																trek.id
															}
															href={
																`/trekkings/${
																	trek.slug
																}`
															}
															className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
															onClick={
																() => setActiveDropdown(null)
															}
															// Close dropdown when clicked
														>
															{
															trek.title
														} </a>
													))
												} </div>
											))
										} </div>
									</div>
								)
							} </li>

							{/* Activities Dropdown */}

							<li className="relative"
								onMouseEnter={
									() => setActiveDropdown('activities')
								}
								onMouseLeave={
									() => setActiveDropdown(null)
							}>
								<button className={
									`hover:text-blue-300 transition ${
										hasScrolled ? 'text-white' : 'text-white'
									} flex items-center`
								}>
									<Link to="/activity" onClick={() => window.scrollTo(0, 0)}>

										Activities
									</Link>
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
									</svg>
								</button>

								{
								activeDropdown === 'activities' && (
									<div className="absolute left-0 w-64 bg-white rounded-md shadow-lg z-50">
										<div className="py-1">
											{/* Group activities by type (sub_category) */}
											{
											Object.entries(activityData.filter(item => item.category === 'activity').reduce((acc, activity) => {
												const type = activity.sub_category || 'Adventure Activities';
												if (!acc[type]) 
													acc[type] = [];
												


												acc[type].push(activity);
												return acc;
											}, {})).map(([type, activities]) => (
												<div key={type}>
													<div className="px-4 py-2 text-gray-800 font-medium border-b">
														{type} </div>
													{
													activities.map(activity => (
														<a key={
																activity.id
															}
															href={
																`/activities/${
																	activity.slug
																}`
															}
															className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
															onClick={
																() => setActiveDropdown(null)
														}>
															{
															activity.title
														} </a>
													))
												} </div>
											))
										} </div>
									</div>
								)
							} </li>
							{/* Tours Dropdown */}

							{/* Tours Dropdown */}
							<li className="relative"
								onMouseEnter={
									() => setActiveDropdown('tours')
								}
								onMouseLeave={
									() => setActiveDropdown(null)
							}>
								<button className={
									`hover:text-blue-300 transition ${
										hasScrolled ? 'text-white' : 'text-white'
									} flex items-center`
								}>
									<Link to="/tours"       
									        onClick={() => window.scrollTo(0, 0)}
>
										Tours
									</Link>
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
									</svg>
								</button>

								{
								activeDropdown === 'tours' && (
									<div className="absolute left-0 w-64 bg-white rounded-md shadow-lg z-50">
										<div className="py-1">
											{/* Group tours by type (sub_category) */}
											{
											Object.entries(tourData.filter(item => item.category === 'tour').reduce((acc, tour) => {
												const type = tour.sub_category || 'Tour Packages'; // Define type here
												if (!acc[type]) 
													acc[type] = [];
												

												acc[type].push(tour);
												return acc;
											}, {})).map(([type, tours]) => (
												<div key={type}>
													<div className="px-4 py-2 text-gray-800 font-medium border-b">
														{type} </div>
													{
													tours.map(tour => (
														<a key={
																tour.id
															}
															href={
																`/tours/${
																	tour.slug
																}`
															}
															className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
															onClick={
																() => setActiveDropdown(null)
														}>
															{
															tour.title
														} </a>
													))
												} </div>
											))
										} </div>
									</div>
								)
							} </li>

							<li>
								<a href="/about"
								              onClick={() => window.scrollTo(0, 0)}

									className={
										`hover:text-blue-300 transition ${
											hasScrolled ? 'text-white' : 'text-white'
										}`
								}>
									About Us
								</a>
							</li>
							<li>
								<a href="/contact"
								              onClick={() => window.scrollTo(0, 0)}

									className={
										`hover:text-blue-300 transition ${
											hasScrolled ? 'text-white' : 'text-white'
										}`
								}>
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button onClick={
								() => setIsMenuOpen(!isMenuOpen)
							}
							className="focus:outline-none text-white"
							aria-label="Toggle menu">
							<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								{
								isMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
								)
							} </svg>
						</button>
					</div>
				</div>


				{/* Mobile Navigation Menu */}
				
			</div>
			<div className={
					`mobile-menu-container md:hidden fixed inset-0 z-[999] transition-transform duration-300 ease-in-out ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`
				}>
					<div className="absolute inset-0 bg-[#003049]/95 backdrop-blur-sm"
						onClick={
							() => setIsMenuOpen(false)
					}></div>
					<div className="relative bg-[#003049] h-full w-4/5 max-w-xs ml-auto shadow-xl overflow-y-auto">
						<div className="p-4 flex justify-between items-center border-b border-white/10">
							<Link to="/"
								onClick={
									() => setIsMenuOpen(false)
							}>
								<img className="h-10 w-auto rounded-xl py-1 bg-white/90"
									src={logo}
									alt="Company Logo"/>
							</Link>
							<button className="text-white hover:text-blue-300 p-2"
								onClick={
									() => setIsMenuOpen(false)
								}
								aria-label="Close menu">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
								</svg>
							</button>
						</div>

						<ul className="flex flex-col p-2 space-y-1 font-medium text-sm">
							{/* Home */}
							<li>
								<Link to="/" className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition"
									onClick={
										() => setIsMenuOpen(false)
								}>
									Home
								</Link>
							</li>

							{/* Mobile Trekkings Dropdown */}
							<li>
								<button className="w-full text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition flex justify-between items-center"
									onClick={
										() => toggleDropdown('mobile-trekkings')
								}>
									<Link to="/trekking"
										onClick={
											() => setIsMenuOpen(false)
									}>Trekkings</Link>
									<svg className={
											`w-4 h-4 transform transition-transform ${
												activeDropdown === 'mobile-trekkings' ? 'rotate-180' : ''
											}`
										}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
									</svg>
								</button>
								{
								activeDropdown === 'mobile-trekkings' && (
									<div className="pl-4 pb-2 space-y-1">
										{
										Object.entries(trekData.filter((item) => item.category === 'trekking').reduce((acc, trek) => {
											const region = trek.sub_category || 'Annapurna Region';
											if (!acc[region]) 
												acc[region] = [];
											
											acc[region].push(trek);
											return acc;
										}, {})).map(([region, treks]) => (
											<div key={region}>
												<div className="px-4 py-1 text-white/80 text-xs font-medium border-b border-white/10">
													{region}</div>
												{
												treks.map((trek) => (
													<Link key={
															trek.id
														}
														to={
															`/trekkings/${
																trek.slug
															}`
														}
														className="block px-4 py-1.5 text-white/70 text-sm hover:bg-white/10 rounded"
														onClick={
															() => {
																setIsMenuOpen(false);
																setActiveDropdown(null);
															}
													}>
														{
														trek.title
													} </Link>
												))
											} </div>
										))
									} </div>
								)
							} </li>

							{/* Mobile Activities Dropdown */}
							<li>
								<button className="w-full text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition flex justify-between items-center"
									onClick={
										() => toggleDropdown('mobile-activities')
								}>
									<Link to="/activity"
										onClick={
											() => setIsMenuOpen(false)
									}>Activities</Link>
									<svg className={
											`w-4 h-4 transform transition-transform ${
												activeDropdown === 'mobile-activities' ? 'rotate-180' : ''
											}`
										}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
									</svg>
								</button>
								{
								activeDropdown === 'mobile-activities' && (
									<div className="pl-4 pb-2 space-y-1">
										{
										Object.entries(activityData.filter((item) => item.category === 'activity').reduce((acc, activity) => {
											const type = activity.sub_category || 'Adventure Activities';
											if (!acc[type]) 
												acc[type] = [];
											
											acc[type].push(activity);
											return acc;
										}, {})).map(([type, activities]) => (
											<div key={type}>
												<div className="px-4 py-1 text-white/80 text-xs font-medium border-b border-white/10">
													{type}</div>
												{
												activities.map((activity) => (
													<Link key={
															activity.id
														}
														to={
															`/activities/${
																activity.slug
															}`
														}
														className="block px-4 py-1.5 text-white/70 text-sm hover:bg-white/10 rounded"
														onClick={
															() => {
																setIsMenuOpen(false);
																setActiveDropdown(null);
															}
													}>
														{
														activity.title
													} </Link>
												))
											} </div>
										))
									} </div>
								)
							} </li>

							{/* Mobile Tours Dropdown */}
							<li>
								<button className="w-full text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition flex justify-between items-center"
									onClick={
										() => toggleDropdown('mobile-tours')
								}>
									<Link to="/tours"
										onClick={
											() => setIsMenuOpen(false)
											
									}>Tours</Link>
									<svg className={
											`w-4 h-4 transform transition-transform ${
												activeDropdown === 'mobile-tours' ? 'rotate-180' : ''
											}`
										}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
									</svg>
								</button>
								{
								activeDropdown === 'mobile-tours' && (
									<div className="pl-4 pb-2 space-y-1">
										{
										Object.entries(tourData.filter((item) => item.category === 'tour').reduce((acc, tour) => {
											const type = tour.sub_category || 'Tour Packages';
											if (!acc[type]) 
												acc[type] = [];
											
											acc[type].push(tour);
											return acc;
										}, {})).map(([type, tours]) => (
											<div key={type}>
												<div className="px-4 py-1 text-white/80 text-xs font-medium border-b border-white/10">
													{type}</div>
												{
												tours.map((tour) => (
													<Link key={
															tour.id
														}
														to={
															`/tours/${
																tour.slug
															}`
														}
														className="block px-4 py-1.5 text-white/70 text-sm hover:bg-white/10 rounded"
														onClick={
															() => {
																setIsMenuOpen(false);
																setActiveDropdown(null);
															}
													}>
														{
														tour.title
													} </Link>
												))
											} </div>
										))
									} </div>
								)
							} </li>

							{/* About Us */}
							<li>
								<Link to="/about" className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition"
									onClick={
										() => setIsMenuOpen(false)
								}>
									About Us
								</Link>
							</li>

							{/* Contact Us */}
							<li>
								<Link to="/contact" className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition"
									onClick={
										() => setIsMenuOpen(false)
								}>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
		</nav>
	);
};

export default Navbar;
