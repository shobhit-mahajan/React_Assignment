import React from 'react';
import { Wifi, Battery, Signal, ChevronRight, Play, ChevronLeft } from 'lucide-react';

const PreviewSection: React.FC = () => {
  return (
    <div className="w-full lg:w-[350px] xl:w-[330px] border-t lg:border-l border-gray-200 flex flex-col min-h-screen bg-white sm:mx-3 rounded-lg shadow-lg mx-auto my-4 sm:my-6">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="text-base sm:text-lg lg:text-xl font-medium text-gray-900">Preview Challenge</div>
        </div>
      </div>

      {/* Mobile Preview */}
      <div className="p-2 sm:p-4 lg:px-2 lg:py-5 flex-1 flex items-center justify-center w-full h-80 sm:h-96">
        <div className="bg-black rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 w-full  sm:max-w-sm lg:max-w-sm mx-auto">
          <div className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Status bar */}
            <div className="flex justify-between items-center px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm">
              <span className="font-medium">13:13</span>
              <div className="flex items-center space-x-0.5 sm:space-x-1">
                <Signal size={12} className="sm:w-4 sm:h-4" />
                <Wifi size={12} className="sm:w-4 sm:h-4" />
                <Battery size={12} className="sm:w-4 sm:h-4" />
              </div>
            </div>
            
            {/* App content */}
            <div className="bg-slate-800 px-3 sm:px-4 py-4 sm:py-6 min-h-[200px] sm:min-h-96">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-400 rounded flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-xs sm:text-sm">M</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-xs sm:text-sm truncate">Move for MS-Aldar</h4>
                  <p className="text-gray-400 text-xs truncate">Community Challenge 2025</p>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-3 sm:p-6 lg:p-8 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gray-700 rounded-lg mx-auto mb-2 sm:mb-3"></div>
                  <p className="text-gray-400 text-xs sm:text-sm">Banner Image</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h5 className="text-white font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">Description</h5>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Fitness and very easy steps challenge and finish your
                    personal journey to move with your
                    colleagues.
                  </p>
                  <p className="text-gray-400 text-xs mt-1.5 sm:mt-2">
                    It's easy - lace up your shoes, gather your loved ones, and
                    start moving for the day!
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">Details</h5>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Rules</span>
                      <span className="text-emerald-400">›</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Start Date</span>
                      <span className="text-white">03-Mar-2025</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">End Date</span>
                      <span className="text-white">30-Mar-2025</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Teams</span>
                      <span className="text-white">29 Teams</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-emerald-400 text-slate-800 font-medium py-2.5 sm:py-3 rounded-lg mt-4 sm:mt-6 text-xs sm:text-sm">
                JOIN CHALLENGE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="border-t border-gray-200 pt-4 pb-4 px-4 relative bg-transparent">
        {/* Header */}
        <div className="flex items-center justify-between pb-3">
          <h3 className="text-base font-semibold text-gray-900">Need Help</h3>
          <button className="text-xs font-medium text-gray-500 hover:text-emerald-600 transition-colors">View all &gt;</button>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md pt-0 pb-4 px-0 relative flex flex-col items-center">
          {/* Video/Image Section */}
          <div className="relative w-full flex justify-center" style={{height: '140px', maxHeight: '160px'}}>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop"
              alt="Team challenge tutorial"
              className="w-full h-full object-cover rounded-t-2xl"
              style={{maxHeight: '140px'}}
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md">
                <Play size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-emerald-500" />
              </span>
            </button>
          </div>
          {/* Content */}
          <div className="flex items-start w-full px-4 pt-4">
            <div className="flex-shrink-0 mt-1 mr-3">
              <span className="bg-emerald-100 text-emerald-600 rounded-lg p-2 flex items-center justify-center">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#34D399" fillOpacity=".15"/><path d="M8.5 10.5h7m-7 3h4.5M12 6.5v11" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">How to create a team challenge</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Create a team challenge in just a few steps. Set your goals, choose the challenge type, invite your team, and get everyone moving together!</p>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 mb-2 w-full">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <div
                key={dot}
                className={`mx-1 w-2 h-2 rounded-full ${index === 0 ? 'bg-emerald-400' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
        {/* Prev/Next Buttons */}
        <div className="absolute right-4 bottom-6 flex items-center space-x-2 pointer-events-none">
          <button className="w-6 h-6 sm:w-7 sm:h-7 bg-slate-800 rounded-lg flex items-center justify-center shadow pointer-events-auto transition-colors" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <ChevronLeft size={16} className="sm:w-4 sm:h-4 text-white" />
          </button>
          <button className="w-6 h-6 sm:w-7 sm:h-7 bg-emerald-400 rounded-lg flex items-center justify-center shadow pointer-events-auto transition-colors" style={{boxShadow: '0 2px 8px rgba(52,211,153,0.18)'}}>
            <ChevronRight size={16} className="sm:w-4 sm:h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;