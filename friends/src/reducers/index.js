//import action types
import { 
      LOGIN_START, 
      LOGIN_SUCCESS, 
      LOGIN_FAIL, 
      FETCH_FRIENDS, 
      SUCCESS, 
      FAILURE, 
      FETCH_SUCCESS,
      FETCH_FAIL
} from '../actions/index';

//build initial state - empty arrays, false booleans
const initialState = {
      friends: [],
      isFetching: false,
      error: null,
      loggedIn: false
};

export const friendReducer = (state = initialState, action) => {
      console.log('reducer', action)
      switch (action.type) {
            case LOGIN_START:
                  return {
                        ...state,
                        loggedIn: true,
                        error: ''
                  };
            case LOGIN_SUCCESS:
                  return {
                        ...state,
                        loggedIn: false,
                        error: ''
                  };
            case LOGIN_FAIL:
                  return {
                        error: 'UH-OH.'
                  };
            case FETCH_FRIENDS:
                  return {
                        ...state,
                        isFetching: true,
                        error: ''
                  }
            case FETCH_SUCCESS:
                  return {
                        ...state,
                        isFetching: false,
                        error: '',
                        firends: action.payload
                  }
            case FETCH_FAIL:
                  return {
                        isFetching: false,
                        error: 'unplug it, then plug it back in?'
                  }
            default:
                  return state;
      }
}

export default friendReducer;