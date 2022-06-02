import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import HomeTable from './components/HomeTable';
import React from "react";
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<HomeTable />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
