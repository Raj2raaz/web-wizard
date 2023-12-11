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
import SendIcon from '@mui/icons-material/Send';
import PetsIcon from '@mui/icons-material/Pets';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ pet }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
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
      <Button onClick={handleOpen}>Open modal</Button>
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
                <Card>
                  <CardMedia
                    sx={{ height: 250 }}
                    image={pet.image}
                    title={pet.name}
                  />
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div>
                      <Typography gutterBottom variant="h5" component="div">
                        {pet.name}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        {pet.Category}
                      </Typography>
                    </div>
                    
                    <div>
                      <Typography variant="body2" component="div">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "5px",
                          }}
                        >
                          <div style={{ width: "90px" }}>Price:</div>
                          <div>{pet.price}</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "5px",
                          }}
                        >
                          <div style={{ width: "90px" }}>Breed:</div>
                          <div>{pet.breed}</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "5px",
                          }}
                        >
                          <div style={{ width: "90px" }}>Age:</div>
                          <div>{pet.age}</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ width: "90px" }}>Gender:</div>
                          <div>{pet.gender}</div>
                        </div>
                        
                      </Typography>
                    </div>
                    <div>
                      <Typography>
                        <div className="container-popup">
                          <div className="submit-popup" onClick={handleClose}> More <PetsIcon sx={{ fontSize: 20, marginLeft: '5px' }}/></div>
                        
                          <div className="submit-popup">Enquiry <SendIcon sx={{ fontSize: 20, marginLeft: '5px' }}/></div>
                        </div>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
