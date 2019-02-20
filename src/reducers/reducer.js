

const initialState = {
   user: {name:"EMPTY"}
  }

const reducer = (state = initialState, action) => {

   
      if(action.type == 'CHANGE_USER'){
        return {
            ...state, user: action.usr
        }
      
      }
      if(action.type == "ID_TOKEN"){
        let token = action.token;
        return{
          ...state, ID_TOKEN: token
        }
      }
        return state
  }
  
  export default reducer