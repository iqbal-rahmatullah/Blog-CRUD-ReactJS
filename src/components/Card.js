const Card = (props) => {
    return (
        <div className="card">
            <h4>{props.title}</h4>
            <p>{props.paragraf}</p>
            <img src={props.img}></img>
        </div>
    )
}

export default Card