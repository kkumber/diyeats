import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Meal from './pages/Meal';
import Ingredients from './components/Ingredients';

function App() {
  return (
    <Router>
    <div className="App">
      <main>
      <Home />
      <Routes>
        <Route path='/' element={<Ingredients />} />
        <Route path='/pages/Search' element={<Search />}/>
        <Route path='/pages/Meal' element={<Meal />}/>
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
