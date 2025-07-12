import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import CreateChallengeSection from './components/CreateChallengeSection';
import PreviewSection from './components/PreviewSection';
import { Navbar } from './components/Navbar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Left Sidebar - Navigation + Completion Section */}
      <LeftSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row mt-16 lg:mt-16">
        {/* Create Challenge Section */}
        <div className="flex-1 min-w-0">
          <CreateChallengeSection />
        </div>
        
        {/* Right Preview Section */}
        <PreviewSection />
      </div>
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;