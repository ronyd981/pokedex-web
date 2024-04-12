import { useContext } from "react";

import { PokemonContext } from "@/context";

import { FILTER_LIST } from "./List";

interface IProps {
  getDataByTypes: (id: number) => void;
}

export default function PokemonFilter({ getDataByTypes }: IProps) {
  const { isFiltering } = useContext(PokemonContext);

  return (
    <section className="w-11/12 mx-auto max-w-[1100px] flex flex-col gap-2 mb-4">
      <p>Filtros:</p>
      <div className="w-full flex items-center flex-wrap gap-2">
        {FILTER_LIST.map((item) => (
          <button
            className={`
            px-4 py-1 rounded-sm bg-gray-300 hover:bg-gray-400
            ${isFiltering === item.id && "bg-gray-400 border border-gray-500"}
            `}
            key={item.id}
            onClick={() => getDataByTypes(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
