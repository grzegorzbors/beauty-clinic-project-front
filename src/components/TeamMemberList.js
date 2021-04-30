import { useState, useEffect } from "react";
import TeamMember from "./TeamMember";
import axios from "axios";

const TeamMemberList = (props) => {

  const [ users, setUsers ] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(`https://hospital-application.herokuapp.com/api/users`);

    setUsers(response.data);
  };

  useEffect( () => { fetchUsers(users) }, [ users ] );

  return (
    <>
     {users.map(user => {
       return <TeamMember key={user.id} firstName={user.firstName} lastName={user.lastName}/>
     })}
    </>
    );
};

export default TeamMemberList;