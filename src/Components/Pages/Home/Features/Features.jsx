import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { blueGrey, cyan } from '@mui/material/colors';
import React from 'react';
import treatment from '../../../../images/treatment.png';

const Features = () => {
	return (
		<Container sx={{ py: 10 }}>
			<Grid
				container
				spacing={4}
				sx={{ display: 'flex', alignItems: 'center' }}
			>
				<Grid item xs={5}>
					<img style={{ width: '100%' }} src={treatment} alt='' />
				</Grid>
				<Grid item xs={6}>
					<Box sx={{ textAlign: 'left' }}>
						<Typography
							variant='h2'
							color={blueGrey[900]}
							sx={{ fontWeight: 'bold', mb: 3 }}
						>
							Exceptional Dental Cares on Your Terms
						</Typography>
						<Typography
							variant='p'
							sx={{ fontSize: 'h6.fontSize' }}
							color={blueGrey['A400']}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Aliquam aspernatur obcaecati facere, omnis
							libero saepe ut at quas consectetur reprehenderit
							nemo, eaque necessitatibus inventore delectus
							quisquam ipsam eos praesentium dolores eveniet
							sapiente rerum maiores. Esse, pariatur. Dolor,
							veniam! Tempora ipsam dolore explicabo ut magnam sed
							veritatis labore. A dolorum maxime nobis corrupti.
							Ducimus facilis in sit, laborum quod ex reiciendis
							ad soluta inventore architecto praesentium delectus
							eveniet? Earum, suscipit! Beatae, laudantium
							temporibus voluptas in excepturi neque nulla
							expedita delectus minus ullam voluptates a atque
							quis!
						</Typography>
						<Button variant='contained' size='large' sx={{ my: 3 }}>
							Learn More
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Features;
