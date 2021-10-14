import { useState, useEffect } from 'react';
import Movie from './Movie';
import Filter from '../Filter';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=';
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=';

const MovieList = () => {
    const [filter, setFilter] = useState('');
    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState({});

    const apiCall = async () => {
        try {
            const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API);
            const data = await res.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    };

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

    useEffect(() => {
        apiCall();
        configCall();
    }, []);

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className='movies-list'>
                {movies
                    .filter(movie =>
                        movie.title.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map(movie => (
                        <Movie
                            movie={movie}
                            key={movie.title}
                            config={config}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default MovieList;
