import React, { useState } from 'react';
import { Users, Target, Trophy, Zap, Heart, Check, Plus, ChevronLeft, ChevronRight, Info, Smile } from 'lucide-react';

const CreateChallengeSection: React.FC = () => {
  const [selectedChallengeType, setSelectedChallengeType] = useState('team');
  const [selectedCodeType, setSelectedCodeType] = useState('none');

  const steps = [
    { 
      id: 'details', 
      title: 'Details', 
      subtitle: 'Add name, dates, prizes',
      completed: true,
      active: false,
      bgColor: '#06EBBF', // emerald
      textColor: 'text-[#273047]'
    },
    { 
      id: 'manage', 
      title: 'Manage Challenge', 
      subtitle: 'Pick how teams compete',
      completed: false,
      active: true,
      bgColor: '#232B3A', // dark blue
      textColor: 'text-white'
    },
    { 
      id: 'media', 
      title: 'Media Upload', 
      subtitle: 'Upload images',
      completed: false,
      active: false,
      bgColor: '#fff',
      textColor: 'text-gray-700'
    },
    { 
      id: 'settings', 
      title: 'Settings', 
      subtitle: 'Customize preferences',
      completed: false,
      active: false,
      bgColor: '#fff',
      textColor: 'text-gray-700'
    }
  ];

  const challengeTypes = [
    {
      id: 'team',
      title: 'Teams Challenge',
      description: 'Compete in groups to see which team performs best. Collaboration meets healthy competition!',
      icon: Users,
      bgColor: '#DEF3FF',
      iconBg: '#1AADFE',
      iconColor: 'text-white',
      borderColor: 'border-blue-200',
      ringColor: 'ring-blue-200',
    },
    {
      id: 'daily',
      title: 'Daily Goal Challenge',
      description: 'Compete in groups to see which team performs best. Collaboration meets healthy competition!',
      icon: Target,
      bgColor: '#06EBBF4D',
      iconBg: '#7CE2B3',
      iconColor: 'text-white',
      borderColor: 'border-green-200',
      ringColor: 'ring-green-200',
    },
    {
      id: 'group',
      title: 'Group Goal Challenge',
      description: 'Compete in groups to see which team performs best. Collaboration meets healthy competition!',
      icon: Trophy,
      bgColor: '#FFF4DE',
      iconBg: '#F98C57',
      iconColor: 'text-white',
      borderColor: 'border-orange-200',
      ringColor: 'ring-orange-200',
    },
    {
      id: 'streaks',
      title: 'Streaks',
      description: 'Compete in groups to see which team performs best. Collaboration meets healthy competition!',
      icon: Zap,
      bgColor: '#ECE3FF',
      iconBg: '#9F70FF',
      iconColor: 'text-white',
      borderColor: 'border-purple-200',
      ringColor: 'ring-purple-200',
    },
    {
      id: 'virtual',
      title: 'Virtual Race',
      description: 'Compete in groups to see which team performs best. Collaboration meets healthy competition!',
      icon: Smile,
      bgColor: '#FFE3E5',
      iconBg: '#FF7575',
      iconColor: 'text-white',
      borderColor: 'border-rose-200',
      ringColor: 'ring-rose-200',
    },
  ];

  return (
    <div className="flex-1 bg-white sm:mx-3 rounded-lg shadow-lg max-w-4xl mx-auto my-4 sm:my-6 min-h-screen w-full lg:w-[780px]">
      <div className="px-4 sm:px-6 py-3 sm:py-4">
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
        <div className="flex w-full h-full min-w-[600px] lg:min-w-0">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative flex-1 flex items-stretch">
              {/* Chevron shape */}
              <svg
                width="100%"
                height="86"
                viewBox="0 0 180 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
              >
                <polygon
                  points={idx === 0
                    ? "0,0 170,0 180,23 170,46 0,46"
                    : "0,0 170,0 180,23 170,46 0,46 10,23"}
                  fill={step.bgColor}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              </svg>
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-start px-3 sm:px-6 py-2 h-[70px] w-full">
                <div className="flex items-center justify-between space-x-2 w-full">
                <span className={`font-semibold text-[10px] sm:text-[12px] ${step.textColor}`}>{step.title}</span>
                  {idx === 0 ? (
                    <span className="absolute right-2 sm:right-4 top-[20px] w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#273047] flex items-center justify-center border-2 border-emerald-400">
                      <Check size={14} className="sm:w-4 sm:h-4 text-[#06EBBF]" />
                    </span>
                  ) : null}
                </div>
                <span className="text-[8px] sm:text-[10px] text-gray-600">{step.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-2 sm:p-6 lg:px-3 space-y-6 lg:space-y-8 mx-2">
        {/* Challenge Type Selection */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Select Challenge Type</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Choose how your team will take on the challenge, whether it's daily habits, team collaboration, or a competitive virtual race. Each type offers a unique way to engage and motivate participants.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {challengeTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedChallengeType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedChallengeType(type.id)}
                  className={`
                    flex flex-col items-start justify-evenly w-36 h-40 sm:h-48 p-2 rounded-xl border-2 transition-all duration-200 shadow-md relative bg-white
                    ${isSelected ? 'border-emerald-400 ring-2 ring-emerald-200 shadow-lg' : `${type.borderColor} border-2`}
                    focus:outline-none focus:ring-2 focus:ring-emerald-300
                  `}
                  style={{ background: type.bgColor }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-3 mt-1 shadow-md ${isSelected ? '' : ''}`}
                    style={{ background: type.iconBg }}
                  >
                    <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${type.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-start mb-2 px-1 text-sm sm:text-base">{type.title}</h4>
                  <p className="text-[8px] sm:text-[9px] text-gray-500 text-start px-1 leading-snug">{type.description}</p>
                  {isSelected && (
                    <span className="absolute inset-0 rounded-xl border-2 border-emerald-400 pointer-events-none animate-pulse" style={{boxShadow: '0 0 0 4px #6ee7b733'}}></span>
                  )}
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
                  ? 'border-emerald-400 bg-[#06EBBF] text-white' 
                  : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                }
                focus:outline-none focus:ring-2 focus:ring-emerald-300
              `}
            >
              <div className={`
                w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center
                ${selectedCodeType === 'none'
                  ? 'bg-white text-[#293249]' 
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
          <button className="flex items-center space-x-2 px-6 sm:px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md text-sm sm:text-base w-full sm:w-auto">
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            <span>Back</span>
          </button>
          <button className="flex items-center space-x-2 px-6 sm:px-8 py-3 bg-emerald-400 text-slate-800 rounded-lg hover:bg-emerald-500 transition-colors shadow-md text-sm sm:text-base w-full sm:w-auto">
            <span>Continue</span>
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChallengeSection;