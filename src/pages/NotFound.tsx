
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-game-dark-blue p-4">
      <div className="pixel-card max-w-md w-full text-center">
        <h1 className="text-4xl font-pixel text-game-red mb-4">GAME OVER</h1>
        <p className="text-xl mb-6 font-pixelify">The page was not found</p>
        <div className="animate-pulse text-game-blue font-pixel text-sm mb-8">ERROR 404</div>
        <Link 
          to="/" 
          className="pixel-button inline-block bg-game-green hover:bg-game-green/80"
        >
          Continue → Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
