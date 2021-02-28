import "./App.css";

import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Overall Layout
{
  /* Header */
  /* Tinder Cards */
  /* Buttons Below */
  /* Chat Screen */
  /* Individual Chat Screen */
}

function App() {
  return (
    <div className="App">
      {/* Header is outside Router because we want it on every page */}
      <Router>
        <Switch>
          {/*  */}

          {/* The particular chat screen is dynamic, thus using the wildcard ':person' */}
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>

          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

          {/*  */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
