import React from 'react';
import NavBar from '../../Shared/AppBar/NavBar';
import OurServices from './OurServices/OurServices';
import Features from './Features/Features';

const Home = () => {
	return (
		<div>
			<NavBar />
			<OurServices />
			<Features />
		</div>
	);
};

export default Home;
