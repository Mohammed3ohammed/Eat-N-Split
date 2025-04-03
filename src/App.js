import React, { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default  function App() {
  return (
    <div className="app">
      <div className="sidebar">
            <FriendsList />
            <Button>Add friend</Button>
            <FromAddFriend /> 
      </div>
      <FormSplitBill />
    </div>

  );
}


function Button  ( {children, onClick} )  {
  return (
      <button className="button" onClick={onClick}>{children}</button>

  )
}

function FromAddFriend () {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      const newFriend = {
          name,
          image,
          balance: 0,
          id: crypto.randomUUID()  
      }
  }

return (
  <form className="form-add-friend" onSubmit={handleSubmit}>
  <label>👭 Friend name</label>
  <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

  <lable>🌇 Image URL</lable>
  <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
  <Button>Add</Button>
  </form>
)
}

function FriendsList() {
  const friends = initialFriends;

  return(
    <ul>
          {
            friends.map((friend) => (
              <Friend friend={friend} key={friend.id} />
           ))
          }
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.img} alt={friend.name} />
      <h3>{friend.name}</h3>
      {
      friend.balance < 0 && (
      <p className="red"> You owe {friend.name} {Math.abs(friend.balance)}$ </p>
    )}
      {
      friend.balance > 0 && (
      <p className="green"> You owe {friend.name} owes you {Math.abs(friend.balance)}$ </p>
    )}
      {
      friend.balance === 0 && ( 
      <p> You and {friend.name} are even </p>
    )}

    <Button>Select</Button>
    </li>
);
}

function FormSplitBill()  {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type='text' />

      <label>🧍‍♀️ Your expense</label>
      <input type='text' />

      <label>👭 X's expense</label>
      <input type='text' />

      <label>🤑 who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  )
}