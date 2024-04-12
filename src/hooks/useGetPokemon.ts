import { useQuery } from "@tanstack/react-query";

import { IPokeInfo, IPokeColorInfo } from "@/interfaces";
import { newRequest } from "@/utils";
import { API_URI } from "@/config";

export default function useGetPokemon(id: string) {
  const {
    isLoading: loading,
    error,
    data,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemon,
  });

  async function getPokemon() {
    try {
      const res = await newRequest({
        url: `${API_URI}/pokemon/${id}`,
        method: "get",
      });

      const pokemon = res.data as IPokeInfo;

      const getColorData = await newRequest({
        url: `${API_URI}/pokemon-species/${pokemon.id}`,
      });

      const pokemonColor = getColorData.data as IPokeColorInfo;
      const color = pokemonColor.color.name;

      pokemon.color = color ? color : "red";

      return pokemon;
    } catch (error) {
      return;
    }
  }

  return { loading, error, data };
}
