import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Login from "./LoginSignup/Login.jsx";
import Signup from "./LoginSignup/Signup.jsx";
// import Popup from "./Popup.jsx";
import Filter from "./Filter.jsx";
// import LoginPopup from "./LoginPopup.jsx";
function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <Router>
      <div>
        <Header user={user} handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/Login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/Popup" component={Filter}/>
          {/* <Route path="/LoginPopup" component={LoginPopup}/> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// this is app
