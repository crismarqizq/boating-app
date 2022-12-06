import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import UserContext from './UserContext';
import Home from "./components/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { ConfigProvider } from "antd";


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
            <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </UserContext.Provider>
  );
}

export default App;
