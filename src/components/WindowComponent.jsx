import PropTypes from 'prop-types';

export function WindowComponent({ setStatus, number, setNumber }) {
  

  const changeNumber = e => {
    setNumber(e.target.value);
  };

  const checkNumber = () => setStatus(true);
  
  return (
    <div id="app__window">
      <h1 id="window__title">Piensa en un número</h1>
      <input id="window__input-number" type="number" value={number} onChange={changeNumber} />
      <button id="window__button" className='buttons' onClick={checkNumber}>Lee mi mente</button>
    </div>
  );
}

WindowComponent.propTypes = {
  setStatus: PropTypes.func.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setNumber: PropTypes.func.isRequired
};