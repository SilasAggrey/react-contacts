import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/ContactsForm";
import UserList from "./components/UserList";
import { v4 as uuid } from "uuid";

const App = () => {
     const [users, setUsers] = useState([
     { id: uuid(), name: "Tony", email: "tony@email.com",location: "Spintex" },
     { id: uuid(), name: "Joe", email: "joe@email.com", location: "Tema" },
   ]);

   const addUser = (newUser) => {
     setUsers([...users, newUser]);
   };

   const editUser = (id, newUser) => {
    const editedUsers = users.map((user) => {
      if (user.id == id) {
        return newUser;
      }
      return user;
    });

    setUsers(editedUsers);
  };

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => {
      if (user.id != id) return user;
    });

    setUsers(filteredUsers);
  };

   return (
     <div>
       <UserForm addUser={addUser} />
       <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
     </div>
   );
 };



 

export default App;
 