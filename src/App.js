import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Web3 from 'web3';
import { ADDRESS, ABI } from './config';
import Form from './components/Form';
import VoteCount from './components/VoteCount';
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      candidatesCount: 0
    }
  }

  componentDidMount() {
    this.load()
  }

  async load() {
    const web3 = new Web3(Web3.givenProvider);
    const vote = new web3.eth.Contract(ABI, ADDRESS);
    let count = 0
    await vote.methods.candidatesCount().call().then((result) => { count = result })
    this.setState({ candidatesCount: count })
  }

  render() {
    return (
      <div>
        candidatesCount : {this.state.candidatesCount}
        <Form />
        <VoteCount />
      </div>
    );
  }
}

export default App;
