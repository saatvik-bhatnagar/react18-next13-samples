import { Suspense } from "react";
import MovesList from "./MovesList";

export default async function Pokemon({ ...props }) {
  const pokemonData = await props.promise;
  return (
    <>
      <h1>Pokemon Name: {pokemonData.name.toUpperCase()}</h1>
      <ul style={{ margin: "2rem" }}>
        <h3>Abilities</h3>
        {pokemonData.abilities.map((ability: any) => {
          return <li key={ability.ability.name}>{ability.ability.name}</li>;
        })}
      </ul>
      <Suspense fallback={<div>Loading moves now...</div>}>
        <MovesList moves={pokemonData.moves} />
      </Suspense>
    </>
  );
}
