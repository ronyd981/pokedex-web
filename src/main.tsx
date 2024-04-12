import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { PokemonProvider } from "@/context";

createRoot(document.getElementById("root")!).render(
  <PokemonProvider>
    <App />
  </PokemonProvider>
);
