import './App.css';
import CatContainer from './CatContainer';
import SearchBar from './SearchBar';
import { useState } from "react"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <div className="App">
      <SearchBar 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      />
      
      <CatContainer 
      searchTerm={searchTerm} 
      />
    </div>
  );
}

export default App;
