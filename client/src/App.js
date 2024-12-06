import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';


const api_version = "api/v1";
const backend_url = `http://localhost:5000/${api_version}`;

function App() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(`${backend_url}/envis/get_username`)
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('erroring fetchin data: ', error);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hello, world!</h1>

        <p>React is running successfully</p>
        <p><button onClick={fetchData}>Fetch data</button>{data ? <p>{data.message}</p> : <p>no data yet</p>}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
