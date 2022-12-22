import Cat from "./Cat"
import { useEffect} from 'react';

const CatContainer = ({ searchTerm, breed,setCats,cats }) => {

  const breedFilteredCats = cats.filter((cat) => {
    if (breed === "All") {
      return true
    } else {
      return cat.breed.toLowerCase() === breed.toLowerCase()
    }
  });
  const filteredCats = breedFilteredCats.filter((cat) => {
    return cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  console.log(breedFilteredCats)
  console.log("F", filteredCats)
  const fetchCats = async () => {
    const request = await fetch("http://localhost:3000/cats")
    const response = await request.json()

    setCats(response)
    console.log(response)
  }
  useEffect(() => {
    fetchCats();
  }, [])

  const handleDelete = (id) =>{

    // part 1
    fetch(`http://localhost:3000/cats/${id}`,{
      method: 'DELETE',
    })
    .then((response)=> response.json())
    .then(data=>{
      setCats(cats.filter((cat)=>{
        return cat.id !== id
       }))

    })

  }
  return (
    <div className="container">
      {filteredCats.map((cat) => {
        return (
          <Cat key={cat.id} cat={cat} handleDelete={handleDelete}/>
        )
      })}
    </div>
  )
}
export default CatContainer