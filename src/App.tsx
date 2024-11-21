import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Meal from './pages/Meal';
import Ingredients from './components/Ingredients';
import Navbar from './pages/Navbar';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Explore from './pages/Explore';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/Search' element={<Search />}/>
        <Route path='/pages/Meal' element={<Meal />}/>
        <Route path='/pages/Favorites' element={<Favorites />} />
        <Route path='/pages/Explore' element={<Explore />} />
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
