import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async () => {
    try {
      await axios.post('http://localhost:8000/users', newUser);
      fetchUsers();
      setNewUser({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const updateUser = async (userId, updatedUser) => {
    try {
      await axios.put(`http://localhost:8000/users/${userId}`, updatedUser);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleEdit = (userId, updatedInfo) => {
    const updatedUsers = users.map(user => {
      if (user._id === userId) {
        return { ...user, ...updatedInfo };
      }
      return user;
    });
    setUsers(updatedUsers);
    updateUser(userId, updatedInfo);
  };

  return (
    <>
      <h1>hello world</h1>
      <div>
        <h2>Add User:</h2>
        <input
          type="text"
          placeholder="First Name"
          value={newUser.first_name}
          onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.last_name}
          onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
          <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        <h2>Users:</h2>
        <ul>
          {users.map(user => {
            const { _id, first_name, last_name, email } = user;
            return (
              <li key={_id}>
                <input
                  type="text"
                  value={first_name}
                  onChange={(e) => handleEdit(_id, { first_name: e.target.value })}
                />
                <input
                  type="text"
                  value={last_name}
                  onChange={(e) => handleEdit(_id, { last_name: e.target.value })}
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => handleEdit(_id, { email: e.target.value })}
                />
                <button onClick={() => deleteUser(_id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
