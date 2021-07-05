import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react"

function UserChatMessages(){

    const {id} = useParams()
    const [userConversations, setConversations] = useState([])
    const [usersData, setUsersData] = useState([])
    
 useEffect(()=>{
    fetch(`http://localhost:4000/users/${id}/conversations`).then(resp => resp.json()).then(setConversations)
 },[setConversations])

 useEffect(() => {
    fetch("http://localhost:4000/users").then(resp => resp.json()).then(setUsersData)
},[setUsersData])

 if( userConversations === undefined ||  usersData.length === 0){
     return <main>Loading data</main>
 }



 function findUser(userToFindId){
    const user = usersData.find(user => user.id === userToFindId)
    return user
 }

    return (
        <>
        {userConversations.map(message => {
            return (
     <Link to={`/logged-in/${id}/messages/${message.id}`}><li>
    <button class="chat-button">
      <img
        class="avatar"
        height="50"
        width="50"
        alt=""
        src={`${findUser(message.participantId).avatar}`}
      />
      <div>
        <h3>{`${findUser(message.participantId).firstName} ${findUser(message.participantId).lastName}`}</h3>
        <p>Last message</p>
      </div>
    </button>
  </li></Link>
            )
        })}
  
  </>
    )
}

export default UserChatMessages