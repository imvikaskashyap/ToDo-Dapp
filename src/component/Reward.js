'use client';
import {  getReward } from "@/helper";
import React, { useEffect } from "react";

const Reward = ({ totalReward, setTotalReward }) => {
  const rewardBal = async () => {
    const rew = await getReward();
    setTotalReward(rew);
  };

  useEffect(() => {
    rewardBal();
  }, []);

  return (
    <div>
      <h1>Complete your tasks to get reward of Eth : {totalReward}</h1>
    </div>
  );
};

export default Reward;
