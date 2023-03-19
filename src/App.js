import Counter from "./counter";
function App() {
  console.log("render app")
  return (
    <Counter initialCount={4} />
  )
}

export default App;
