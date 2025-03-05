import axios from "axios";
import { useState, useEffect } from "react";

const initialFormData = {
    title: "",
    language: "it-IT"
}

export default function Header() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState(initialFormData)
    function fetchMovies() {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: { query: search.title, include_adult: 'false', language: search.language, page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWNiMDg3N2I3ODljMDY5YjkyNGZiZjI1Zjc5NjZiMCIsIm5iZiI6MTc0MTE4NzU5MC40NTksInN1YiI6IjY3Yzg2YTA2ODMwNTcwZDFmZGMyYWFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oaOQXMwIREsypj2NngV5Q0J7Ggfp_BbkbM0zhrqQfAY'
            }
        };

        axios
            .request(options)
            .then((res) => {
                setMovies(res.data.results)
                console.log(res.data)
            })
            .catch(err => console.error(err));
    }

    function handleFormData(e) {
        const value = e.target.value;
        setSearch((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    const search_movie = e => {
        e.preventDefault();
    }

    useEffect(fetchMovies, [])
    return (
        <>
            <header>
                <nav>
                    <form onSubmit={search_movie}>
                        <input
                            type="text"
                            name="title"
                            value={search.title}
                            placeholder="search"
                            onChange={handleFormData} />
                        <button onClick={fetchMovies}>Search</button>
                    </form>
                </nav>
            </header>
            {
                movies.map((movie) => (

                    <div className='card' key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.original_title}</p>
                        <p>{search.language}</p>
                        <p>{movie.vote_avarage}</p>
                    </div>

                ))
            }
        </>
    )
}