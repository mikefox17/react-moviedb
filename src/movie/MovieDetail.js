import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '?api_key=';

const IMAGE_URL = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'original';
const POSTER_SIZE = 'w342';

const MovieDetail = () => {
    /* grab movie id from params set movie state */
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    //call api base plus id plus processenv
    const apiCall = async () => {
        try {
            const res = await fetch(
                BASE_URL + id + API_KEY + process.env.REACT_APP_MOVIE_API
            );
            const data = await res.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.error(error);
        }
    };
    //useeffect
    useEffect(() => {
        apiCall();
    }, []);
    //if no movie title return null
    if (!movie.title) return null;

    return (
        <div>
            <img
                className='backdrop'
                src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
                alt={movie.title + ' Backdrop'}
            />
            <div className='detail-details'>
                <img
                    className='detail-poster'
                    src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
                    alt={movie.title + ' Poster'}
                    ƒ
                />
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
