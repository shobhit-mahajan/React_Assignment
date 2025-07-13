import React from 'react';
import { RiHome5Fill } from "react-icons/ri";
import { FaCrown, FaUser, FaUserPlus } from "react-icons/fa";
import { BsAwardFill, BsFillTrophyFill } from "react-icons/bs";
import { MdFeed } from "react-icons/md";
import { IoLayers, IoSettings } from "react-icons/io5";
import { LuBlocks } from "react-icons/lu";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Check, Info, X } from 'lucide-react';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'hub', icon: RiHome5Fill, label: 'Hub' },
    { id: 'employee', icon: FaUser, label: 'Employee' },
    { id: 'challenges', icon: BsFillTrophyFill, label: 'Challenges', active: true },
    { id: 'feed', icon: MdFeed, label: 'Feed' },
    { id: 'awards', icon: BsAwardFill, label: 'Awards' },
    { id: 'resources', icon:IoLayers , label: 'Resources' },
    { id: 'more', icon: LuBlocks, label: 'More' },
    { id: 'invite', icon: FaUserPlus, label: 'Invite' },
    { id: 'upgrade', icon: FaCrown, label: 'Upgrade' },
    { id: 'settings', icon: IoSettings, label: 'Settings' },
    { id: 'logout', icon: RiLogoutBoxFill, label: 'Logout' },
  ];

  const challengeSteps = [
    { 
      id: 1, 
      title: 'Challenge Details', 
      items: [
        'Add Name',
        'Challenge Description', 
        'Add Challenge Incentives',
        'Announcing On',
        'Challenge Duration'
      ], 
      completed: true 
    },
    { 
      id: 2, 
      title: 'Manage Challenge', 
      items: [
        'Challenge Type',
        'Code Type',
        'Manage Teams'
      ], 
      completed: true 
    },
    { 
      id: 3, 
      title: 'Media Upload', 
      items: [
        'Challenge Logo & Banner',
        'Manage Library'
      ], 
      completed: false, 
      active: true 
    },
    { 
      id: 4, 
      title: 'Settings', 
      items: [
        'Support URL Title',
        'Support URL',
        'Leaderboard Theme'
      ], 
      completed: false 
    },
    { 
      id: 5, 
      title: 'Review Challenge', 
      items: [
        'Go Live'
      ], 
      completed: false 
    }
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-full">
          {/* Navigation Icons */}
          <div className="w-14 sm:w-16 bg-slate-800 flex flex-col items-center py-4">
            <button 
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 mb-4 transition-colors"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.active;
              
              return (
                <div key={item.id} className="relative mb-4">
                  <button
                    className={`
                      w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200
                      ${isActive 
                        ? 'bg-emerald-400 text-slate-800' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                      }
                    `}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Completion Section */}
          <div className="flex-1 bg-white overflow-y-auto">
            {/* Completion Header */}
            <div className="p-3 sm:p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-900 font-medium text-sm">Completion</span>
                  <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <Info size={12} className="text-gray-600" />
                  </div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">26%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '26%' }}></div>
              </div>
            </div>

            {/* Challenge Steps */}
            <div className="p-3 sm:p-4 space-y-4">
              {challengeSteps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`
                      w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-medium
                      ${step.completed 
                        ? 'bg-emerald-400 text-white' 
                        : step.active 
                          ? 'bg-slate-700 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }
                    `}>
                      {step.completed ? <Check size={12} className="sm:w-3.5 sm:h-3.5" /> : step.id}
                    </div>
                    <h3 className={`font-medium text-sm ${step.active || step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <div className="ml-8 sm:ml-9 space-y-2">
                    {step.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`
                          w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex items-center justify-center
                          ${step.completed 
                            ? 'bg-emerald-400' 
                            : step.active && index < 2
                              ? 'bg-emerald-400'
                              : 'bg-gray-300'
                          }
                        `}>
                          {(step.completed || (step.active && index < 2)) && (
                            <Check size={6} className="sm:w-2 sm:h-2 text-white" />
                          )}
                        </div>
                        <span className={`text-xs ${
                          step.completed || (step.active && index < 2) 
                            ? 'text-gray-600' 
                            : 'text-gray-400'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {step.id < challengeSteps.length && (
                    <div className="absolute left-2.5 sm:left-3 top-8 sm:top-10 w-0.5 h-6 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex gap-4 h-full">
        {/* Navigation Icons */}
        <div className="w-16 bg-slate-800 flex flex-col items-center py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active;
            
            return (
              <div key={item.id} className="relative mb-4 flex flex-col items-center">
                <button
                  className={`
                    w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                    ${isActive 
                      ? 'bg-[#06EBBF] text-[#202941]' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                    }
                  `}
                >
                  <Icon size={20} />
                </button>
                <label className={`text-[10px] font-semibold ${isActive?'text-[#06EBBF]':'text-[#C4D0EF]'} my-2`}>
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>

        {/* Completion Section */}
        <div className="w-60 bg-white border-r border-gray-200 h-full rounded-lg">
          {/* Completion Header */}
          <div className='flex items-center justify-between m-4'>
            <div className='flex items-center space-x-2'>
              <span className="text-gray-900 text-lg font-bold">Completion</span>
              <Info size={12} className="text-gray-600" />
            </div>
            <div className="text-lg font-bold text-gray-900">26%</div>
          </div>
          <div className='w-56 border-[0.5px] border-[#C4D0EF] rounded-full mx-auto'>
            <div className="w-52 bg-gray-200 rounded-full h-2 m-2">
              <div className="bg-[#06EBBF] h-2 rounded-full" style={{ width: '26%' }}></div>
            </div>
          </div>
          <div className='w-full border-b border-gray-200 px-4 py-3'></div>
          
          {/* Challenge Steps */}
          <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-120px)]">
            <div className='w-9 h-[750px] rounded-full bg-[#262F46] absolute left-24'></div>
            {challengeSteps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`
                    absolute -left-1 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium
                    ${step.completed
                      ? 'bg-[#06EBBF] text-[#262F46]'
                      : step.active
                        ? 'bg-slate-700 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    {step.completed ? <Check size={14} /> : step.id}
                  </div>
                  <h3 className={`font-medium pl-8 ${step.active || step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </h3>
                </div>
                
                <div className="ml-11 space-y-2">
                  {step.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`
                        w-2 h-2 rounded-full flex items-center justify-center absolute left-1
                        ${step.completed 
                          ? 'bg-[#06EBBF]' 
                          : step.active && index < 2
                            ? 'bg-[#06EBBF]'
                            : 'bg-gray-300'
                        }
                      `}>
                      </div>
                      <span className={`text-sm ${
                        step.completed || (step.active && index < 2) 
                          ? 'text-gray-500' 
                          : 'text-gray-400'
                      }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;