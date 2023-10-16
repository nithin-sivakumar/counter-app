import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Info from "./Info.jsx";

function App() {
  let init = 0
  let [MINVAL, setMINVAL] = useState(0)
  let [MAXVAL, setMAXVAL] = useState(10)
  let [counter, setCounter] = useState(init);
  let [MinValReached, setMinValReached] = useState(false);
  let [MaxValReached, setMaxValReached] = useState(false);

  useEffect(() => {
    if (counter >= MINVAL && counter <= MAXVAL) {
      setMinValReached(false);
      setMaxValReached(false);
    }
  }, [counter]);

  const incrementHandler = () => {
    if (counter + 1 > MAXVAL) {
      setMaxValReached(true);
      return;
    }
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    if (counter - 1 < MINVAL) {
      setMinValReached(true);
      return;
    }
    setCounter(counter - 1);
  };

  const resetHandler = () => {
    setCounter(init);
    setMINVAL(0)
    setMAXVAL(10)
    setMaxValReached(false)
    setMinValReached(false)
  };

  return (
    <>
      <h1>Simple React Counter</h1>
      <h1>Counter value: {counter}</h1>
      <div style={{margin: "5px"}}>
        <div>
          <span style={{fontSize: "22px"}}>Minimum: </span>
          <input required value={MINVAL} onChange={(e) => setMINVAL(e.target.value)} style={{fontSize: "22px", height: "30px", width: "130px", margin: "5px"}} placeholder="Minimum" type="number" name="minval" id="minval" />
        </div>
        <div>
          <span style={{fontSize: "22px"}}>Maximum: </span>
          <input required value={MAXVAL} onChange={(e) => setMAXVAL(e.target.value)} style={{fontSize: "22px", height: "30px", width: "130px", margin: "5px"}} placeholder="Maximum" type="number" name="maxval" id="maxval"/>
        </div>
      </div>
      <div style={{margin: "5px"}}>
        <button style={{ margin: "5px" }} onClick={incrementHandler}>
          Increment {counter != 0 && counter}
        </button>
        <button style={{ margin: "5px" }} onClick={decrementHandler}>
          Decrement {counter != 0 && counter}
        </button>
        <button style={{ margin: "5px" }} onClick={resetHandler}>
          Reset
        </button>
      </div>
      {counter == 0 && <Info />}
      {MaxValReached && (
        <button disabled>ERR: Value cannot be greater than {MAXVAL}</button>
      )}
      {MinValReached && (
        <button disabled>ERR: Value cannot be lesser than {MINVAL}</button>
      )}
    </>
  );
}

export default App;
