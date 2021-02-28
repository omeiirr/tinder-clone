import React from "react";
// import {Link} from "react-router-dom;"
// We are using avatar so that material-ui handles all the formatting
// (roudned corners for profilePic etc) on its own.
import Avatar from "@material-ui/core/Avatar";

import "./chat.css";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>

        <div>
          <p className="chat__timestamp">{timestamp}</p>
        </div>
      </div>
    </Link>
  );
}

export default Chat;
