import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react';

const Service = ({ service }) => {
	const { name, description, img } = service;
	return (
		<Grid item xs={12} sm={4} md={4}>
			<Card sx={{ maxWidth: 345, boxShadow: 0 }}>
				<CardActionArea sx={{ py: 4 }}>
					<CardMedia
						sx={{ width: 'auto', m: '0 auto' }}
						component='img'
						image={img}
						alt={name}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{name}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default Service;
