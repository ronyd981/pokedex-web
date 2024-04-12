import { useContext } from "react";
import { Link } from "react-router-dom";

import { PokemonContext } from "@/context";
import CheckIcon from "@/assets/svg/Check";

import { IPokeInfo } from "@/interfaces";

interface IProps {
  pokemonInfo: IPokeInfo;
  wasShow: boolean;
}

export default function Card({ pokemonInfo, wasShow }: IProps) {
  const { addImageToShowed } = useContext(PokemonContext);

  return (
    <Link
      to={`/${pokemonInfo.id}`}
      onClick={() => addImageToShowed(pokemonInfo.id)}
    >
      <div
        className={`
        w-full h-60 flex flex-col gap-6 relative border border-transparent hover:border-gray-400 hover:shadow-sm rounded-md group
        ${wasShow && "border-gray-400"}
      `}
      >
        {wasShow && (
          <div className="flex gap-0.5 absolute top-2 right-2">
            <CheckIcon width={24} height={24} />
            <CheckIcon width={24} height={24} />
          </div>
        )}
        <figure className="w-[80%] h-44 mx-auto relative z-10">
          <img
            src={pokemonInfo.sprites.other.home.front_default}
            className={`
            w-full h-full object-contain
            ${wasShow && "saturate-50 group-hover:filter-none"}
            `}
            alt={pokemonInfo.name}
          />
        </figure>
        <div
          className={`
          w-full absolute h-24 flex items-end justify-center bottom-0 pb-2 border rounded-md group-hover:border-x-0 group-hover:border-t-0
          ${wasShow && "border-t-0 rounded-t-none"}
        `}
        >
          <h4 className="text-center text-xl">
            {pokemonInfo.name.charAt(0).toUpperCase() +
              pokemonInfo.name.slice(1)}
          </h4>
        </div>
      </div>
    </Link>
  );
}
