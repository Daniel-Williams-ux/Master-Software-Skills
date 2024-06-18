import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'; 
import Overview from './pages/Overview';
import About from './pages/About'; 

function App() {
	  return (
		      <div className="App">
		        <Header />
		        <main>
		          <Routes>
		            <Route path="/" element={<Home />} />
		            <Route path="/overview" element={<Overview />} />
		            <Route path="/about" elememt={<About />} />
		          </Routes>
		        </main>
		        <footer className="bg-gray-800 text-white p-4">
		          <p>&copy; 2024 NextGen Africa. All rights reserved.</p>
		        </footer>
		      </div>
		    );
}

export default App;


