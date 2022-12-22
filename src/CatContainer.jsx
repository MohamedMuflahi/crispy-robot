import Cat from "./Cat"
import { useEffect,useState } from 'react';

const CatContainer = ({searchTerm}) =>{
   const [cats,setCats] = useState([])
   const filteredCats = cats.filter((cat)=>{
    return cat.name.toLowerCase().includes(searchTerm.toLowerCase())    
   }) 
  const fetchCats = async () =>{
    const request  = await fetch("http://localhost:3000/cats")
    const response = await request.json()
    
    setCats(response)
    console.log(response)
  }
  useEffect(()=>{
    fetchCats();
  },[])
    return(
        <div className="container">
        {filteredCats.map((cat)=>{
        return(
          <Cat key={cat.id} cat={cat}/>
        )
      })}
        </div>
    )
}
export default CatContainer