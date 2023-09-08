import { useEffect, useState } from "react"
import MyFriend from "./friend"
export default function Friends (){
    const [friends, setFriends] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then (data=> setFriends(data))
        
    },[])
    return (
        <div>
            <h3>Friends : {friends.length} </h3>
            {
                friends.map(element => <MyFriend friend = {element}></MyFriend>)
            }
        </div>
    )
}