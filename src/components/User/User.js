import React from 'react'
const User = (props) => {
    return(
        <div className="row">
            <div className="cell id" >{props.id}</div>
            <div className="cell name" >{props.name}</div>
            <div className="cell email" >{props.email}</div>
            {props.active ? <div className="cell active">True</div> : <div className="cell active">False</div>}
        </div>
    )
}

export default User;