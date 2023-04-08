import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
    props.alert && <span className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert" mx-8>
       <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg} {/*if type is success shOW MSG*/}
        
    </span>
    
  )
}

export default Alert