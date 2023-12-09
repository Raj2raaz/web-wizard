import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ pet }) {
  const [open, setOpen] = React.useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleOpen = (pet) => {
    setSelectedPet(pet);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (pet) {
      handleOpen();
    }
  }, [pet]);

  return (
    <div>
      <Button onClick={() => handleOpen(selectedPet)}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {pet && (
              <>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <Card>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={pet.image}
                      title={pet.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {pet.name}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      {pet.Category}
                      </Typography>
                    </CardContent>
                  </Card>
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  
                  {pet.price}
                  {pet.breed}
                  {pet.age}
                  {pet.gender}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
