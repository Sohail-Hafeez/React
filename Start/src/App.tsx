import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";


function App() {

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World!</Alert>}
      <Button children="Click me" color="success" onClick={() => { setAlertVisibility(!alertVisible) }} />
    </div>
  );
}

export default App;