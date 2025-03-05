export default function Card({ props, url }) {
    return (
        <>
            <div className='card' key={props.id}>
                <img src={url + props.poster_path} alt="" className="hover" />
                <div className="pop">
                    <h2 >Titolo: {props.title}</h2>
                    <p >Titolo originale: {props.original_title}</p>
                    <p >Voto: {Math.ceil(Math.ceil(props.vote_average) / 2)}</p>
                    <p>Overview: {props.overview}</p>
                    {/* <FontAwesomeIcon icon={faStar} /> */}
                </div>
            </div >
        </>
    )
}