import React from 'react';

import './Styles.scss';

const ProgressBar = ({id, totalQuestions}) => {

  return(
    <div className="progressBar">
      <div className="progressBar__fill" style={{ width : (id + 1) / (totalQuestions + 1) * 100 + "%"}} />
      <div className="progressBar__background"></div>
    </div>
  )
}

export default ProgressBar;