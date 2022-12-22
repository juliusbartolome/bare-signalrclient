import React from 'react';
import logo from './logo.svg';
import './App.css';
import signalR from '@microsoft/signalr';

function App() {
  const url = "";
  const subscribionMethodName = "";
  const subscriptionArgs: any[] = [];
  const subscribeToMethodName = "";

  let connection = new signalR.HubConnectionBuilder()
    .withUrl(url)
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection.on(subscribeToMethodName, data => {
      console.log(`${subscribeToMethodName} executed`);
      console.log(data);
  });

  connection.start()
      .then(() => connection.invoke(subscribionMethodName, subscriptionArgs));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
