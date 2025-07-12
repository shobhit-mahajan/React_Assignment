import React from 'react'
import { Send, Bell, Menu } from 'lucide-react'

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <div className="w-full h-16 bg-slate-800 fixed top-0 left-0 z-50 px-4 lg:px-6">
      <div className='flex items-center justify-between h-full'>
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-blue-200 hover:text-blue-400 transition-colors"
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop Spacer */}
        <div className="hidden lg:block" />
        
        {/* Right side items */}
        <div className='flex items-center gap-4 lg:gap-6'>
          <Send className="text-blue-200 cursor-pointer hover:text-blue-400 transition-colors" />
          
          {/* Bell Icon */}
          <Bell className="text-blue-200 cursor-pointer hover:text-blue-400 transition-colors" />
          
          {/* Avatar with name and text */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Avatar Image */}
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="avatar"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
            />
            
            {/* Name + Role - Hidden on small screens */}
            <div className="hidden sm:block leading-tight text-white">
              <p className="font-semibold text-sm">Jane Doe</p>
              <p className="text-xs text-gray-400">Wellness Coach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

