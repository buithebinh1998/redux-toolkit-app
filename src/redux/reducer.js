import {createReducer} from '@reduxjs/toolkit'
import {createAction} from '@reduxjs/toolkit'

const CREATE_USER = createAction('CREATE_USER');
const REMOVE_USER_BY_ID = createAction('REMOVE_USER_BY_ID');
const FILTER_ACTIVE_USER = createAction('FILTER_ACTIVE_USER');

const initialState = {
    user: [
        {id: '1', name: 'Binh', email: 'binh.buithe@pycogroup.com', active: false},
    ]
}



const userReducer = createReducer(initialState,{
    [CREATE_USER]: (state, action) => {
        return{
            ...state, 
            user: state.user.concat(action.payload),
        };
    },

    [REMOVE_USER_BY_ID]: (state, action) => {
        return{
            ...state,
            user: state.user.filter(item => item.id !== action.payload.removeID),
        };
    },

    [FILTER_ACTIVE_USER]: (state, action) => {
        return{
            ...state,
            user: state.user.filter(item => item.active === action.payload.active),
        };
    },

})
export default userReducer;