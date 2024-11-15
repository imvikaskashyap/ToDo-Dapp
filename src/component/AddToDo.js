'use client';
import { getBalance, getContract, getReward } from "@/helper";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const AddToDo = async () => {
  const [tasks, setTasks] = useState([]);

  const crateTask = async () => {
    const contract = getContract();
    const tx = await contract.createTask(tasks, {
      value: ethers.utils.parseEther("0.1"),
    });
    await tx.wait();
  };

  useEffect(() => {
    const contract = getContract();
    crateTask()
    contract.on("taskCreated", (id, work, status) => {
      getReward();
      getBalance();
      alert("Task Created");
    });
  });

  return (
    <div>
      <input type="text" onChange={(e) => setTasks(e.target.value)} />
      <button>Add Task</button>
    </div>
  );
};

export default AddToDo;
