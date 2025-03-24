
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
      theme === 'mario' 
        ? 'bg-game-dark-blue' 
        : 'bg-galactic-space-black'
    }`}>
      <div className={`${
        theme === 'mario' ? 'pixel-card' : 'pixel-card'
      } max-w-md w-full text-center`}>
        <h1 className={`text-4xl mb-4 ${
          theme === 'mario' 
            ? 'font-pixel text-game-red' 
            : 'font-cosmic text-galactic-meteor-red'
        }`}>
          {theme === 'mario' ? 'GAME OVER' : 'ERROR 404'}
        </h1>
        <p className={`text-xl mb-6 ${
          theme === 'mario' ? 'font-pixelify' : 'font-space'
        }`}>
          The page was not found
        </p>
        <div className={`mb-8 text-sm ${
          theme === 'mario' 
            ? 'animate-pulse text-game-blue font-pixel' 
            : 'text-galactic-cosmic-blue font-cosmic'
        }`}>
          {theme === 'mario' ? 'ERROR 404' : 'PAGE NOT FOUND'}
        </div>
        <Link 
          to="/" 
          className={`pixel-button inline-block ${
            theme === 'mario' 
              ? 'bg-game-green hover:bg-game-green/80' 
              : 'bg-galactic-nebula-purple hover:bg-galactic-nebula-purple/80'
          }`}
        >
          {theme === 'mario' 
            ? 'Continue → Home' 
            : 'Return to Base'
          }
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
