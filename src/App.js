import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

const costs=[
  {
    id:'c1',
    date: new Date(2022,1,12),
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


const addCostHandler=(cost)=>{
  
}

  return (
    <div>
    <NewCost onAddCost={addCostHandler}/>
    <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
