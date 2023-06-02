import "./App.css";
import useName from "./stores/store";

function App() {
  const { name, setName } = useName((state) => state);

  console.log(name);

  return (
    <div>
      <button onClick={() => setName("saman")}>Click</button>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
