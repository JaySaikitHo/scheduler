import React from "react";

import "components/Button.scss";

const classNames = require('classnames');



export default function Button(props) {
 const buttonClass = classNames('button', {
   'button--confirm':props.confirm,
   'button--danger':props.danger
   
   });

  
   // let buttonClass = "button";

   // if(props.confirm) {
   //    buttonClass += " button--confirm";
   // }
   
   // if(props.danger) {
   //    buttonClass += " button--danger";
   // }

   // if(props.disabled) {
   //    buttonClass += " button-disabled";
     
      
   // }

   return <button onClick={props.onClick} disabled={props.disabled} className={buttonClass}>{props.children}</button>;
}
