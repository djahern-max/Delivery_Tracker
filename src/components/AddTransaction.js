import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [amount, setAmount] = useState(0);
  const [phase, setPhase] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      to,
      from,
      phase,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add Delivery</h3>
      <form onSubmit={onSubmit}>
      <div className="form-control">
          <label htmlFor="amount"
            >QUAN <br />
            (Positive - DELIVERED, Negative - PICKED UP)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>

        <div className="form-control">
          <label htmlFor="text">DESCRIPTION</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Product Delivered..." />

          <label htmlFor="text">TO</label>
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Job / Pit #..." />
          
          <label htmlFor="text">FROM</label>
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Job / Pit #..." />

          <label htmlFor="text">PHASE CODE</label>
          <input type="text" value={phase} onChange={(e) => setPhase(e.target.value)} placeholder="Phase Code..." />
        </div>

{/* 
        <div className="form-control">
          <label htmlFor="text">FROM</label>
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Job / Pit #..." />
        </div> */}
        {/* <div className="form-control">
          <label htmlFor="text">TO</label>
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Job / Pit #..." />
        </div> */}




        <button className="btn">Add Delivery</button>
      </form>
    </>
  )
}