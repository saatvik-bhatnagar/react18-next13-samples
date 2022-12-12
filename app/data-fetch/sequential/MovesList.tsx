const getMovesData = async (moves: any[]) => {
  const promiseList = moves.map((move: any) => {
    return fetch(move.move.url);
  });
  const movesList = await Promise.all(promiseList);
  const jsonList = await Promise.all(movesList.map((move) => move.json()));
  return jsonList;
};
export default async function MovesList({ ...props }) {
  const moves = await getMovesData(props.moves);
  return (
    <div>
      <h3>Moves</h3>
      <ol>
        {moves.map((move: any) => {
          return (
            <li style={{ margin: "2rem" }} key={move.id}>
              <span>{move.name}</span>
              <br />
              <span>Type: {move.type.name}</span>
              <br />
              {move.accuracy && <span>Accuracy: {move.accuracy}</span>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
