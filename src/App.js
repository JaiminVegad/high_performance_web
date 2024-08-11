import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;