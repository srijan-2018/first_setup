import React from 'react'

export default function Alert(props) {
  
  let myFunction = () => {
    let x = document.getElementById("myDIV");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    props.alert && <div id="myDIV">
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        {/* <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={myFunction}>
        </button> */}
      </div>
    </div>
  )
}
