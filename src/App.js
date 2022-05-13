import logo from './logo.svg';
import './App.css';
<div>Some text</div>
const MyFunctionComponent = (props) => {
  return (
    <div>
      
      <div>Hello World!</div>
      <img src="image/nikeImg.png" alt="logo" />

    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <MyFunctionComponent/>


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
      </header> <p></p>
    </div>
  );
};

export default App;
