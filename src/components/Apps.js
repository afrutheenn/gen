import React, { useState } from 'react';
import './App.css'; // Assuming you have some CSS for styling

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleNavbar}>Toggle Navbar</button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
