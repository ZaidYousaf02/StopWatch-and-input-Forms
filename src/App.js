import { useState } from "react";
import InputForm from "./components/InputForm";
import StopWatch from "./components/StopWatch";

function App() {
  const [isVisible, SetVisible] = useState(true);

  return (
    <div className="App">
      <StopWatch />

      {isVisible ? <InputForm /> : <></>}
      <button onClick={() => SetVisible(!isVisible)} className="btn">
        Click here
      </button>
    </div>
  );
}

export default App;
