// Components
import { NotFoundData, Loader, ErrorComponent } from "@/components";
import { PokeGrid, PokemonFilter } from "./components";

// Hooks
import { useGetAllPokemons } from "@/hooks";

export default function Home() {
  const { data, loading, error, getDataByTypes } = useGetAllPokemons();

  if (error)
    return (
      <div className="my-12">
        <ErrorComponent />
      </div>
    );

  return (
    <main className="my-12">
      {loading ? (
        <Loader />
      ) : data && data.length > 0 ? (
        <>
          <PokemonFilter getDataByTypes={getDataByTypes} />
          <PokeGrid data={data} />
        </>
      ) : (
        <NotFoundData desc="Lo sentimos :(, no se ha encontrado ningun pokemon" />
      )}
    </main>
  );
}
