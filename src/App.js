import logo from './logo.svg';
import './App.css';
import React from 'react';

const ApplicantStage = Object.freeze({
  APPLIED: Symbol("Applied"),
  INTERVIEWED: Symbol("Interviewed"),
  OFFER: Symbol("OFFER"),
  ACCEPTED: Symbol("ACCEPTED")
});

class Offer extends React.Component {
  constructor(props) {
    super(props);
    props.state = {
      baseSalary: 0,
      signOnBonus: 0
    };
  };
}

class Applicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: ApplicantStage.APPLIED,
      offer: null
    };
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
