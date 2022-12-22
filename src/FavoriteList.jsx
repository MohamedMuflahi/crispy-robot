import Cat from "./Cat";
const FavoriteList = ({favoriteCats, setFavoriteCats}) =>{
    const handleDelete = (id) => {
        // delete
        setFavoriteCats(favoriteCats.filter((cat)=>{
            return cat.id !== id
        }))
    }
    const handleFavorite = (cat)=>{
        
    }
    return(
        <>
        {favoriteCats.map((cat)=>{
            return(
                <Cat key={cat.id} cat={cat} handleDelete={handleDelete} handleFavorite={handleFavorite}/>
            )
        })}
        </>
    )
}
export default FavoriteList;