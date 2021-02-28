import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "ellen",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/michelle-dead-to-me-natalie-morales-roles-1589304411.jpg",
      message: "yoo",
    },
    {
      message: "whats up",
    },
    {
      name: "ellen",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/michelle-dead-to-me-natalie-morales-roles-1589304411.jpg",
      message: "yoo",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    // default is refreshing the screen on hitting send

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div>
      <p className="chatScreen__timestamp">
        You matched with Ellen on 25/2/21{" "}
      </p>

      {messages.map((message) =>
        // If name exists, msg is from the other person
        // If not, the message is from you
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message. . . "
            type="text"
          />
          <button onClick={handleSend} className="chatScreen__inputButton">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
