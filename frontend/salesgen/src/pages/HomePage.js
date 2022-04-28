import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MultiActionAreaCard from "../Components/Card"
import Stack from '@mui/material/Stack';
import "../App.css"

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <React.Fragment>
        <div className="App">
            <div className="appAside">
                <img className='home-img' alt='home' src={require("../assets/homeimage.png")}/>
            </div>
            <div className="appForm">        
              <div className='salesgen'>
                SALESGEN
              </div>

                <Stack direction="row" spacing={4}>
                    <MultiActionAreaCard className="card" image = {require("../assets/history.png")} heading = {"Generation History"} description = {"See what you have generated previously"} link={"history"}/>
                    <MultiActionAreaCard className="card" image = {require("../assets/model.png")} heading = {"Choose a Model"} description = {"What would you like to generate: title, features list or description?"} link ={"generate"}/>
                    <MultiActionAreaCard className="card" image = {require("../assets/help.png")} heading = {"Help"} description = {"Click here to understand what this application is for and how to use it."} link = {"help"}/>
                </Stack>
            
              </div>
              </div>
              </React.Fragment>
    );
  }
}

export default HomePage;
