import React, {useState} from 'react'
import ResultCard from './ResultCard'

const Add = () => {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])

    const searchMovie = (e) => {
        e.preventDefault();

        setQuery(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=true&query=${e.target.value}`)
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors){
                console.log(data)
                setResult(data.results)
            }else{
                setResult([])
            }
        })
    }
    return(
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <input 
                        type='text' 
                        placeholder='Search for a movie...' 
                        value={query}
                        onChange={searchMovie}
                        />
                    </div>
                    {result.length > 0 && (
                        <ul className='results'>
                            {result.map(movie => (
                                <li key={movie.id}>
                                    <ResultCard movie_info={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add