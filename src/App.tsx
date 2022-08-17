import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

const checkboxList = [
  {
    type: "checkbox",
  },
  {
    type: "checkbox",
  },
  {
    type: "checkbox",
  },
];

const radiosList = [
  {
    type: "radio",
  },
  {
    type: "radio",
  },
  {
    type: "radio",
  },
];

function App() {
  return (
    <div className="App">
      <Button size="small">FORWARDS</Button>
      <Button size="big" secondary>
        BACKWARDS
      </Button>
      <Input size="medium" mode="dark" />
      {checkboxList.map((checkbox) => (
        <input type={checkbox.type} />
      ))}
      {radiosList.map((radio) => (
        <input type={radio.type} />
      ))}
    </div>
  );
}

export default App;
