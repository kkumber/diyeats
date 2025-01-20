import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Main/Home';
import Search from './pages/SubPages/Search';
import Meal from './pages/SubPages/Meal';
import Ingredients from './components/Ingredients';
import Navbar from './pages/Navbar';
import Favorites from './pages/Main/Favorites';
import Header from './components/Header';
import Explore from './pages/Main/Explore';
import ProtectedRoute from './pages/AuthPages/ProtectedRoute';
import Login from './pages/AuthPages/Login';
import Register from './pages/AuthPages/Register';
import NotFoundPage from './pages/NotFoundPage';
import AuthProvider from './pages/AuthPages/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="App">
        <Header />
        <div className="px-4">
          <Navbar />
        </div>
        <main className="px-4">
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route path='/pages/Favorites' element={<Favorites />} />
          </Route>
          <Route path='/' element={<Home />}/>
          <Route path='/pages/Search' element={<Search />}/>
          <Route path='/pages/Meal' element={<Meal />}/>
          <Route path='/pages/Explore' element={<Explore />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        </main>
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
