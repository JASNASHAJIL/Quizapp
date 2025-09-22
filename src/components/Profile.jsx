import React, { useContext } from 'react'
import { UserContext } from './Usecontext'

export default function Profile() {
  const { user1, setuser } = useContext(UserContext);

  const handleLogin = () => {
    setuser({ ...user1, name: "janna", loggedin: true });
  };

  const handleLogout = () => {
    setuser({ ...user1, name: "aldi", loggedin: false });
  };

  return (
    <div>
      <h2>User: {user1.name}</h2>
      <p>Status: {user1.loggedin ? "Logged In ✅" : "Logged Out ❌"}</p>

      {user1.loggedin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
