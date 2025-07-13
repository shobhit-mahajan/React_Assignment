import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import CreateChallengeSection from './components/CreateChallengeSection';
import PreviewSection from './components/PreviewSection';
import { Navbar } from './components/Navbar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Main Content Area */}
      <div className="flex flex-1 pt-14 sm:pt-16">
        {/* Left Sidebar - Navigation + Completion Section */}
        <LeftSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] w-full">
          {/* Create Challenge Section */}
          <div className="flex-1 lg:flex lg:flex-col p-2 sm:p-4 lg:p-4 w-full">
            <CreateChallengeSection />
          </div>
          
          {/* Right Preview Section */}
          <div className="lg:flex lg:flex-col p-2 sm:p-4 lg:p-6 lg:pl-0 w-full lg:w-auto">
            <PreviewSection />
          </div>
        </div>
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