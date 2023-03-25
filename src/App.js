import Counter from "./counter";
import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
  console.log("render app")
  return (
    <>
      <Counter initialCount={4} />
      <Component1 text="testing1" />
      <Component2 text="testing2" />
    </>
  )
}

export default App;
