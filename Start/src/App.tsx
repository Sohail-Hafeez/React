import Button from "./Components/Button";

function App() {
  return (
    <div>
      <Button children="Click me" color="success" onClick={() => { console.log("Button clicked") }} />
    </div>
  );
}

export default App;