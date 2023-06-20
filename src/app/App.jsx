import React, {useEffect} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import Create from "../components/Pages/Create";
import Mint from "../components/Pages/Mint";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../components/Pages/Login";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";

import MarketplaceAbi from '../components/contractsData/Marketplace.json'
import MarketplaceAddress from '../components/contractsData/Marketplace-address.json'
import NFTAbi from '../components/contractsData/NFT.json'
import NFTAddress from '../components/contractsData/NFT-address.json'
import { useState } from 'react'
import { ethers } from "ethers"
let flag=0;

const App = () => {
  const { language } = useSelector(state => state.musicReducer);
  const dispatch = useDispatch();


    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/create" component={Create} />
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;