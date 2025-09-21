import { useState, useEffect } from "react";

export const useGradualVisibility = () => {
  // custum hook to manage gradual appear of components
  const [isVisible, setIsVisible] = useState({
    header: false,
    story: false,
    founders: false,
    values: false,
  });

  useEffect(() => {
    setIsVisible(prev => ({ ...prev, header: true }));

    const timers = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, story: true })), 300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, founders: true })), 700),
      setTimeout(() => setIsVisible(prev => ({ ...prev, values: true })), 1000),
    ];

    // unmount clear timers
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return isVisible;
};
