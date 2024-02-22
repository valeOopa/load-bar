
import { useState } from "react"
import { MessageComponent } from "./MessageComponent"
import { WindowComponent } from "./WindowComponent"
import { ResultComponent } from "./ResultComponent";

function App() {
  const [status,setStatus] = useState(false);
  const [responseReady,setResponseReady] = useState(false);
  const [number, setNumber] = useState(0);
  const [error, setError] = useState(false);

  const restartStates = () => {
    setStatus(false);
    setResponseReady(false);
    setNumber(0);
    setError(false);
  };
  return (
    <div id="app">
      {!responseReady && <WindowComponent setStatus={setStatus} number={number} setNumber={setNumber} setError={setError}/>}
      {status  && !responseReady && <MessageComponent setResponseReady={setResponseReady} />}
      {responseReady && <ResultComponent number={number}  restartStates={restartStates} error={error}/>}
    </div>
  )
}

export default App
