import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { GifResponse } from '../types/GiphyTypes';

type State = {
  savedGifs: GifResponse[];
};

type Action =
  | { type: 'SAVE_GIF'; payload: GifResponse }
  | { type: 'UNSAVE_GIF'; payload: string };

const initialState: State = {
  savedGifs: [],
};

const GifReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SAVE_GIF':
      return { ...state, savedGifs: [...state.savedGifs, action.payload] };
    case 'UNSAVE_GIF':
      return { ...state, savedGifs: state.savedGifs.filter(gif => gif.id !== action.payload) };
    default:
      return state;
  }
};

const GifContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const GifProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(GifReducer, initialState, (initial) => {
    const savedGifs = localStorage.getItem('savedGifs');
    return savedGifs ? { savedGifs: JSON.parse(savedGifs) } : initial;
  });

  useEffect(() => {
    localStorage.setItem('savedGifs', JSON.stringify(state.savedGifs));
  }, [state.savedGifs]);

  return (
    <GifContext.Provider value={{ state, dispatch }}>
      {children}
    </GifContext.Provider>
  );
};

export const useGifContext = () => {
  const context = useContext(GifContext);
  if (!context) {
    throw new Error('useGifContext must be used within a GifProvider');
  }
  return context;
};
