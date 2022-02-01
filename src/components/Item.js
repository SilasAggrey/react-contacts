import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Item = (props) => {
  
  const [isShowing, setIsShowing] = useState(false);

  const id = props.user.id;
  const username = props.user.name;
  const useremail = props.user.email;
  const usergen = props.user.gen;

  const [name, setName] = useState(username);
  const [email, setEmail] = useState(useremail);
  const [gen, setGen] = useState(usergen);


  const handleEdit = () => {
    let editedUser = {
      name: name,
      email: email,
      gen: gen,
      id: id,
    };


    props.editUser(id, editedUser);
    setIsShowing(false);
  };

  return (
    <div>
      <h3>{username}</h3>
      <h4>{useremail}</h4>
      <h5>{usergen}</h5>
      <Button
        onClick={() => {
          setIsShowing(true);
        }}
      >
        Edit
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          props.deleteUser(id);
        }}
      >
        Delete
      </Button>

      <Modal
        show={isShowing}
        onHide={() => {
          setIsShowing(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="FullName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="PhoneNumber"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
           />
          <input
            type="text"
            placeholder="Location"
            value={gen}
            onChange={(e) => {
              setGen(e.target.value);
            }}
        
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
              setIsShowing(false)
          }}>Close</Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Item;