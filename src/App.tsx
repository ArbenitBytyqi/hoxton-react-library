import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

const checkboxList = [
  {
    text: "Male",
  },
  {
    text: "Female",
  },
  {
    text: "Don't want to tell youuu!!",
  },
];

const radioList = [
  {
    text: "Gaming",
  },
  {
    text: "Learning",
  },
  {
    text: "Mocking Ed and Nico",
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
      <li>
        {checkboxList.map((checkbox) => (
          <div className="checkbox-list">
            <input
              type="checkbox"
              name="checkboxList"
              className="checkbox-letters"
              required
              onSelect={() => {}}
            />
            <label>{checkbox.text}</label>
          </div>
        ))}
      </li>

      <li>
        {radioList.map((radio) => (
          <div className="radio-list">
            <input
              type="radio"
              name="radioList"
              className="radio-letters"
              required
              onSelect={() => {}}
            />
            <label>{radio.text}</label>
          </div>
        ))}
      </li>
    </div>
  );
}

export default App;
