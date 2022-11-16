import React from "react";

function IconCard(props) {
  return (
    <>
      <div className="infos">
        <div className="icon">
          <img src={props.icon} alt="" />
          <div className="exp">
            <div className="substrats-number">{props.dataCount}kCal</div>
            <div className="substrats">{props.nutrition}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconCard;
