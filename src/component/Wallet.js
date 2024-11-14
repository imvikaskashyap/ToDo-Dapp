'use client';
import React, { useEffect } from 'react';

const Wallet = ({ account, setAccount }) => {
    const connect = async () => {
        if (typeof window.ethereum !== 'undefined') {  
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setAccount(accounts); 
            } catch (error) {   
                console.log(error);
            }
        } else {
            console.log("Please install MetaMask!");
        }
    };

    useEffect(()=>{
        connect()
    },[])

    return (
        <>
        {account ? (
            <h3>Wallet connected at : {account}</h3>
          ) : (
            <button onClick={connect}>Connect Wallet</button>
          )}
          </>
    );
};

export default Wallet;


