
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Sun className={`w-4 h-4 ${theme === 'galactic' ? 'text-yellow-300' : 'text-gray-400'}`} />
      <Switch 
        checked={theme === 'galactic'} 
        onCheckedChange={toggleTheme} 
        className="data-[state=checked]:bg-indigo-600"
      />
      <Moon className={`w-4 h-4 ${theme === 'mario' ? 'text-blue-400' : 'text-gray-400'}`} />
    </div>
  );
};

export default ThemeSwitcher;
