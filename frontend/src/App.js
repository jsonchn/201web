import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Auth from './Auth'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/login' element={<Auth />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
