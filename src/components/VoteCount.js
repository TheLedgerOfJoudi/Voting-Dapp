import React, {useState} from "react"
import reactDom from "react-dom"
import Web3 from 'web3';
import { ADDRESS , ABI } from '../config';
function VoteCount(){

    let [candidateOne, setCandidateOne]  = useState(0)
    let [candidateTwo, setCandidateTwo]  = useState(0)
    function updateVotes() {
        const web3 = new Web3(Web3.givenProvider);
        const Vote = new web3.eth.Contract(ABI, ADDRESS);
        Vote.methods.candidateOneVotes().call().then((res) => {setCandidateOne(res);})
        Vote.methods.candidateTwoVotes().call().then((res) => {setCandidateTwo(res);}) 
    }
    updateVotes()
    return(
        <div>
           {candidateOne}
           <br/>
           {candidateTwo}
        </div>
    )
}
export default VoteCount