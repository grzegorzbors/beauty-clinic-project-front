import { useState, useEffect } from "react";
import TeamMember from "./TeamMember";
import axios from "axios";
import urls from "../api/urls";

const TeamMemberList = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}${urls.USERS}`);
      setUsers(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const userList = users.map((user) => {
    return (
      <TeamMember
        key={user.id}
        userData={user}
      />
    );
  });

  return (
    <>
      {isError && <p>Error connecting to user database, please contact site administrator.</p>}
      {isLoading ? <p>Loading, please wait..</p> : userList}
    </>
  );
};

export default TeamMemberList;