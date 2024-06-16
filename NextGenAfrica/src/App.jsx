import React from 'react';
import './App.css';

function App() {
	  return (
		      <div className="App">
		        <header className="bg-blue-500 p-4">
		          <h1 className="text-white text-3xl">NextGen Africa</h1>
		          <nav>
		            <ul className="flex space-x-4">
		              <li><a href="#linux" className="text-white">Linux</a></li>
		              <li><a href="#mongodb" className="text-white">MongoDB</a></li>
		              <li><a href="#frontend" className="text-white">Frontend</a></li>
		              <li><a href="#backend" className="text-white">Backend</a></li>
		            </ul>
		          </nav>
		        </header>
		        <main>
		          {/* Sections will be rendered here */}
		        </main>
		        <footer className="bg-gray-800 text-white p-4">
		          <p>&copy; 2024 NextGen Africa. All rights reserved.</p>
		        </footer>
		      </div>
		    );
}

export default App;

