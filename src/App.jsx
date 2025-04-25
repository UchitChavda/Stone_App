import { useState } from "react";
import { Grid, Col } from 'rsuite';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Pages/Sidebar';
import Main from './Pages/BillForm';
import ViewCustomer from './Pages/Customer';
import AddVehicle from './Pages/Transporter';
import Login from './Pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <Grid fluid style={{ padding: "0px" }}>
        {isAuthenticated && (
          <Col lg={1} md={1} sm={1} xs={1} style={{ padding: "0%" }}>
            <Sidebar />
          </Col>
        )}
        <Col
          style={{ padding: isAuthenticated ? '1%' : '0%', maxHeight: "100vh", overflowY: "scroll", }}
          xs={isAuthenticated ? 23 : 24}
          sm={isAuthenticated ? 23 : 24}
          md={isAuthenticated ? 23 : 24}
          lg={isAuthenticated ? 23 : 24}
        >
          <Routes>
            <Route path="/" element={isAuthenticated ? <Main /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/Transporter"  />
            <Route path="/Customers" element={<ViewCustomer />} />
            <Route path="/*" element={ <Navigate to="/" />} />
          </Routes>
        </Col>
      </Grid>
    </Router>
  );
}

export default App;