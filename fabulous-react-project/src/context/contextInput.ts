import { createContext } from "react";
import { Planet } from "../componentTypes";

export type InputValueContextType = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  };
  
  export type PlanetContextType = {
    planets: Planet[];
    setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>;
  };
  export const InputValueContext = createContext<InputValueContextType | null>(
    null,
  );
  
  export const PlanetContext = createContext<PlanetContextType | null>(null);


