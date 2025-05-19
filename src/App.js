import "./App.css";
import { plans } from "../src/constants/plans-info";
import OptionCard from "./components/OptionCard/OptionCard";

function App() {
  return (
    <div className="mainContainer">
      {plans.map((plan) => {
        return <OptionCard key={plan.id} props={plan} />;
      })}
    </div>
  );
}

export default App;
