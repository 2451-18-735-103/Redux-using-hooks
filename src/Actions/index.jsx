
//Action Types
export const SET_USER_NAME='SET_USER_NAME';
export const SET_USER_AGE='SET_USER_AGE';
export const RESET_USER='RESET_USER';
//Action Creators



//Action to set user name
//This action creator accepts a name parameter (the new user's name) 
//and returns an action object with type: SET_USER_NAME and the name as the payload.
export const setUserName= (name) => ({
 type:SET_USER_NAME, // the type of the action
 payload:name, // the actual data being passed (in this case, a name)
});
//Action to set userAge
export const setUserAge=(age)=>({
    type:SET_USER_AGE,
    payload:age,
});
//Action to reset user data
export const resetUser=()=>({
    type:RESET_USER,
});

 

