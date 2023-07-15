import React from 'react'

function Alert(props) {
  return (
    <div>
        props.alert &&<div className="alert alert-primary d-flex align-items-center" role="alert">
            <div>
              <strong>{props.alert.type}</strong> :{props.alert.msg}
            </div>
        </div>
    </div>
  )
}

export default Alert
