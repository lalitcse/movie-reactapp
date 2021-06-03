import React from 'react'

const ResultCard = ({movie_info}) => {
    return(
        <div className='result-card'>
            <div className='poster-wrapper'>
                {movie_info.poster_path ? (
                    <img 
                    src={`https://image.tmdb.org/t/p/w200${movie_info.poster_path}`}
                    alt={`${movie_info.title} Poster`}
                    />
                ):(
                    <div className='filler-poster'></div>
                )}
            </div>
            <div className='info'>
                <div className='header'>
                    <h3 className='title'>
                        {movie_info.title}
                    </h3>
                    <h4 className='release-date'>
                        {movie_info.release_date ? movie_info.release_date.substring(0, 4) : '-'}
                    </h4>
                </div>
                <div className='controls'>
                    <button className='btn'>Add to Watchlist</button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard