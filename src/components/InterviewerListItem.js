import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";




export default function InterviewerListItem (props) {
  let interviewerClass = classnames ("interviewers__item",{ //changes styling when interviewer is selected
    
    "interviewers__item--selected": props.selected,
    

  });
  
    return(
  <li className={interviewerClass} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
  );
};