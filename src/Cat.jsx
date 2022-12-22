const Cat = ({ cat, handleDelete}) => {
    const { name, image, score} = cat
    
    return (
        <div className="card">
            <img alt="" src={image} />
            <p>{name}</p>
            <p>{score}</p>
            <button style={{
                border: '1px solid black',
                backgroundColor: 'white',
                color: 'red'
            }}
            onClick={()=>{
                handleDelete(cat.id)
            }}
            >X</button>
        </div>
    )
}

export default Cat;