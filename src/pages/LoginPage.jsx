import UserCard from "../components/UserCard"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

function LoginPage(){
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/users").then(resp => resp.json()).then(setUsers)
    },[setUsers])

   
    return(
        <div class="main-wrapper login">
  <section class="login-section">
    <h2>Choose your user!</h2>
    <ul>
     {users.map(user => {
         return(
             <Link to={`/logged-in/${user.id}`}><UserCard UserData={user}/></Link>
             
         )
     })}
      <li>
        <button class="user-selection"><h3>+ Add a new user</h3></button>
      </li>
    </ul>
  </section>
</div>

    )
}

export default LoginPage