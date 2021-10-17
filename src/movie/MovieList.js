import { useState, useEffect } from 'react';
import Movie from './Movie';
import Filter from '../Filter';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=';
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=';

const MovieList = () => {
    const [filter, setFilter] = useState('');
    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState({});

    /* api call  */
    const apiCall = async () => {
        try {
            const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API);
            const data = await res.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    };
    //config call processenv
    const configCall = async () => {
        try {
            const res = await fetch(
                CONFIG_URL + process.env.REACT_APP_MOVIE_API
            );
            const data = await res.json();
            setConfig(data);
        } catch (error) {
            console.error(error);
        }
    };
    //use effect make calls
    useEffect(() => {
        apiCall();
        configCall();
    }, []);
    //return filter and filter over movies array and map
    return (
        <div>
            {' '}
            <Filter setFilter={setFilter} filter={filter} />
            <ul className='movies-list'>
                {movies
                    .filter(movie =>
                        movie.title.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map(movie => (
                        <Movie
                            key={movie.title}
                            movie={movie}
                            config={config}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default MovieList;
