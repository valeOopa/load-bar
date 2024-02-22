import PropTypes from 'prop-types';

export function LoadingBar({ progressBar }) {
  const loadingBarStyle = {
    width: `${progressBar}%`
  };
  return (
    <div id="message__loadingBarContainer">
      <div id="loadingBarContainer__loadingBar" style={loadingBarStyle}></div>
    </div>
  )
}

LoadingBar.propTypes = {
  progressBar: PropTypes.number.isRequired
};