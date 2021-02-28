import React from "react";
import "./chats.css";
import Chat from "../components/Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Vic"
        message="Hey!"
        timestamp="40seconds ago"
        profilePic="https://images-na.ssl-images-amazon.com/images/I/41VocZyE9sL._AC_.jpg"
      />
      <Chat name="Vic" message="Hey!" timestamp="40seconds ago" profilePic="" />
      <Chat
        name="Vic"
        message="Hey!"
        timestamp="40seconds ago"
        profilePic="https://images-na.ssl-images-amazon.com/images/I/41VocZyE9sL._AC_.jpg"
      />
      <Chat
        name="Vic"
        message="Hey!"
        timestamp="40seconds ago"
        profilePic="https://images-na.ssl-images-amazon.com/images/I/41VocZyE9sL._AC_.jpg"
      />
    </div>
  );
}

export default Chats;
