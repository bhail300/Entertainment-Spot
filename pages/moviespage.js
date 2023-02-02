import Head from "next/head";
import getConfig from "next/config";
import Movie from "../comps/moviecard";
import { useEffect, useState } from "react";
import Link from "next/link";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function Moviepage(initialData) {
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInputs] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchResults(initialData.Movies.results);
  }, [initialData]);

  useEffect(() => {
    console.log(searchResults);
  });

  const handleInputs = (event) => {
    let { title, value } = event.target;
    setFormInputs({ ...formInput, [title]: value });
    setSearchTerm(event.target.value);
  };

  const search = async (event) => {
    event.preventDefault();
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en=US&query=${formInput.searchTerm}&page-1&include_adult=false`
    );
    movies = await movies.json();
    console.log(movies)
    setSearchResults(movies.results);
  };

  return (
    <div className="container">
      <Head>
        <h1>Movies</h1>
      </Head>
      <div>
        <form onSubmit={search}>
          <input
            className="search"
            name="searchTerm"
            value={searchTerm}
            onChange={handleInputs}
            type="text"
            required
          />
          <button className="btn-search">search</button>
        </form>
        <Link href="/">
          <button>Go Home</button>
        </Link>
      </div>

      <div className="movie-search-results-grid">
        {searchResults.map((each, index) => {
          return (
            <Movie
              id={index}
              index={each.id}
              title={each.title}
              poster_path={each.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let Movies = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${serverRuntimeConfig.apiKey2}`
  );
  Movies = await Movies.json();
  console.log(Movies);
  return {
    props: { Movies: Movies }, //passed to the page component as props
  };
}
