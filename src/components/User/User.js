import React from 'react'
const User = (props) => {
    return(
        <div class="row">
            <div class="cell id" >{props.id}</div>
            <div class="cell name" >{props.name}</div>
            <div class="cell email" >{props.email}</div>
            {props.active ? <div class="cell active">True</div> : <div class="cell active">False</div>}
        </div>
    )
}

export default User;