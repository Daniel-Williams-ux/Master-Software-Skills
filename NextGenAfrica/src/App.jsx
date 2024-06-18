import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
	  return (
		      <div className="App">
		        <Header />
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


