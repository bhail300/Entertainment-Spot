
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <nav>
        <Link href="/gamespage">
          <button>Go to Games</button>
        </Link>
        <Link href="/moviespage">
          <button>Go to Movies</button>
        </Link>
      </nav>
    </div>
  );
}

