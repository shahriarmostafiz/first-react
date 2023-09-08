import { useState } from "react"

const styles = {border: '2px solid purple', borderRadius: "10px", margin: '20px 0', padding: '1rem' , color: 'aqua'} 
export default function Team (){
    const [current , playersCount] = useState(11)
    function addPlayer () {
        playersCount(current+1)
    }
    function removePlayer () {
        playersCount(current-1)
    }

    return (
        <div style={styles}>
            <h2>Players: {current} </h2>
            <button onClick={addPlayer}>ADD</button>
            <button style={{margin:'0px 10px'}} onClick={removePlayer}>Remove</button>
        </div>
    )
}