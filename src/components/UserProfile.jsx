import React, { useEffect, useState } from "react";

function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
