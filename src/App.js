import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChartPage from './pages/ChartPage';
import SMSGatewayPage from './pages/SmsGatewayPage';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/sms-gateway" element={<SMSGatewayPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
