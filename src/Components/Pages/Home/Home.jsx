import React from 'react';
import NavBar from '../../Shared/AppBar/NavBar';
import OurServices from './OurServices/OurServices';
import Features from './Features/Features';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Home = () => {
	return (
		<div>
			<NavBar />
			<OurServices />
			<Features />
			<AppointmentBanner />
		</div>
	);
};

export default Home;
