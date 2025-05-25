import React from 'react';
import Header from './components/Header'; // Import
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div class='main'>
      <div>
      <Header /> {/* Use */}
      </div>
      <div style={{display:"flex"}}>
        <Sidebar />
      
      <div>
        <Dashboard />
      </div>
      </div>
    </div>
  );
}

export default App;
