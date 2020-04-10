import React, { Component } from 'react';
import User from '../components/User/User';
import {connect} from 'react-redux';
import './UserContainer.css'
class UserContainer extends Component {
    state = {
        id: '',
        name: '',
        email: '',
        active: false,
        removeID: ''
    }

    idChangedHandler = (event) => {
        this.setState({id: event.target.value});
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    emailChangedHandler = (event) => {
        this.setState({email: event.target.value});
    }

    activeChangedHandler = (event) => {
        this.setState({active: event.target.checked});
    }

    removeIDChangedHandler = (event) => {
        this.setState({removeID: event.target.value});
    }

    render(){
        const loadUser = this.props.users.map(item => {
            return(
                <User id={item.id} name={item.name} email={item.email} active={item.active}/>
            )
        });

        return (
            <div>
                <form className="input-form">
                    <h2>New user information</h2>
                    <label>ID:</label>
                    <input type="text" name="id" placeholder="ID" value={this.state.id} onChange={this.idChangedHandler}/>

                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.nameChangedHandler}/>

                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.emailChangedHandler}/>

                    <div className="form-inline">
                    <label>Active:</label>
                    <input type="checkbox" name="active" checked={this.state.active} onChange={this.activeChangedHandler}/>
                    </div>

                    <div className="form-inline">
                    <label style={{color:'red'}}>Remove ID (optional):</label>
                    <input type="text" name="removeID" value={this.state.removeID} onChange={this.removeIDChangedHandler}/>
                    </div>

                </form>
                <div className="button">
                    <button onClick={() => this.props.onCreateUser(this.state.id, this.state.name, this.state.email, this.state.active)}>Add a new user</button>
                    <button onClick={() => this.props.onRemoveUser(this.state.removeID)}>Remove user</button>
                    <button onClick={this.props.onFilterUser}>Filter active users</button>
                </div>
                <h2>List of users:</h2>
                <div id="table">
                    <div className="row main">
                        <div className="cell id" >ID</div>
                        <div className="cell name" >Name</div>
                        <div className="cell email">Email</div>
                        <div className="cell active">Activation</div>
                    </div>
                    {loadUser}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return{
    users: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onCreateUser: (id, name, email, active) => dispatch({type: 'CREATE_USER', payload: {id: id, name: name, email: email, active: active}}),
    onRemoveUser: (removeID) => dispatch({type: 'REMOVE_USER_BY_ID', payload: {removeID: removeID}}),
    onFilterUser: () => dispatch({type: 'FILTER_ACTIVE_USER', payload: {active: true}}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
