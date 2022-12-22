import './App.css';
import CatContainer from './CatContainer';
import SearchBar from './SearchBar';
import { useState } from "react"
import DropDown from './DropDown';
function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [breed, setBreed] = useState("All")
  
  return (
    <div className="App">
      <SearchBar 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      />
      <DropDown breed={breed} setBreed={setBreed}/>
      <CatContainer 
      searchTerm={searchTerm} 
      breed={breed}
      />
    </div>
  );
}

export default App;
