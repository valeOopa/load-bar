import { useEffect, useState } from "react";
import { LoadingBar } from "./LoadingBar";
import PropTypes from 'prop-types';

export function MessageComponent({ setResponseReady }) {
  const phrases = ['Analizando pensamiento...', 'Procesando la memoria...', 'Renderizado conexión cognitiva...', 'Proyección cerebral casi completa...'];
  const [phrase,setPhrase] = useState(phrases[0]); 
  const [progressBar,setProgressBar] = useState(0);
  useEffect(() => {
    const progressBarInterval = setInterval(() => {
      setProgressBar(prevProgressBar => {
        const newProgressBar = prevProgressBar + 1;
        if (newProgressBar >= 100) clearInterval(progressBarInterval);

        if (newProgressBar <= 25) setPhrase(phrases[0]);
        else if (newProgressBar <= 50) setPhrase(phrases[1]);
        else if (newProgressBar <= 75) setPhrase(phrases[2]);
        else setPhrase(phrases[3]);
        return newProgressBar;
      });
    }, 60);
  
    return () => clearInterval(progressBarInterval);
  }, []);

  useEffect(()=>{
    if(progressBar === 100) setResponseReady(true)
  },[progressBar])
  

  return (
    <div id="app__message">
      <p id="app__phrases">{phrase}</p>
      <LoadingBar progressBar={progressBar} />
    </div>
  )
}

MessageComponent.propTypes = {
  setResponseReady: PropTypes.func.isRequired
};