import PropTypes from 'prop-types';

export function ResultComponent({ number,restartStates,error }) {
  let result;
  if (error !== true) {
    result = `Pensaste en el número ${number}`;
  } else {
    result = 'Eso no es un número';
  }
  return (
    <div id="app__result">
      <h2 id='result__title'>{result}</h2>
      <button onClick={restartStates} id='result__restart-button' className='buttons'>Reiniciar</button>
    </div>
  )
}

ResultComponent.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  restartStates: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

ResultComponent.defaultProps = {
  number: undefined
};