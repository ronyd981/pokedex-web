import { createContext, useState, useEffect } from "react";

type TImagesShowed = {
  idImages: Array<number>;
  addImageToShowed: (id: number) => void;
  isFiltering: number;
  changeFilteringStatus: (id: number) => void;
};

export const PokemonContext = createContext<TImagesShowed>({
  idImages: [],
  addImageToShowed: () => {},
  isFiltering: 0,
  changeFilteringStatus: () => {},
});

export function PokemonProvider({ children }: { children: JSX.Element }) {
  const [imagesShowedData, setImagesShowedData] = useState<Array<number>>([]);
  const [isFiltering, setIsFiltering] = useState<number>(0);

  const addImageToShowed = (id: number) => {
    const newElement = imagesShowedData;
    newElement.push(id);

    const myArrayString = JSON.stringify(newElement);

    localStorage.setItem("pokemons", myArrayString);
    setImagesShowedData(newElement);
  };

  const changeFilteringStatus = (id: number) => {
    setIsFiltering(id);
  };

  useEffect(() => {
    const pokeData = localStorage.getItem("pokemons");

    if (pokeData) {
      const pokemonIds = JSON.parse(pokeData) as Array<number>;

      setImagesShowedData(pokemonIds);
    }
  }, []);

  const CONTEXT_DATA = {
    idImages: imagesShowedData,
    isFiltering,
    addImageToShowed,
    changeFilteringStatus,
  };

  return (
    <PokemonContext.Provider value={CONTEXT_DATA}>
      {children}
    </PokemonContext.Provider>
  );
}
