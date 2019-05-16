import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getFriends = () => dispatch => {
      dispatch({ type: FETCH_FRIENDS });
      axios
            .get('http://localhost:5000/api/friends/')
            .then(res => {
                  dispatch({ type: SUCCESS, payload: res.data });
            })
            .catch(err => {
                  console.log('action error', err);
                  dispatch({ type: FAILURE, payload: err.data });
            })
}