import { useState } from "react";
const Submit = ({ cats,setCats}) => {
    const [formOpen, setFormOpen] = useState(false);
    const [nameInput, setNameInput] = useState("")
    const [breedInput, setBreedInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [scoreInput, setScoreInput] = useState("")
    const handlePost = async () => {
        const data = {
            name: nameInput,
            breed: breedInput,
            image: imageInput,
            score: scoreInput
        }
        const request = await fetch("http://localhost:3000/cats",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
        const response = await request.json()
        // take the respone and add it to the back of the CATS state 
        setCats([...cats,response])
    }
    return (
        <>
            {formOpen ?
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handlePost()
                }} style={{ display: 'flex', flexDirection: 'column' }}>

                    <label>Name:</label>
                    <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}></input>

                    <label>Breed:</label>
                    <input value={breedInput} onChange={(e) => setBreedInput(e.target.value)}></input>

                    <label>Image:</label>
                    <input value={imageInput} onChange={(e) => setImageInput(e.target.value)}></input>

                    <label>Score:</label>
                    <input value={scoreInput} onChange={(e) => setScoreInput(e.target.value)}></input>

                    <button style={{
                        width: '200px',
                        height: '50px'
                    }}>Submit</button>

                </form>
                : null}

            <button style={{
                width: '200px',
                height: '50px'
            }} onClick={() => {
                setFormOpen(!formOpen)
            }}>Toggle Form</button>

        </>
    )
}
export default Submit;