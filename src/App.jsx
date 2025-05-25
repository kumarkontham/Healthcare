import React from 'react';
import Header from './components/Header'; // Import
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';
import Mainview from './components/mainview';
function App() {
  return (
    <div class='main'>
      <div>
      <Header /> {/* Use */}
      </div>
      <div style={{display:"flex"}}>
        <Sidebar />
      
      <div>
        <Mainview />
      </div>
      </div>
    </div>
  );
}

export default App;
