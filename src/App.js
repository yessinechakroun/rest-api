import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AddContact from './Components/addContact';
import EditContact from './Components/EditContact';
import ContactList from './Components/ContactList';




const App = () => {
  return (<BrowserRouter>
    <Route path="/" render={() => <div>
      <Link to ="/add_Contact">
        <button>ADD Contact </button>
      </Link>
      <Link to="/Contacts">
        <button>To Contact List</button>
      </Link>


    </div>} />
    <Route path="/Contacts" component={ContactList}/>
    <Route path="/add_Contact" component={AddContact} />
    <Route path="/Edit_Contact/:id/:name/:phone/:email" component={EditContact} />



  </BrowserRouter>

  );
}

export default App;