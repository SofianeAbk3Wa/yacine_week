import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:8000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <h1>hello world</h1>
      <div>
        <h2>Users:</h2>
        <ul>
          {users.map(user => {
            const { _id, first_name, last_name, email } = user;
            return (
              <li key={_id}>
                <h3>{first_name} {last_name}</h3>
                <p>Email: {email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
