import { useState, useEffect } from "react";
import TeamMember from "./TeamMember";
import axios from "axios";

const TeamMemberList = (props) => {

  const [ users, setUsers ] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    setUsers(response.data);
  };

  useEffect( () => { fetchUsers(users) }, [ users ] );

  return (
    <>
     {users.map(user => {
       return <TeamMember key={user.id} name={user.name}/>
     })}
    </>
    );
};

export default TeamMemberList;