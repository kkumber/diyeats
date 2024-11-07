import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
