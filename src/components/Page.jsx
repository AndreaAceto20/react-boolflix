import axios from "axios";
import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "./Card";
import CardSerie from "./CardSerie";



const initialFormData = {
    title: "",
}

export default function Page() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState(initialFormData)
    const [tv, setTv] = useState([])
    const url_base = 'https://image.tmdb.org/t/p/w342/'
    function fetchMovies() {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: { query: search.title, include_adult: 'false', language: "en-US", page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWNiMDg3N2I3ODljMDY5YjkyNGZiZjI1Zjc5NjZiMCIsIm5iZiI6MTc0MTE4NzU5MC40NTksInN1YiI6IjY3Yzg2YTA2ODMwNTcwZDFmZGMyYWFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oaOQXMwIREsypj2NngV5Q0J7Ggfp_BbkbM0zhrqQfAY'
            }
        };

        axios
            .request(options)
            .then((res) => {
                setMovies(res.data.results)
                // console.log(res.data.results.title)
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
                <h1>Boolflix</h1>
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
            <main className="container">
                {
                    movies.map((movie) => (

                        <Card url={url_base} props={movie}></Card>

                    ))
                }
                <h2>serie tv</h2>
                {
                    tv.map((serie) => (

                        <CardSerie url={url_base} props={serie}></CardSerie>

                    ))
                }
            </main>
        </>
    )
}