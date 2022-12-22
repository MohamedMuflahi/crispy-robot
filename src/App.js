import './App.css';
import CatContainer from './CatContainer';
import SearchBar from './SearchBar';
import { useState } from "react"
import DropDown from './DropDown';
import Submit from './Submit'
function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [breed, setBreed] = useState("All")
  const [cats, setCats] = useState([])
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
      />
      <Submit
       cats={cats}
       setCats={setCats}
      />
    </div>
  );
}

export default App;
