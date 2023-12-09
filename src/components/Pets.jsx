import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import petsData from '../pets.json';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px', 
    justifyContent: 'space-between', 
  },
  card: {
    maxWidth: 345,
    width: '30%', 
    marginBottom: '20px',
  },
}));

function Pets({ onCardClick }) {

  const [pets, setPets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setPets(petsData.pets);
  },[]);

  const openDetails =(petId) => 
  {
    const selectedPet = pets.find((pet) => pet.id === petId);
    onCardClick(selectedPet)
  }

  return (
    <div className={classes.cardContainer}>
      {pets.map((pet) => (
        <Card key={pet.id} className={classes.card} onClick={()=>openDetails(pet.id)} >
          <CardMedia sx={{ height: 250 }} image={pet.image} title={pet.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pet.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {pet.Category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>openDetails(pet.id)}>Share</Button>
            <Button size="small" onClick={()=>openDetails(pet.id)}>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Pets;


