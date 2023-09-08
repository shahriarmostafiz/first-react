export default function MyFriend({friend}) {
    // console.log(friend);
    const {name, email} = friend;
    const styles = {border: '2px solid purple', borderRadius: "10px", margin: '20px 0', padding: '1rem' } 

    
    return (
        <div style={styles}>
        <h2>Name: {name}</h2>
        <h4> Email : {email}</h4>
        </div>
    )
}