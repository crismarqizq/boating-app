import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import UserContext from './UserContext';
import Login from "./pages/login";
import Register from "./pages/register";
import { ConfigProvider } from "antd";
import Boats from "./pages/boats";
import Bookings from "./pages/bookings";
import Dashboard from "./pages/dashboard";
import PortsPage from "./pages/ports";


function App() {


  const [user, setUser] = useState(null)
  const userContextProviderValues = { user, setUser }


  return (
    <UserContext.Provider value={userContextProviderValues}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#11BFAE',
          },
        }}
      >
        <Router>
          <Routes>
            <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
            <Route path="/" element={user ? <Dashboard /> : <Navigate replace to="/login" />}>
              <Route path="ports" element={user ? <PortsPage /> : <Navigate replace to="/login" />} />
              <Route path="boats" element={user ? <Boats /> : <Navigate replace to="/login" />} />
              <Route path="bookings" element={user ? <Bookings /> : <Navigate replace to="/login" />} />
            </Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </UserContext.Provider>
  );
}

export default App;
