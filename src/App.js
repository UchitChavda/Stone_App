import logo from './logo.svg';
import './App.css';
import { Card, Grid } from '@mui/material';
import Sidebar from './Pages/Sidebar';
import Topbar from './Pages/Topbar';
import Main from './Pages/BillForm';
import { useState } from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewTransporter from './Pages/ViewTransporter';
import AddVehicle from './Pages/AddVehicle';
import MenuButton from './Pages/MenuButton';


function App() {

  var [isHovered, setIsHovered] = useState(false)

  return (
    <Router>
      <div>
        <Grid container columnSpacing={2} lg={12} md={12} sm={12} xs={12}>
          {isHovered && (
            <>
              <Grid item lg={2} md={2} sm={2} xs={2}>
                <Sidebar />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <MenuButton isHovered={isHovered} setIsHovered={setIsHovered} />
                <Topbar />
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/vtrns" element={<ViewTransporter />} />
                  <Route path="/addvhcl" element={<AddVehicle />} />
                </Routes>
              </Grid>
            </>
          )}

          {!isHovered && (
            <>
              {/* <Grid item lg={1} md={0} sm={0} xs={0}>
                <Sidebar isHovered={isHovered} setIsHovered={setIsHovered} />
              </Grid> */}
              <Grid item lg={12} md={12} sm={12} xs={12} style={{marginLeft: '16px', marginTop: '16px'}}>
                <MenuButton isHovered={isHovered} setIsHovered={setIsHovered} />
                <Topbar />
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/vtrns" element={<ViewTransporter />} />
                  <Route path="/addvhcl" element={<AddVehicle />} />
                </Routes>
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </Router>
  );
}

export default App;
