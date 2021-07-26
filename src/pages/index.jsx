/*index.jsx*/
import React from "react";
//You have to use the link component to link between pages using react router
import { Link } from "react-router-dom";

//Functional Component 
const HomePage = () => {
  return (
    <div>
      <h3>Welcome to the Dine Mine!</h3>
      <small>Home Page</small>
      <Link to="/maplocations">Show Locations</Link>
    </div>
  );
};

export default HomePage;