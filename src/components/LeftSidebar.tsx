import React from 'react';
import { 
  Home, 
  Users, 
  Lightbulb, 
  Rss, 
  Award, 
  BookOpen, 
  MoreHorizontal, 
  UserPlus, 
  Crown, 
  Settings as SettingsIcon, 
  LogOut,
  Check,
  Info,
  X
} from 'lucide-react';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'hub', icon: Home, label: 'Hub' },
    { id: 'employee', icon: Users, label: 'Employee' },
    { id: 'challenges', icon: Lightbulb, label: 'Challenges', active: true },
    { id: 'feed', icon: Rss, label: 'Feed' },
    { id: 'awards', icon: Award, label: 'Awards' },
    { id: 'resources', icon: BookOpen, label: 'Resources' },
    { id: 'more', icon: MoreHorizontal, label: 'More' },
    { id: 'invite', icon: UserPlus, label: 'Invite' },
    { id: 'upgrade', icon: Crown, label: 'Upgrade' },
    { id: 'settings', icon: SettingsIcon, label: 'Settings' },
    { id: 'logout', icon: LogOut, label: 'Logout' },
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
        fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-full">
          {/* Navigation Icons */}
          <div className="w-16 bg-slate-800 flex flex-col items-center py-4">
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 mb-4"
            >
              <X size={20} />
            </button>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.active;
              
              return (
                <div key={item.id} className="relative mb-4">
                  <button
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                      ${isActive 
                        ? 'bg-emerald-400 text-slate-800' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                      }
                    `}
                  >
                    <Icon size={20} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Completion Section */}
          <div className="flex-1 bg-white mx-2 sm:mx-3 lg:mx-6 rounded-lg shadow-lg max-w-6xl mx-auto my-4 sm:my-6 min-h-screen mt-[2rem] lg:mt-[8rem] overflow-y-auto">
            {/* Completion Header */}
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-900 font-medium">Completion</span>
                <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <Info size={12} className="text-gray-600" />
                </div>
                <span className="text-xl lg:text-2xl font-bold text-gray-900 ml-auto">26%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '26%' }}></div>
              </div>
            </div>

            {/* Challenge Steps */}
            <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
              {challengeSteps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`
                      w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-medium
                      ${step.completed 
                        ? 'bg-emerald-400 text-white' 
                        : step.active 
                          ? 'bg-slate-700 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }
                    `}>
                      {step.completed ? <Check size={14} className="lg:w-4 lg:h-4" /> : step.id}
                    </div>
                    <h3 className={`font-medium text-sm lg:text-base ${step.active || step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <div className="ml-9 lg:ml-11 space-y-2">
                    {step.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`
                          w-3 h-3 lg:w-4 lg:h-4 rounded-full flex items-center justify-center
                          ${step.completed 
                            ? 'bg-emerald-400 ' 
                            : step.active && index < 2
                              ? 'bg-emerald-400'
                              : 'bg-gray-300'
                          }
                        `}>
                          {(step.completed || (step.active && index < 2)) && (
                            <Check size={8} className="text-white lg:w-2.5 lg:h-2.5" />
                          )}
                        </div>
                        <span className={`text-xs lg:text-sm ${
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
                    <div className="absolute left-3 lg:left-4 top-10 lg:top-12 w-0.5 h-6 lg:h-8 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        {/* Navigation Icons */}
        <div className="w-16 bg-slate-800 min-h-screen flex flex-col items-center py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active;
            
            return (
              <div key={item.id} className="relative mb-4">
                <button
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                    ${isActive 
                      ? 'bg-emerald-400 text-slate-800' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                    }
                  `}
                >
                  <Icon size={20} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Completion Section */}
        <div className="w-60 bg-white border-r border-gray-200 min-h-screen rounded-lg mt-20">
          {/* Completion Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gray-900 font-medium">Completion</span>
              <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                <Info size={12} className="text-gray-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900 ml-auto">26%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '26%' }}></div>
            </div>
          </div>

          {/* Challenge Steps */}
          <div className="p-6 space-y-6">
            {challengeSteps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${step.completed 
                      ? 'bg-emerald-400 text-white' 
                      : step.active 
                        ? 'bg-slate-700 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    {step.completed ? <Check size={16} /> : step.id}
                  </div>
                  <h3 className={`font-medium ${step.active || step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </h3>
                </div>
                
                <div className="ml-11 space-y-2">
                  {step.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`
                        w-4 h-4 rounded-full flex items-center justify-center
                        ${step.completed 
                          ? 'bg-emerald-400 ' 
                          : step.active && index < 2
                            ? 'bg-emerald-400'
                            : 'bg-gray-300'
                        }
                      `}>
                        {(step.completed || (step.active && index < 2)) && (
                          <Check size={10} className="text-white" />
                        )}
                      </div>
                      <span className={`text-[0.8em] ${
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
                  <div className="absolute left-4 top-12 w-0.5 h-8 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;