import React, { useState } from 'react';
import { Users, Target, Trophy, Zap, Heart, Check, Plus, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const CreateChallengeSection: React.FC = () => {
  const [selectedChallengeType, setSelectedChallengeType] = useState('team');
  const [selectedCodeType, setSelectedCodeType] = useState('none');

  const steps = [
    { 
      id: 'details', 
      title: 'Details', 
      completed: true,
      bgColor: 'bg-emerald-400',
      textColor: 'text-white'
    },
    { 
      id: 'manage', 
      title: 'Challenge', 
      completed: true,
      bgColor: 'bg-slate-700',
      textColor: 'text-white'
    },
    { 
      id: 'media', 
      title: 'Media Upload', 
      active: true,
      bgColor: 'bg-gray-200',
      textColor: 'text-gray-700'
    },
    { 
      id: 'settings', 
      title: 'Settings', 
      completed: false,
      bgColor: 'bg-gray-200',
      textColor: 'text-gray-500'
    }
  ];

  const challengeTypes = [
    {
      id: 'team',
      title: 'Team Challenge',
      description: 'Compete in groups to see which team performs best',
      icon: Users,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'daily',
      title: 'Daily Goal Challenge',
      description: 'Compete in groups to see which team performs best.',
      icon: Target,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'group',
      title: 'Group Goal Challenge',
      description: 'Compete in groups to see which team performs best. ',
      icon: Trophy,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 'streaks',
      title: 'Streaks',
      description: 'Compete in groups to see which team performs best.',
      icon: Zap,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
  ];

  return (
    <div className="flex-1 bg-white mx-2 sm:mx-3 lg:mx-6 rounded-lg shadow-lg max-w-6xl mx-auto my-4 sm:my-6 min-h-screen">
      <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Create Challenge</h1>
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded-full flex items-center justify-center">
              <Info size={12} className="sm:w-3.5 sm:h-3.5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Step Indicator */}
      <div className="border-b border-gray-200 px-2 sm:px-4 lg:px-6 py-3 sm:py-4 bg-white overflow-x-auto">
        <div className="flex items-center w-full gap-1 sm:gap-2 min-w-[280px] sm:min-w-0">
          {steps.map((step, index) => {
            let fill = '#fff';
            let text = 'text-gray-500';
            let border = 'stroke-gray-200';
            let icon = null;
            if (index === 0) {
              fill = '#3a5a40';
              text = 'text-white';
              border = '#3a5a40';
              icon = <Check size={16} className="sm:w-5 sm:h-5 mx-auto" />;
            } else if (index === 1) {
              fill = '#1e293b';
              text = 'text-white';
              border = 'stroke-slate-700';
            } else {
              fill = '#fff';
              text = 'text-gray-800';
              border = 'stroke-gray-200';
            }
            return (
              <React.Fragment key={step.id}>
                <div className="relative flex items-center px-1 min-w-[120px] sm:min-w-[120px] lg:min-w-[140px] mx-1 overflow-hidden">
                  <svg
                    width="80"
                    height="60"
                    viewBox="0 0 140 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block drop-shadow-sm w-full h-auto"
                  >
                    <polygon
                      points="0,0 120,0 140,25 120,60 0,60 20,25"
                      fill={fill}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      className={border}
                    />
                  </svg>
                  <div className="absolute left-0 top-0 w-full h-full px-2 sm:px-4 py-1 flex items-center justify-between">
                    <div className={`flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 rounded-full ${text} text-xs sm:text-sm font-bold bg-white/10 shadow-sm border border-white/20`}>
                      {icon ? icon : index + 1}
                    </div>
                    <div className='flex flex-col m-1 p-1 text-start'>
                      <div className={`text-[10px] font-semibold ${text} whitespace-nowrap`}>{step.title}</div>
                    </div>
                     
                  </div>
                </div>
                {index < steps.length - 1 && <div className="-ml-8 sm:-ml-10 lg:-ml-12" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 max-w-5xl mx-auto">
        {/* Challenge Type Selection */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Select Challenge Type</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Choose how your team will take on the challenge, whether it's daily habits, team collaboration, or a competitive virtual race. Each type offers a unique way to engage and motivate participants.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            {challengeTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedChallengeType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedChallengeType(type.id)}
                  className={`
                    p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 text-left shadow-sm flex flex-col items-start h-full
                    ${isSelected 
                      ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200' 
                      : 'border-gray-200 hover:border-emerald-300 bg-white'
                    }
                    focus:outline-none focus:ring-2 focus:ring-emerald-300
                  `}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${type.bgColor} flex items-center justify-center mb-3 shadow-inner`}>
                    <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${type.iconColor}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{type.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{type.description}</p>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Code Type Selection */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Select Code Type</h3>
            <p className="text-gray-600 text-sm">
              Choose how participants will join the challenge
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setSelectedCodeType('none')}
              className={`
                flex items-center space-x-3 px-4 sm:px-6 py-3 rounded-lg border-2 transition-all duration-200 shadow-sm
                ${selectedCodeType === 'none'
                  ? 'border-emerald-400 bg-emerald-400 text-white' 
                  : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                }
                focus:outline-none focus:ring-2 focus:ring-emerald-300
              `}
            >
              <div className={`
                w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center
                ${selectedCodeType === 'none'
                  ? 'bg-white text-emerald-400' 
                  : 'bg-gray-200 text-gray-500'
                }
              `}>
                <Check size={12} className="sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="font-medium text-sm sm:text-base">None</span>
            </button>
            <button
              onClick={() => setSelectedCodeType('join')}
              className={`
                flex items-center space-x-3 px-4 sm:px-6 py-3 rounded-lg border-2 transition-all duration-200 shadow-sm
                ${selectedCodeType === 'join'
                  ? 'border-emerald-400 bg-emerald-50 text-emerald-700' 
                  : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                }
                focus:outline-none focus:ring-2 focus:ring-emerald-300
              `}
            >
              <div className={`
                w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center
                ${selectedCodeType === 'join'
                  ? 'bg-emerald-400 text-white'
                  : 'bg-gray-200 text-gray-500'
                }
              `}>
                <Plus size={12} className="sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="font-medium text-sm sm:text-base">Join Code</span>
            </button>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-6 sm:pt-8">
          <button className="flex items-center space-x-2 px-6 sm:px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md text-sm sm:text-base">
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            <span>Back</span>
          </button>
          <button className="flex items-center space-x-2 px-6 sm:px-8 py-3 bg-emerald-400 text-slate-800 rounded-lg hover:bg-emerald-500 transition-colors shadow-md text-sm sm:text-base">
            <span>Continue</span>
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChallengeSection;