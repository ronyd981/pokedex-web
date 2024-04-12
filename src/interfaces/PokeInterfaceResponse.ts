export interface IInfoResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<IResult>;
}

export interface IPokeInfo {
  id: number;
  name: string;
  abilities: Array<IAbilities>;
  base_experience: number;
  sprites: ISprites;
  weight: number;
  height: number;
  cries: ICries;
  color?: string;
}

export interface IPokeColorInfo {
  color: IResult;
}

export interface ITypesResponse {
  id: number;
  pokemon: Array<IPokemonType>;
}

interface IResult {
  name: string;
  url: string;
}

interface IAbilities {
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
}

interface ISprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  other: {
    home: {
      front_default: string;
    };
  };
}

interface ICries {
  latest: string;
  legacy: string;
}

interface IPokemonType {
  pokemon: IResult;
  slot: number;
}
