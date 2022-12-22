import { useState } from "react"
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>
            <form>
                <input type="text"
                    value={searchTerm}
                    onChange={(e)=>{
                        setSearchTerm(e.target.value)
                    }}
                ></input>
            </form>
        </div>
    )
}
export default SearchBar