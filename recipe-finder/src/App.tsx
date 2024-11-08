import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import FoodRecipe from './pages/FoodRecipe';

function App() {
  return (
    <Router>
    <div className="App">
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/SearchResult' element={<SearchResult />}/>
        <Route path='/pages/FoodRecipe' element={<FoodRecipe />}/>
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
