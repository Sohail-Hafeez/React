import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["pakistan", "india", "bangladesh", "nepal", "srilanka", "bhutan", "maldives", "afghanistan", "myanmar"];

  return (
    <div>
      <Message />
      <ListGroup items={items} heading="Countries" />
    </div>
  );
}

export default App;