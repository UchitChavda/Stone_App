import logo from './logo.svg';
import './App.css';
import { Card, Grid } from '@mui/material';
import Sidebar from './Pages/Sidebar';
import Topbar from './Pages/Topbar';
import Main from './Pages/XYZ';
import { useState } from 'react';

function App() {

  var [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      <Grid container spacing={2} lg={12} md={12} sm={12} xs={12}>
        {isHovered && (
          <>
            <Grid item lg={2} md={2} sm={2} xs={2}>
              <Sidebar isHovered={isHovered} setIsHovered={setIsHovered} />
            </Grid>
            <Grid item lg={10} md={10} sm={10} xs={10}>
              <Topbar />
              <Main />
            </Grid>
          </>
        )}

        {!isHovered && (
          <>
            <Grid item lg={1} md={1} sm={1} xs={1}>
              <Sidebar isHovered={isHovered} setIsHovered={setIsHovered} />
            </Grid>
            <Grid item lg={11} md={11} sm={11} xs={11}>
              <Topbar />
              <Main />
            </Grid>
          </>
        )}

      </Grid>
    </div>
  );
}

export default App;
