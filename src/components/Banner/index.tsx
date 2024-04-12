import { Link } from "react-router-dom";

import PokeAPILogo from "@/assets/logo.webp";

export default function Banner() {
  return (
    <div
      className="
      h-40 flex items-center justify-center bg-primary-red/90
    "
    >
      <Link to="/">
        <figure className="w-48 h-20">
          <img src={PokeAPILogo} className="w-full h-full" alt="Pokeapi logo" />
        </figure>
      </Link>
    </div>
  );
}
