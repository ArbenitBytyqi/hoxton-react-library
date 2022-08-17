import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button size="small">FORWARDS</Button>
      <Button size="big" secondary>
        BACKWARDS
      </Button>
    </div>
  );
}

export default App;
