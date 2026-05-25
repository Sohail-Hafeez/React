import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["pakistan", "india", "bangladesh", "nepal", "srilanka", "bhutan", "maldives", "afghanistan", "myanmar"];

  const handleSelectItem = (item: string) => {
    console.log(`${item} is selected`);
  }
  return (
    <div>
      <Message />
      <ListGroup items={items} heading="Countries" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;