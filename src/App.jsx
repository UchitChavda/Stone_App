import { useState } from "react";
import { Grid, Col } from 'rsuite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Pages/Sidebar';
import Main from './Pages/BillForm';
import ViewTransporter from './Pages/Customer';
import AddVehicle from './Pages/Transporter';
import Login from './Pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Grid fluid style={{ padding: "0px" }}>
        {isAuthenticated && (
          <Col lg={1} md={1} sm={1} xs={1} style={{ padding: "0%" }}>
            <Sidebar />
          </Col>
        )}
        <Col
          style={{ padding: isAuthenticated ? '1%' : '0%' }}
          xs={isAuthenticated ? 23 : 24}
          sm={isAuthenticated ? 23 : 24}
          md={isAuthenticated ? 23 : 24}
          lg={isAuthenticated ? 23 : 24}
        >
          <Routes>
            <Route path="/" element={isAuthenticated ? <Main /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/TransporterS" element={<ViewTransporter />} />
            <Route path="/Vechiles" element={<AddVehicle />} />
          </Routes>
        </Col>
      </Grid>
    </Router>
  );
}

export default App;
