import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import React from 'react';
import fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitening.png';
import Service from '../OurServices/Service/Service';

const services = [
	{
		name: 'Fluoride Treatment',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
		img: fluoride,
	},
	{
		name: 'Cavity Filling',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
		img: cavity,
	},
	{
		name: 'Teeth Whitening',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
		img: whitening,
	},
];

const OurServices = () => {
	return (
		<Container>
			<Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', pb: 8 }}>
				<Typography
					color={cyan[600]}
					variant='h5'
					gutterBottom
					component='div'
				>
					Our Services
				</Typography>
				<Typography variant='h4' gutterBottom component='div'>
					Services We Provide
				</Typography>
			</Box>

			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 12, sm: 8, md: 12 }}
				>
					{services.map(service => (
						<Service service={service} />
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default OurServices;
