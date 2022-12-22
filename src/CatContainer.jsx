import Cat from "./Cat"
import { useEffect, useState } from 'react';

const CatContainer = ({ searchTerm, breed }) => {
  const [cats, setCats] = useState([])
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
  return (
    <div className="container">
      {filteredCats.map((cat) => {
        return (
          <Cat key={cat.id} cat={cat} />
        )
      })}
    </div>
  )
}
export default CatContainer