import { Link } from "react-router-dom";

import { IPokeInfo } from "@/interfaces";
import { typeColors } from "@/utils";

import AudioIcon from "@/assets/svg/Audio";
import ArrowLeft from "@/assets/svg/ArrowLeft";

interface IProps {
  pokemonInfo: IPokeInfo;
}

type ColorKey = keyof typeof typeColors;

export default function PokemonInfo({ pokemonInfo }: IProps) {
  const onPlaySound = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  const color: string = typeColors[pokemonInfo.color as ColorKey];

  return (
    <section className="w-11/12 mx-auto max-w-[1100px] relative">
      <Link
        to="/"
        className="max-w-max flex items-center gap-1 mb-2 rounded-md p-2 border hover:bg-gray-200 transition duration-150"
      >
        <ArrowLeft width={28} height={28} />
        <span className="text-lg">Regresar</span>
      </Link>
      <div className="min-w-64 max-w-80 flex items-center justify-center flex-col mx-auto relative">
        <button
          className="absolute top-4 right-4"
          onClick={() => onPlaySound(pokemonInfo.cries.latest)}
        >
          <AudioIcon width={36} height={36} />
        </button>
        <div
          className={`
          ${color} w-full flex items-center flex-col gap-4 px-4 pb-2 rounded-t-md
          
        `}
        >
          <figure className="w-64 h-64">
            <img
              src={pokemonInfo.sprites.other.home.front_default}
              className="w-full h-full object-contain"
              alt={pokemonInfo.name}
            />
          </figure>
          <div className="w-full flex justify-center gap-4">
            <img
              src={pokemonInfo.sprites.back_default}
              className="w-12 h-12"
              alt={pokemonInfo.name}
            />
            <img
              src={pokemonInfo.sprites.back_shiny}
              className="w-12 h-12"
              alt={pokemonInfo.name}
            />
            <img
              src={pokemonInfo.sprites.front_default}
              className="w-12 h-12"
              alt={pokemonInfo.name}
            />
          </div>
        </div>
        <div className="w-full flex items-center flex-col gap-4 py-4 relative rounded-b-md shadow-md">
          <h4 className="text-center text-3xl font-bold">
            {pokemonInfo.name.charAt(0).toUpperCase() +
              pokemonInfo.name.slice(1)}
          </h4>
          <div className="w-full flex justify-center gap-4 flex-wrap">
            <p>Peso: {pokemonInfo.weight}</p>
            <p>Altura: {pokemonInfo.height}</p>
          </div>
          <div className="absolute top-0 right-4">
            <p className="text-sm">
              Exp:{" "}
              <span className="font-bold">{pokemonInfo.base_experience}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
