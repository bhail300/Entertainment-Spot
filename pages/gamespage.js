import getConfig from 'next/config';
import Game from '../comps/gamecard';
import { useEffect, useState } from 'react';
import Nav from '../comps/navbar';
import { Input, css, Button } from "@nextui-org/react";



const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Gamepage(initialData) {
  const [searchResults, setSearchResults] = useState ([])
  const [formInput, setFormInputs ] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setSearchResults(initialData.Games.results)
  }, [initialData])

  const handleInputs = (event) => {
    let {name, value} =event.target
    setFormInputs({...formInput, [name]: value});
    setSearchTerm(event.target.value);
  }

  const search = async (event) => {
    event.preventDefault()
    let games = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&language=en=US&query=${formInput.searchTerm}&page-1&include_adult=false`)
    games = await games.json()
    setSearchResults(games.results)
  
  }

  return (
    <div>
    <Nav/>
    
        <form onSubmit={search} className='form-box' > 
          <Input  labelPlaceholder="Games"
           initialValue="Search Games" 
           className='search' 
           name='searchTerm'
            value={searchTerm} 
            onChange={handleInputs} 
            type="text" required
            />

          <Button  className='btn-search'>search</Button>
        </form>
      
        <div className='container'>
    <div className='game-search-results-grid'>
      {searchResults.map((each) => {
        return(
          <Game
          name={each.name}
          released={each.released}
          rating={each.rating}
          background_image={each.background_image}
          />
        )
      })}
    </div>
    </div>
    </div>
    
  )
}

export async function getServerSideProps(context) {
  let Games = await fetch(`https://api.rawg.io/api/games?key=${serverRuntimeConfig.apiKey}`)
  Games = await Games.json()
  console.log(Games)
  return {
    props: {Games: Games}, //passed to the page component as props
  
  }
}
