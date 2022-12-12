import React, { Suspense } from "react";
import { JsxElement } from "typescript";
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
        <Pokemon promise={pokemonData} />
      </Suspense>
      <Suspense fallback={<div>Loading abilities for 2 seconds...</div>}>
        <Ability promise={pokemonAbilities} />
      </Suspense>
    </>
  );
}

const Pokemon = async ({ ...props }) => {
  const result = await props.promise;
  return (
    <ul>
      {result.results.map((pokemon: any) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
const Ability = async ({ ...props }) => {
  const result = await props.promise;
  return (
    <ul>
      {result.results.map((ability: any) => (
        <li key={ability.name}>{ability.name}</li>
      ))}
    </ul>
  );
};
