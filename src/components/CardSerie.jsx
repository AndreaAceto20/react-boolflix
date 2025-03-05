export default function CardSerie({ props, url }) {
    return (
        <>
            <div className='card' key={props.id}>
                <img src={url + props.poster_path} alt="" />
                <h2 className="pop title">Titolo: {props.name}</h2>
                <p className="pop original_title">Titolo originale: {props.original_name}</p>
                <p className="pop vote">Voto: {Math.ceil(Math.ceil(props.vote_average) / 2)}</p>
                <p className="pop overview">Overview: {props.overview}</p>
                {/* <FontAwesomeIcon icon={faStar} /> */}
            </div>
        </>
    )
}