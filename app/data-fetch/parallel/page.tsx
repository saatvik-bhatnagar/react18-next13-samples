import Link from "next/link";
import React, { Suspense } from "react";
import AbilityList from "./AbilityList";
import PokemonList from "./PokemonList";
const getPokemonData = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => res.json());
};
const getAbilitiesData = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/ability/?limit=10`);

  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => res.json());
};

export default async function Page() {
  const pokemonData = getPokemonData();
  const pokemonAbilities = getAbilitiesData();
  return (
    <>
      <Suspense fallback={<div>Loading pokemons for 5 seconds...</div>}>
        <PokemonList promise={pokemonData} />
      </Suspense>
      <Suspense fallback={<div>Loading abilities for 2 seconds...</div>}>
        <AbilityList promise={pokemonAbilities} />
      </Suspense>
      <Link href="/">Homepage</Link>
    </>
  );
}
