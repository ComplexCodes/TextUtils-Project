import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
    props.alert && <span className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
       <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg} {/*if type is success shOW MSG*/}
        
    </span>
    </div>
  )
}

export default Alert