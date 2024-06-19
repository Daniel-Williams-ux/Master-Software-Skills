import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'; 
import Overview from './pages/Overview';
import About from './pages/About'; 

function App() {
	  return (
		      <div className="p-2">
		        <Header />
		          <Routes>
		            <Route path="/" element={<Home />} />
		            <Route path="/overview" element={<Overview />} />
		            <Route path="/about" element={<About />} />
		          </Routes>
		      </div>
		    );
}

export default App;


