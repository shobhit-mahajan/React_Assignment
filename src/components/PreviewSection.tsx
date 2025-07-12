import React from 'react';
import { Wifi, Battery, Signal, ChevronRight, Play, ChevronLeft } from 'lucide-react';

const PreviewSection: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 xl:w-2/5 bg-white border-t lg:border-l border-gray-200 flex flex-col min-h-screen bg-white mx-2 sm:mx-3 lg:mx-6 rounded-lg shadow-lg  mx-auto my-4 sm:my-6">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="text-base sm:text-lg lg:text-xl font-medium text-gray-900">Preview Challenge</div>
        </div>
      </div>

      {/* Mobile Preview */}
      <div className="p-3 sm:p-4 lg:p-6 flex-1 flex items-center justify-center">
        <div className="bg-black rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 w-full max-w-[200px] sm:max-w-sm lg:max-w-sm mx-auto">
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
            <div className="bg-slate-800 px-3 sm:px-4 py-4 sm:py-6 min-h-[250px] sm:min-h-96">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-400 rounded flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-xs sm:text-sm">M</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-xs sm:text-sm truncate">Move for MS-Aldar</h4>
                  <p className="text-gray-400 text-xs truncate">Community Challenge 2025</p>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-700 rounded-lg mx-auto mb-2 sm:mb-3"></div>
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
      <div className="border-t border-gray-200 p-3 sm:p-4 lg:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">Need Help</h3>
          <button className="text-emerald-600 text-xs sm:text-sm font-medium hover:text-emerald-700 flex items-center">
            View all <ChevronRight size={12} className="ml-1 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-3 sm:p-4 relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-2 sm:pr-4 min-w-0">
              <h4 className="font-medium text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">How to create a team challenge</h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Create a team challenge in just a few steps. Set your goals, choose the
                challenge type, invite your team, and get everyone moving together!
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                alt="Team challenge tutorial" 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
              />
              <button className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <Play size={12} className="text-white ml-0.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <div
                key={dot}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                  index === 0 ? 'bg-emerald-400' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-3 sm:mt-4">
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
            <ChevronLeft size={12} className="text-white sm:w-4 sm:h-4" />
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-400 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
            <ChevronRight size={12} className="text-slate-800 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;