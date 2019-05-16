import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';
//action types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'SUCCESS';
export const FETCH_FAIL = 'FAILURE';

//action creators
export const login = creds => dispatch => {
      dispatch({ type: LOGIN_START });
      return axios
            .post('http://localhost:5000/api/login', creds)
            .then(res => {
                  localStorage.setItem('token', res.data.payload)
                  dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
            })
            .catch(err => {
                  console.log('action error', err);
                  dispatch({ type: LOGIN_FAIL, payload: err.data });
            })
}
export const getFriends = () => dispatch => {
      dispatch({ type: FETCH_FRIENDS });
      axiosWithAuth()
            .get('/api/friends')
            .then( res => {
                  dispatch({ type: FETCH_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                  dispatch({ type: FETCH_FAIL, payload: err.data})
            })
} 