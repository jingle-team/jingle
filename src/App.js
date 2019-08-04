import React from "react";
import "./app-layout.css";
import searhIcon from "./img/magnifying-glass.svg";
import addIcon from "./img/add.svg";
import appIcon from "./img/speech-bubble.svg";
import friendIcon from "./img/friends.svg";

function App() {
  return (
    <table id="container">
      <tbody>
        <tr>
          <td id="left" className="p-1">
            <div>
              <img
                id="btn-home"
                className="btn left-icons m-2"
                alt="Home"
                src={appIcon}
              />
            </div>

            <div>
              <img
                id="btn-add-server"
                className="btn left-icons  mx-2 my-1"
                alt="Add a Server"
                src={addIcon}
              />
            </div>

            <div>
              <img
                id="btn-find-server"
                className="btn left-icons mx-2 my-1"
                src={searhIcon}
                alt="Find Server"
              />
            </div>
          </td>

          <td id="middle" className="p-1">
            <div id="middle-search-bar-container">
              <input
                id="middle-search-bar"
                className="p-1 mx-auto form-control"
                type="text"
                placeholder="Find or start a conversation"
              />
            </div>

            <div id="middle-main" className="mt-2">
              <header id="middle-main-header" className="mt-3">
                Direct Messages
              </header>
            </div>
          </td>

          <td id="right" className="p-1">
            <ul id="friend-nav" className="nav nav-tabs nav-fill mt-2">
              <li className="nav-item mr-2">
                <div id="friend-tag">
                  <img id="friend-icon" src={friendIcon} alt="friends icon" />
                  <div id="friend-title" className="ml-2">
                    Friends
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <div className="nav-link friends-nav-link">Online</div>
              </li>

              <li className="nav-item">
                <div className="nav-link friends-nav-link">All</div>
              </li>

              <li className="nav-item">
                <div className="nav-link friends-nav-link">Pending</div>
              </li>

              <li className="nav-item">
                <div className="nav-link friends-nav-link">Blocked</div>
              </li>

              <li className="nav-item">
                <div className="btn btn-success">Add Friends</div>
              </li>
            </ul>

            <div id="friend-table-header" className="p-1">
              <div id="friend-column-name">Name</div>
              <span className="friend-header-separator mr-3">|</span>
              <div id="friend-column-status">Status</div>
              <span className="friend-header-separator mr-3">|</span>
              <div id="friend-column-actions">Action</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
