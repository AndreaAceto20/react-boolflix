export default function Card({ props, url }) {
    return (
        <>
            <div className='card' key={props.id}>
                <img src={url + props.poster_path} alt="" className="hover" />
                <h2 className="pop title">Titolo: {props.title}</h2>
                <p className="pop original_title">Titolo originale: {props.original_title}</p>
                <p className="pop vote">Voto: {Math.ceil(Math.ceil(props.vote_average) / 2)}</p>
                <p className="pop overview">Overview: {props.overview}</p>
                {/* <FontAwesomeIcon icon={faStar} /> */}
            </div >
        </>
    )
}