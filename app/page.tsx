import Link from "next/link";
export default async function Page() {
  return (
    <div>
      <Link href="/data-fetch/parallel">
        <h1>Parallel Data fetch</h1>
      </Link>
      <Link href="/data-fetch/sequential">
        <h1>Sequential Data fetch</h1>
      </Link>
    </div>
  );
}
