import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Filter from "./Filter"; // Import the SearchBar component
import { Link, useLocation } from "react-router-dom";

function Header({ user, handleLogout, showSearchBar }) {
  const location = useLocation();

  return (
    <header>
      <Link to="/" className="LinkTitle">
        <h1>
          <PetsIcon style={{ marginRight: "8px" }} />
          New Hommie!
        </h1>
      </Link>
      
      {showSearchBar && location.pathname === "/" && <Filter/>} 
      
      {user ? (
        <div>
          <div className="user-name">
            <p>Welcome</p>
            <p className="user-name">{user.name}</p> 
          </div>
          <Button variant="" onClick={handleLogout}>
            <LogoutIcon/>
          </Button>
        </div>
      ) : (
        <div>
          {location.pathname === "/login" ? (
            <Link to="/signup">
              <Button variant="contained">Sign Up</Button>
            </Link>
          ) : location.pathname === "/signup" ? (
            <Link to="/login">
              <Button variant="contained">Login</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="contained">Sign Up / Login</Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
