import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button size="small">FORWARDS</Button>
      <Button size="big" secondary>
        BACKWARDS
      </Button>
      <Input size="medium" mode="dark" />
    </div>
  );
}

export default App;
