import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS=[
  {
    id:'c1',
    date: new Date(2023,1,12),
    description: "Pants",
    amount: 12
  },
  {
    id:'c2',
    date: new Date(2021,11,15),
    description: "T-shirt",
    amount: 60
  },
  {
    id:'c3',
    date: new Date(2022,9,20),
    description: "Hoodie",
    amount: 80
  },
  {
    id:'c4',
    date: new Date(2021,7,30),
    description:"Iphone X",
    amount: 800
  }
];


const App=()=> {

  const [costs,setCosts]=useState(INITIAL_COSTS);




  const addCostHandler=(cost)=>
  {
    setCosts(prevCosts=>{
        return[cost,...prevCosts]
      });
  };

  return (
    <div>
    <NewCost onAddCost={addCostHandler} />
    <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
