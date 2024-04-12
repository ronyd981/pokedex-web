import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { PokemonContext } from "@/context";

import { IInfoResponse, IPokeInfo, ITypesResponse } from "@/interfaces";
import { newRequest } from "@/utils";
import { API_URI } from "@/config";

export default function useGetAllPokemons() {
  const { isFiltering, changeFilteringStatus } = useContext(PokemonContext);

  const {
    isLoading: loading,
    error,
    data,
    refetch,
  } = useQuery({
    queryKey: ["poke_data"],
    queryFn: getAllPokemonData,
  });

  async function getAllPokemonData() {
    try {
      let allPokemonData = [],
        res;

      if (isFiltering !== 0) {
        res = await newRequest({
          url: `${API_URI}/type/${isFiltering}`,
        });

        const typesPokemons = res.data as ITypesResponse;
        const getFifteenPokemons = typesPokemons.pokemon.slice(0, 15);

        const allPokemonData = [];

        for (const pokemon of getFifteenPokemons) {
          const pokemonDetail = await newRequest({
            url: pokemon.pokemon.url,
            method: "get",
          });

          const pokeData = pokemonDetail.data as IPokeInfo;

          allPokemonData.push(pokeData);
        }

        return allPokemonData;
      } else {
        res = await newRequest({
          url: `${API_URI}/pokemon/?limit=15`,
          method: "get",
        });

        const pokemons = res.data as IInfoResponse;

        for (const pokemon of pokemons.results) {
          const pokemonDetail = await newRequest({
            url: pokemon.url,
            method: "get",
          });

          const pokeData = pokemonDetail.data as IPokeInfo;

          allPokemonData.push(pokeData);
        }

        return allPokemonData;
      }
    } catch (error) {
      return;
    }
  }

  const getDataByTypes = (id: number) => {
    changeFilteringStatus(id);

    refetch();
  };

  useEffect(() => {
    if (isFiltering !== null) refetch();
  }, [isFiltering]);

  return { loading, error, data, getDataByTypes };
}
