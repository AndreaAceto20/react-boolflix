export default function Card({ props, url }) {
    return (
        <>
            <div className='card' key={props.id}>
                <img src={url + props.poster_path} alt="" className="hover" />
                <div className="pop">
                    <h2 className="pop">Titolo: {props.title}</h2>
                    <p className="pop ">Titolo originale: {props.original_title}</p>
                    <p className="pop ">Voto: {Math.ceil(Math.ceil(props.vote_average) / 2)}</p>
                    <p className="pop ">Overview: {props.overview}</p>
                    {/* <FontAwesomeIcon icon={faStar} /> */}
                </div>
            </div >
        </>
    )
}