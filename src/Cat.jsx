const Cat = ({cat}) =>{
    const {name, image, score} = cat
    return(
        <div>
            <img alt="" src={image}/>
            <p>{name}</p>
            <p>{score}</p>
        </div>
    )
}

export default Cat;