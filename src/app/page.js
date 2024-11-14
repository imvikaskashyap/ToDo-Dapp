"use client";
import AddToDo from "@/component/AddToDo";
import Reward from "@/component/Reward";
import TodoList from "@/component/TodoList";
import TotalValueLock from "@/component/TotalValueLock";
import Wallet from "@/component/Wallet";
import { useState } from "react";

export default function Home() {

  const[account, setAccount] = useState(null) 
  const[totalValue, setTotalValue] = useState("") 
  const[totalReward, setTotalReward] = useState(null) 
  const [data, setData] = useState([]);

  return (
    <div>
    <h1>ToDO Application</h1>
      <Wallet account={account} setAccount={setAccount} />
      <TotalValueLock totalValue={totalValue} setTotalValue={setTotalValue}/>
      <Reward totalReward={totalReward} setTotalReward={setTotalReward}/>
      <AddToDo/>
      {/* <TodoList data={data} setData={setData}/> */}
    </div>
  );
}
