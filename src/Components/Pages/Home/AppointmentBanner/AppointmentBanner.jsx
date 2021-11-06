import React from 'react';
import { Box } from '@mui/system';
import { cyan, blueGrey } from '@mui/material/colors';
import { Button, Grid, Typography } from '@mui/material';
import doctor from '../../../../images/doctor.png';
import appointmentBg from '../../../../images/appointment-bg.png';

const appointmentBgSet = {
	background: `url(${appointmentBg})`,
	backgroundColor: `${blueGrey[800]}`,
	backgroundBlendMode: 'overlay',
	color: 'white',
};

const AppointmentBanner = () => {
	return (
		<Box style={appointmentBgSet}>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					md={5}
					sx={{
						marginTop: '-130px',
					}}
				>
					<img style={{ width: '100%' }} src={doctor} alt='' />
				</Grid>
				<Grid
					item
					xs={12}
					md={7}
					sx={{
						display: 'flex',
						alignItems: 'center',
						textAlign: 'left',
					}}
				>
					<Box>
						<Box
							sx={{
								textTransform: 'uppercase',
								fontWeight: 'bold',
							}}
						>
							<Typography
								color={cyan[300]}
								variant='h5'
								gutterBottom
								component='div'
							>
								Appoinment
							</Typography>
							<Typography
								variant='h2'
								gutterBottom
								component='div'
							>
								Make An Appoinment Today!
							</Typography>
						</Box>
						<Typography variant='p' gutterBottom component='div'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Adipisci odit maxime, voluptate sed officiis
							vitae iure laboriosam nostrum qui.
						</Typography>
						<Button variant='contained' size='large' sx={{ mt: 3 }}>
							Learn More
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AppointmentBanner;
