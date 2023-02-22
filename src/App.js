import CostItem from "./components/CostItem";

function App() {

const costs=[
  {
    date: new Date(2022,1,12),
    description: "Pants",
    amount: 12
  },
  {
    date: new Date(2021,11,15),
    description: "T-shirt",
    amount: 60
  },
  {
    date: new Date(2022,9,20),
    description: "Hoodie",
    amount: 80
  }
];

  return (
    <div className="App">
        <h1>Salam Aleikym!</h1>
        <CostItem date={costs[0].date}
         description={costs[0].description}
         amount={costs[0].amount}></CostItem>
        <CostItem date={costs[1].date}
         description={costs[1].description}
         amount={costs[1].amount}></CostItem>
         <CostItem date={costs[2].date}
         description={costs[2].description}
         amount={costs[2].amount}></CostItem>
    </div>
  );
}

export default App;
