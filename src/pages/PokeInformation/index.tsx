import { useParams } from "react-router-dom";

// Components
import { ErrorComponent, Loader, NotFoundData } from "@/components";
import { PokemonInfo } from "./components";

// Hooks
import { useGetPokemon } from "@/hooks";

export default function PokeInformation() {
  const { id } = useParams();
  const { data: pokemonInfo, loading, error } = useGetPokemon(id ?? "");

  if (error)
    return (
      <div className="my-12">
        <ErrorComponent />
      </div>
    );

  return (
    <div className="my-12">
      {loading ? (
        <Loader />
      ) : pokemonInfo && Object.keys(pokemonInfo).length > 0 ? (
        <PokemonInfo pokemonInfo={pokemonInfo} />
      ) : (
        <NotFoundData desc="Lo sentimos :(, no se ha encontrado ningun pokemon" />
      )}
    </div>
  );
}
