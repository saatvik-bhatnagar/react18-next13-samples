import Link from "next/link";
import React, { Suspense } from "react";
import { JsxElement } from "typescript";
import MovesList from "./MovesList";
import Pokemon from "./Pokemon";
const getPokemonData = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => res.json());
};

export default async function Page() {
  const pokemonData = getPokemonData();
  return (
    <>
      <Suspense fallback={<div>Loading pokemon in 2 seconds....</div>}>
        <Pokemon promise={pokemonData} />
      </Suspense>
      <Link href="/">Homepage</Link>
    </>
  );
}
