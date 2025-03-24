
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Sun size={18} className={`${theme === 'mario' ? 'text-game-yellow' : 'text-galactic-star-yellow'}`} />
      <Switch
        checked={theme === 'galactic'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-galactic-nebula-purple data-[state=unchecked]:bg-game-red"
      />
      <Moon size={18} className={`${theme === 'galactic' ? 'text-galactic-nebula-purple' : 'text-game-dark-blue'}`} />
    </div>
  );
};

export default ThemeSwitcher;
