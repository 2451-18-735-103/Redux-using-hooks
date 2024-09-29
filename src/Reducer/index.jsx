import { SET_USER_NAME, SET_USER_AGE, RESET_USER} from '../Actions';


const initialState={
    userName:'Manasa',
    age:23,
};

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USER_NAME:
            return{
                ...state,
                userName:action.payload,// Update userName with the new value from action.payload
            };
            case SET_USER_AGE:
                return {
                  ...state,
                  age: action.payload,
                };
              case RESET_USER:
                return {
                  ...initialState,  // Reset to the initial state
                };
              default:
                return state;   // If action type is not recognized, return the current state

    }
}

export default userReducer;