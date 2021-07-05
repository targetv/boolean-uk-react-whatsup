
function UserCard({UserData: {firstName, lastName, avatar}}){
    return (
        
        <li>
        <button class="user-selection">
          <img
            class="avatar"
            width="50"
            height="50"
            src={avatar}
            alt=""
          />
          <h3>{firstName} {lastName}</h3>
        </button>
      </li>
    )
}

export default UserCard