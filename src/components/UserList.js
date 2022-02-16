import React from "react";
import Item from "./Item";

 const UserList = (props) => {
   return (
     <div>
       <h1>List of users</h1>
       {props.users.map((user, index) => {
         return (
           <Item
           key={user.name}
           user={user}
           editUser={props.editUser}
           deleteUser={props.deleteUser}
           />
         );
       })}
     </div>
   );
 };



export default UserList;

