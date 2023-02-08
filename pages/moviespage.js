import getConfig from "next/config";
import Movie from "../comps/moviecard";
import { useEffect, useState } from "react";
import Nav from "../comps/navbar";
import { Button, Input } from "@nextui-org/react";
import axios from 'axios'

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
    let movies = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en=US&query=${formInput.searchTerm}&page-1&include_adult=false`
    );
    movies = await movies.json();
    console.log(movies)
    setSearchResults(movies.results);
  };

  return (
    <div>
      <Nav/>
      <div>
      <form onSubmit={search} className='form-box' > 
          <Input  labelPlaceholder="Movies"
           initialValue="Search Movies" 
           className='search' 
           name='searchTerm'
            value={searchTerm} 
            onChange={handleInputs} 
            type="text" required
            />
           <Button className='btn-search'>search</Button>
        </form>

      </div>

      <div className="movie-search-results-grid">
        {searchResults.map((each, index) => {
          return (
            <Movie
              id={index}
              index={each.id}
              original_name={each.name}
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
  let Movies = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${serverRuntimeConfig.apiKey2}`
  );
  Movies = Movies.data
  console.log(Movies);
  return {
    props: { Movies: Movies }, //passed to the page component as props
  };
}

