import { useContext } from "react";

import { IPokeInfo } from "@/interfaces";

// Components
import Card from "../Card";

import { PokemonContext } from "@/context";

interface IProps {
  data: Array<IPokeInfo>;
}

export default function PokeGrid({ data }: IProps) {
  const { idImages } = useContext(PokemonContext);

  return (
    <section
      className="
      w-11/12 mx-auto max-w-[1100px] grid grid-cols-2 gap-2
      sm:gap-8
      md:grid-cols-3
      lg:grid-cols-4
    "
    >
      {data.map((pokemonInfo) => {
        const wasShow = idImages.includes(pokemonInfo.id);

        return (
          <Card
            key={pokemonInfo.id}
            pokemonInfo={pokemonInfo}
            wasShow={wasShow}
          />
        );
      })}
    </section>
  );
}
