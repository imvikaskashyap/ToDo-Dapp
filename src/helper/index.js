const ethers = require("ethers");
const { TODO_ABI } = require("../../contracts/ABIs/todoList");
const { TODO_CONTRACT_ADDRESS } = require("../../contracts/Address");

export const getContract = () => {
  if ( typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(TODO_CONTRACT_ADDRESS,  TODO_ABI,  signer);
    console.log("Provider:", provider);
    console.log("Signer:", signer);
    console.log("Contract:", contract);

    return contract;
  } else {
    console.log("MetaMask is not installed or window.ethereum is unavailable.");
    return null;
  }
};

export const getBalance = async () => {
  const contract = getContract();

  if (!contract) {
    console.error("Contract instance could not be created.");
    return null;
  }

  try {
    const balance = await contract.getRevenue();
    return ethers.utils.formatEther(balance) || 0;
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};


export const getReward = async () =>{
    const contract = getContract();

    if (!contract) {
        console.error("Contract instance could not be created.");
        return null;
      }

      try { 
        const balance = await contract.getReward();
        return ethers.utils.formatEther(balance) || 0;
      } catch (error) {
        console.error("Error fetching balance:", error);    
      } 
}

export const getTaskList = async () =>{
    const contract = getContract();

    if (!contract) {
        console.error("Contract instance could not be created.");
        return null;
      }

      try { 
        const taskList = await contract.getTask();
        return taskList
      } catch (error) {
        console.error("Error fetching tasks:", error);    
      } 
}

