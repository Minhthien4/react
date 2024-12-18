import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPages.pages';
import ProfileForm from "./pages/Profile.admin";
import {Home} from "./pages/Home.admin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfileForm />} />
      </Routes>
    </Router>
  );
}

export default App;
