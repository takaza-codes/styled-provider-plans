import "./App.css";
import { plans } from "../src/constants/plans-info";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="mainContainer">
      {plans.map((plan) => {
        return <Card props={plan} />;
      })}
    </div>
  );
}

export default App;
