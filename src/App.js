import './App.css';
import CatContainer from './CatContainer';
import SearchBar from './SearchBar';
import { useState } from "react"
import DropDown from './DropDown';
import Submit from './Submit'
import FavoriteList from './FavoriteList';
function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [breed, setBreed] = useState("All")
  const [cats, setCats] = useState([])
  const [favoriteCats, setFavoriteCats] = useState([])

  return (
    <div className="App">
      <SearchBar 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      />
      <DropDown breed={breed} setBreed={setBreed}/>
      <CatContainer 
      cats={cats}
      setCats={setCats}
      searchTerm={searchTerm} 
      breed={breed}
      favoriteCats={favoriteCats} 
      setFavoriteCats={setFavoriteCats}
      />
      <Submit
       cats={cats}
       setCats={setCats}
      />
      <h1>Favorites:</h1>
      <FavoriteList favoriteCats={favoriteCats} setFavoriteCats={setFavoriteCats}/>
    </div>
  );
}

export default App;
