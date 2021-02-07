import React from 'react';
import './Styles.scss';
import infoButton from "./infoIcon.png";

const InfoBox = ({info})=>{
  const [isShowInfo, setShowInfo] = React.useState(false);
  return(
    <>
        <button className="infoButton"
              onClick={()=>{setShowInfo(true)}}>
              <img src={infoButton} alt = "info" />
        </button>
        {isShowInfo &&  
          <>
            <div className="infoBoxBackground" onClick={()=>setShowInfo(false)}> </div>
            <div className="infoBox">
                <p className="infoBox__title">Rules
                    <button className="infoBox__titleButton"
                    onClick={()=>setShowInfo(false)}></button>
                </p> 
                <p className="infoBox__info"> { info }</p> 
          </div>
          </>
    }
       
    </>
  )
}

export default InfoBox;


