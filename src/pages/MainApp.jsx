import { useEffect, useState } from "react";
import { useParams, Route } from "react-router-dom"
import UserChatMessages from "../components/userChatMesages";
import UserMessages from "../components/UserMessages";



export default function MainApp(){ 
  
  const {id} = useParams();

  const [userProfile, setUserProfile] = useState({})


  useEffect(() => {
   fetch(`http://localhost:4000/users/${id}`).then(resp => resp.json()).then(setUserProfile)
  }, [setUserProfile] )
 


 if(userProfile === undefined){
   return <h1>Loading Profile</h1>
 }



return (
<div class="main-wrapper">
  {/* <!-- Side Panel --> */}
  <aside>
    {/* <!-- Side Header --> */}
    <header class="panel">
      <img
        class="avatar"
        width="50"
        height="50"
        src={userProfile.avatar}
        alt=""
      />
      <h3>{`${userProfile.firstName} ${userProfile.lastName}`}</h3>
    </header>

    {/* <!-- Search form --> */}
    <form class="aside__search-container">
      <input
        type="search"
        name="messagesSearch"
        placeholder="Search chats"
        value=""
      />
    </form>

    <ul>
    <li>
    <button class="chat-button">
      <div><h3>+ Start a new Chat</h3></div>
    </button>
  </li>

    <UserChatMessages UserProfile={userProfile}/>
    </ul>

    
  </aside>

  {/* <!-- Main Chat Section --> */}
  <main class="conversation">
    {/* <!-- Chat header --> */}
    <header class="panel"></header>

    {/* <!-- 

      The Messages List will go here. Check main-messages-list.html
     --> */}
    <ul class="conversation__messages">
      <Route path="/logged-in/:id/messages/:message.id">
        <UserMessages/>
      </Route>
    </ul>

    {/* <!-- Message Box --> */}
    <footer>
      <form class="panel conversation__message-box">
        <input
          type="text"
          placeholder="Type a message"
          rows="1"
          value=""
        /><button type="submit">
          {/* <!-- This is the send button --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
            ></path>
          </svg>
        </button>
      </form>
    </footer>
  </main>
</div>

)}