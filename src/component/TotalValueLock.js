'use client';
import { getBalance } from "@/helper";
import React, { useEffect } from "react";

const TotalValueLock = ({ totalValue, setTotalValue }) => {
  const totalValueLock = async () => {
    const tvl = await getBalance();
    setTotalValue(tvl);
  };

  useEffect(() => {
    totalValueLock();
  }, []);

  return (
    <div style={{ textAlign: "right", marginRight: "30px" }}>
      <h1 >TVL : {totalValue}</h1>
    </div>
  );
};

export default TotalValueLock;
