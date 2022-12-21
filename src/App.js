import './App.css';
import { useEffect, useState } from 'react';
import Cat from './Cat'
function App() {
  const [cats, setCats] = useState([])

   const fetchPosts = async () =>{
     const req = await fetch("http://localhost:3000/cats")
     const res = await req.json()
     setCats(res)
    }
    useEffect(()=>{
    // here
      fetchPosts() 
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
