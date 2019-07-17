import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDG-em2ib-epSwa60wFbrwDT0HNr2GABW8",
    authDomain: "bloc-chat-react-c946b.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-c946b.firebaseio.com",
    projectId: "bloc-chat-react-c946b",
    storageBucket: "",
    messagingSenderId: "598443165869",
    appId: "1:598443165869:web:ac4ed3f72c23d92a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  class App extends Component {
    constructor(props) {
      super(props)
  }

  render() {
    return (
      <div className="App">
        <aside id="sidebar">
          <h1 className="App-title">Bloc Chat</h1>
          <RoomList firebase={firebase}/>
        </aside>
    </div>
    );
  }
}

export default App;
