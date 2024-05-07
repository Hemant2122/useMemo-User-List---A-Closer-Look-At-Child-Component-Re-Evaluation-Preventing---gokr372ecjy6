import { useMemo } from 'react';

function UsersList({ users, startingLetter }) {

  const filteredUsers = useMemo(() => {
    if(!users || users.length === 0 || !startingLetter){
      return users;
    }

    return users.filter(user => user.name.startsWith(startingLetter));
  }, [users, startingLetter])
  

  return (
    <>
      {filteredUsers && filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user, index) => {
            return(
              <li key={index}>{user.name}</li>
            )
          })}
        </ul>
      ) : ("")}
    </>
  );
}

export default UsersList;
