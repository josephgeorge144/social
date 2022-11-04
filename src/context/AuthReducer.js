const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
        return {
            user:'login started',
            isFetching:true,
            error:false
        };
    
    case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                isFetching:false,
                error:false
            };

    case "LOGIN_FAILUIRE":
                return {
                    user:null,
                    isFetching:null,
                    error:action.payload
                };
    default:
        return state
  }
};
export default AuthReducer