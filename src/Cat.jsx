const Cat = ({cat}) =>{
    // {
    //     "id": 1,
    //     "name" : "Benga" ,
    //     "image": "https://animals.sandiegozoo.org/sites/default/files/2020-08/black-footed.jpg",
    //     "score": 100
    //   }
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