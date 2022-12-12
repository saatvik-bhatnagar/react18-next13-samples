export default async function AbilityList({ ...props }) {
  const result = await props.promise;
  return (
    <ul>
      {result.results.map((ability: any) => (
        <li key={ability.name}>{ability.name}</li>
      ))}
    </ul>
  );
}
