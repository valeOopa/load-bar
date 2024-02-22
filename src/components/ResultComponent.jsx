import PropTypes from 'prop-types';

export function ResultComponent({ number,restartStates }) {
  return (
    <div id="app__result">
      <h2 id='result__title'>Pensaste en el número {number}</h2>
      <button onClick={restartStates} id='result__restart-button' className='buttons'>Reiniciar</button>
    </div>
  )
}

ResultComponent.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  restartStates: PropTypes.func.isRequired
};