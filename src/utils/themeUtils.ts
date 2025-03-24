
import { Theme } from '@/types/theme';

export const getThemeClass = (
  theme: Theme, 
  marioClass: string, 
  galacticClass: string
): string => {
  return theme === 'mario' ? marioClass : galacticClass;
};

export const getThemeStyles = <T extends Record<string, unknown>>(
  theme: Theme,
  marioStyles: T,
  galacticStyles: T
): T => {
  return theme === 'mario' ? marioStyles : galacticStyles;
};
