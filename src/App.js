import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts.js";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context.js";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header siteName="Contact mananger" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
