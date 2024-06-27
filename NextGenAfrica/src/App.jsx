import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'; 
import Models from './pages/Models';
import Ownership from './pages/Ownership'; 
import Experience from './pages/Experience'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 

function App() {
	  return (
		      <div className="p-2">
		        <Header />
		          <Routes>
		            <Route path="/" element={<Home />} />
		            <Route path="/models" element={<Models />} />
					<Route path="/ownership" element={<Ownership />} />
					<Route path="/experience" element={<Experience />} />
		            <Route path="/about" element={<About />} />
					<Route path="/contact us" element={<Contact Us/>} />
		          </Routes>
		      </div>
		    );
}

export default App;


