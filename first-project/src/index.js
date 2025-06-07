import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Correct import


function UserCard() {
  return (
    <div>
    <h2>John Doe</h2>
    <p>Web Developer</p>
    </div>
  );
}

function Footer() {
  return (
    <p>@ 2025 My App</p>
  );
}

function App() {
  return(
    <div>
      <UserCard />
    <Footer />
    </div>    
  );
}

const container = document.getElementById('root');
const root = createRoot(container); // ✅ createRoot is now defined
root.render(<App />);
