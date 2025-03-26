import React from "react";


function UserList({ users, deleteUser }) {
    return (
      <div>
        <h2>Members Added</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <img 
                  src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" 
                  alt="User Avatar" 
                  width="50" 
                  height="50" 
                  style={{ borderRadius: "50%" }} 
                />
                <div>
                  <strong>Name:</strong> {user.name} <br />
                  <strong>Email:</strong> {user.email}
                </div>
                <button onClick={() => deleteUser(index)} style={{ marginLeft: "10px", background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No members added yet.</p>
        )}
      </div>
    );
  }

export default UserList;