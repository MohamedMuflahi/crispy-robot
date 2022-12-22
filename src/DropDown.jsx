const DropDown = ({breed,setBreed}) =>{
    return (
        <form>
            <select value={breed} onChange={(e)=> setBreed(e.target.value)}>
                <option >All</option>
                <option>Persian</option>
                <option>Siamese</option>
                <option>Bangal</option>
            </select>
        </form>
    )
}
export default DropDown