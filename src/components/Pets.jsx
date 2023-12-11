import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import petsData from "../pets.json";
import { makeStyles } from "@mui/styles";
import PopupComponent from "./Popup";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-between",
  },
  card: {
    maxWidth: 345,
    width: "30%",
    marginBottom: "20px",
  },
}));

function Pets({ onCardClick }) {
  const [pets, setPets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setPets(petsData.pets);
  }, []);

  const openDetails = (petId) => {
    if (petId === selectedPetId && popupOpen) {
      setPopupOpen(false); // Toggle the popupOpen state
    } else {
      setSelectedPetId(petId);
      setPopupOpen(true);
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  return (
    <div className={classes.cardContainer}>
      {pets.map((pet) => (
        <Card
          key={pet.id}
          className={classes.card}
          onClick={() => openDetails(pet.id)}
        >
          <CardMedia sx={{ height: 250 }} image={pet.image} title={pet.name} />
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{pet.name}</span>
            <span>{pet.Category}</span>
          </CardContent>

          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button size="small" onClick={() => openDetails(pet.id)}>
              More about
            </Button>
          </CardActions>
        </Card>
      ))}
      {popupOpen && selectedPet && (
        <PopupComponent
          pet={selectedPet}
          open={popupOpen}
          onClose={closePopup}
        />
      )}
    </div>
  );
}

export default Pets;

