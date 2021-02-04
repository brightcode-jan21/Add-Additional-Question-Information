import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

import './Styles.scss';

const Button = (props) => {

  return (
    <div className={"submitButton " + (props.inactive ? "submitButton--inactive" : "")} onClick={props.handleSubmit} >
      <div className="submitButton__placeholder"></div>
      <div className="submitButton__label">{props.label}</div>
      <div className="submitButton__icon">
        {props.showLoader && <FontAwesomeIcon icon={faSync} className="spinningLoader" />}
      </div>
    </div>
  )
}

export default Button;