import React from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { cyan, blueGrey } from '@mui/material/colors';
import appointmentBg from '../../../../images/appointment-bg.png';
import { Container, Typography } from '@mui/material';

const appointmentBgSet = {
	background: `url(${appointmentBg})`,
	backgroundColor: `${blueGrey[800]}`,
	backgroundBlendMode: 'overlay',
	color: 'white',
};

const ContactForm = () => {
	return (
		<Box style={appointmentBgSet} sx={{ py: 5, my: 20 }}>
			<Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', pb: 8 }}>
				<Typography
					color={cyan[600]}
					variant='h5'
					gutterBottom
					component='div'
				>
					Contact Us
				</Typography>
				<Typography variant='h4' gutterBottom component='div'>
					Always Connect With Us
				</Typography>
			</Box>
			<Container
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: 2 / 4 },
				}}
				noValidate
				autoComplete='off'
			>
				<TextField
					sx={{ backgroundColor: 'white' }}
					type='email'
					placeholder='Email'
				/>
				<TextField
					sx={{ backgroundColor: 'white' }}
					type='text'
					placeholder='Email'
				/>
				<TextField
					sx={{ backgroundColor: 'white' }}
					multiline
					rows={4}
					placeholder='Your Messages'
				/>
			</Container>
		</Box>
	);
};

export default ContactForm;
