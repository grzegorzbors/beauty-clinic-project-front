import { useState, useEffect } from "react";
import TeamMember from "./TeamMember";
import axios from "axios";

const TeamMemberList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(process.env.REACT_APP_ENDPOINT_URL);
      setUsers(response.data);
    };
    fetchUsers();
  },[]);

  return (
    <>
      {users.map((user) => {
        return (
          <TeamMember
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            description={user.description}
            url={user.url}
          />
        );
      })}
    </>
  );
};

export default TeamMemberList;