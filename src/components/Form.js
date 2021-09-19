import React, { useState } from "react"
import Web3 from 'web3';
import { ADDRESS, ABI } from '../config';
export default function Form() {
    const [candidate, setCandidate] = useState("2");
    const [account, setAccount] = useState("")
    const handleChange = (event) => {
        const { type, name, value } = event.target
        setCandidate(value)

    }

    const onSubmit = (event) => {
        event.preventDefault()
        const web3 = new Web3(Web3.givenProvider);
        web3.eth.getAccounts().then((accounts) => {
            const Vote = new web3.eth.Contract(ABI, ADDRESS);
            Vote.methods.vote(parseInt(candidate)).send({ from: accounts[0] }).then(() => { })
        })

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <input
                        type="radio"
                        name="candidate"
                        value="0"

                        onChange={handleChange}
                    />
                    First Candidate
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="candidate"
                        value="1"

                        onChange={handleChange}
                    />
                    Second Candidate
                </label>
                <br />
                <button type="submit"> Vote </button>
            </form>
        </div>
    )
}
