import React from 'react'
import { Send, Bell, Menu } from 'lucide-react'

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <div className="w-full h-14 sm:h-16 bg-slate-800 fixed top-0 left-0 z-50 px-3 sm:px-4 lg:px-6">
      <div className='flex items-center justify-between h-full'>
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-1.5 sm:p-2 text-blue-200 hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={20} className="sm:w-6 sm:h-6" />
        </button>
        
        {/* Desktop Spacer */}
        <div className="hidden lg:block" />
        
        {/* Right side items */}
        <div className='flex items-center gap-2 sm:gap-3 lg:gap-6'>
          <button className="p-1 text-blue-200 hover:text-blue-400 transition-colors">
            <Send size={18} className="sm:w-5 sm:h-5" />
          </button>
          
          {/* Bell Icon */}
          <button className="p-1 text-blue-200 hover:text-blue-400 transition-colors relative">
            <Bell size={18} className="sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* Avatar with name and text */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Avatar Image */}
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User avatar"
              className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-blue-200"
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

