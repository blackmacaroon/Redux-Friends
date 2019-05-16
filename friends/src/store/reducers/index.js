//import action types
import { 
      LOGIN_START, 
      LOGIN_SUCCESS, 
      LOGIN_FAIL, 
      FETCH_FRIENDS, 
      FETCH_SUCCESS,
      FETCH_FAIL,
      ADD_FRIEND_START,
      ADD_SUCCESS,
      ADD_FAIL,
      EDIT_FRIEND_START,
      EDIT_SUCCESS,
      EDIT_FAIL
} from '../actions/index';

//build initial state - empty arrays, false booleans
const initialState = {
      friends: [],
      isFetching: false,
      isDeleting: false,
      isAdding: false,
      isEditing: false,
      error: null,
      loggedIn: false
};

const friendReducer = (state = initialState, action) => {
      console.log('reducer', state)
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
                        friends: action.payload
                  }
            case FETCH_FAIL:
                  return {
                        isFetching: false,
                        error: 'unplug it, then plug it back in?'
                  }
            case ADD_FRIEND_START:
                  return {
                        ...state,
                        isAdding: true,
                        error: ''
                  }
            case ADD_SUCCESS:
                  return {
                        ...state,
                        isAdding: true,
                        error: ''
                  }
            case ADD_FAIL:
                  return {
                        ...state,
                        isAdding: false,
                        error: 'not really "your people"'

                  }
            case EDIT_FRIEND_START:
                  return {
                        ...state,
                        isEditing: true,
                        error: ''
                  }
            case EDIT_SUCCESS:
                  return {
                        ...state,
                        isEditing: true,
                        error: ''
                  }
            case EDIT_FAIL:
                  return {
                        ...state,
                        isEditing: false,
                        error: 'try to change yourself, first.'
                  }
            default:
                  return state;
      }
}

export default friendReducer;
