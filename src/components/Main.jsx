import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Main() {
    const [movies, setMovies] = useState([])
    function fetchMovies() {

        // lista di tutti i film (in inglese)
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                include_adult: 'true',
                include_video: 'true',
                language: 'it-IT',
                page: '1',
                sort_by: 'popularity.desc'
            },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWNiMDg3N2I3ODljMDY5YjkyNGZiZjI1Zjc5NjZiMCIsIm5iZiI6MTc0MTE4NzU5MC40NTksInN1YiI6IjY3Yzg2YTA2ODMwNTcwZDFmZGMyYWFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oaOQXMwIREsypj2NngV5Q0J7Ggfp_BbkbM0zhrqQfAY'
            }
        };

        axios
            .request(options)
            .then(res => {
                setMovies(res.data.results)
                console.log(res.data)
            })
            .catch(err => console.error(err));

    }

    useEffect(fetchMovies, [])
    return (
        <>
            <main>

            </main >
        </>
    )
}