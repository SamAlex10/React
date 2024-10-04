import { useEffect, useState } from "react";
import axios from 'axios';

const Login = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:3000/data")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.title}</p>
          <p>{user.author}</p>
        </div>
      ))}
    </ul>
  );
};

export default Login;
