import axios from "axios";
import { useState, useEffect } from "react";

const initialFormData = {
    title: "",
    language: "it-IT"
}

export default function Header() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState(initialFormData)
    const [tv, setTv] = useState([])
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
                // console.log(res.data)
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

    function fetchTV() {
        const option = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/tv',
            params: { query: search.title, include_adult: 'false', language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWNiMDg3N2I3ODljMDY5YjkyNGZiZjI1Zjc5NjZiMCIsIm5iZiI6MTc0MTE4NzU5MC40NTksInN1YiI6IjY3Yzg2YTA2ODMwNTcwZDFmZGMyYWFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oaOQXMwIREsypj2NngV5Q0J7Ggfp_BbkbM0zhrqQfAY'
            }
        };

        axios
            .request(option)
            .then(res => setTv(res.data.results))
            .catch(err => console.error(err));
    }

    function fetchAll() {
        fetchMovies();
        fetchTV();
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
                        <button onClick={fetchAll}>Search</button>
                    </form>
                </nav>
            </header>
            <h1>film</h1>
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
            <h1>serie tv</h1>
            {
                tv.map((serie) => (

                    <div className='card' key={serie.id}>
                        <h2>{serie.name}</h2>
                        <p>{serie.original_name}</p>
                        <p>{search.language}</p>
                        <p>{serie.vote_avarage}</p>
                    </div>

                ))
            }
        </>
    )
}