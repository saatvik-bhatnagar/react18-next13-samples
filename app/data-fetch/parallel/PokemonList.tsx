export default async function PokemonList({ ...props }) {
  const result = await props.promise;
  return (
    <ul>
      {result.results.map((pokemon: any) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
