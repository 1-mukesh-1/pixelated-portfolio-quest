
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      theme === 'galactic' 
        ? 'bg-galactic-space-black' 
        : 'bg-game-dark-blue'
    }`} data-theme={theme}>
      <div className="pixel-card max-w-md w-full text-center">
        <h1 className={`text-4xl mb-4 ${
          theme === 'galactic' 
            ? 'font-cosmic text-galactic-meteor-red gradient-text' 
            : 'font-pixel text-game-red'
        }`}>
          {theme === 'galactic' ? 'LOST IN SPACE' : 'GAME OVER'}
        </h1>
        <p className={`text-xl mb-6 ${
          theme === 'galactic' ? 'font-space' : 'font-pixelify'
        }`}>
          The page was not found
        </p>
        <div className={`animate-pulse text-sm mb-8 ${
          theme === 'galactic' 
            ? 'text-galactic-cosmic-blue font-cosmic' 
            : 'text-game-blue font-pixel'
        }`}>
          ERROR 404
        </div>
        <Link 
          to="/" 
          className={theme === 'galactic' ? 'cosmic-button' : 'pixel-button inline-block bg-game-green hover:bg-game-green/80'}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
