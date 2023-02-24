import Costs from "./components/Costs";

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
  },
  {
    date: new Date(2021,7,30),
    description:"Iphone X",
    amount: 800
  }
];

  return (
    <div>
    <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
