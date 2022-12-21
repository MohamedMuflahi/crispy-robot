const Cat = ({cat}) =>{
    return(
        <div className="card">
            <img alt ="" src={cat.image} />
            <p>{cat.name}</p>
            <p>{cat.score}</p>
        </div>
    )
}
export default Cat;