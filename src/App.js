import './App.css';
import { useEffect,useState } from 'react';
import Cat from './Cat'
function App() {
  const [cats,setCats] = useState([])
  const fetchCats = async () =>{
    const request  = await fetch("http://localhost:3000/cats")
    const response = await request.json()
    
    setCats(response)
    console.log(response)
  }
  useEffect(()=>{
    fetchCats();
  },[])
  return (
    <div className="App">
      {cats.map((cat)=>{
        return(
          <Cat key={cat.id} cat={cat}/>
        )
      })}
    </div>
  );
}

export default App;
