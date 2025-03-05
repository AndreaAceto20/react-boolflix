export default function CardSerie({ props, url }) {
    return (
        <>
            <div className='card' key={props.id}>
                <img src={url + props.poster_path} alt="" />
                <h2 >Titolo: {props.name}</h2>
                <p >Titolo originale: {props.original_name}</p>
                <p >Voto: {Math.ceil(Math.ceil(props.vote_average) / 2)}</p>
                <p >Overview: {props.overview}</p>
                {/* <FontAwesomeIcon icon={faStar} /> */}
            </div>
        </>
    )
}