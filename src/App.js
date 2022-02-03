import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance1', amount: 221.31, date: new Date(2021, 3, 28) },
    { id: 'e2', title: 'Car Insurance2', amount: 11.31, date: new Date(2021, 3, 28) },
    { id: 'e3', title: 'Car Insurance3', amount: 2231.1, date: new Date(2021, 3, 28) },
    { id: 'e4', title: 'Car Insurance4', amount: 331.33, date: new Date(2021, 3, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
