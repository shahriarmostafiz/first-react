import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)
    function increment (){
        setCount(count+1)
    }
    const [initial, setDouble] = useState(1)
    function dislike (){ 
       
        setCount(  count-1)
    }
    function doubled(){
        setDouble(initial*2)
    }
    function halved (){
        
        setDouble(initial/2)}

    const styles = {border: '2px solid purple', borderRadius: "10px", margin: '20px 0', padding: '1rem' , color: 'aqua'} 
    return (
        <>
        <div style={styles}>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Like</button>
            <button onClick={dislike}>dislike</button>
            </div>
            <div style={styles}>
            <h3>Value = {initial} </h3>
            <button onClick={doubled}>double it</button>
            <button onClick={halved }>half it</button>
        </div>
        </>
    )
}