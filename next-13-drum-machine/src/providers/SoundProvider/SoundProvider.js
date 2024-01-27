'use client'
import React from 'react';

export const SoundContext = React.createContext();

function SoundProvider({children}) {
  const [isSoundOn, setIsSoundOn] = React.useState(true);

  const toggleSound = React.useCallback(() => setIsSoundOn((isSoundOn) => !isSoundOn), []);

  return <SoundContext.Provider value={{isSoundOn, toggleSound}}>{children}</SoundContext.Provider>;
}

export default SoundProvider;
