import React from 'react';
import NavBar from '../../Shared/AppBar/NavBar';
import OurServices from './OurServices/OurServices';
import Features from './Features/Features';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import ContactForm from './ContactForm/ContactForm';

const Home = () => {
	return (
		<div>
			<NavBar />
			<OurServices />
			<Features />
			<AppointmentBanner />
			<ContactForm />
		</div>
	);
};

export default Home;
