import axios from 'axios';
// import { axiosWithAuth } from '../../axiosWithAuth';
//action types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'SUCCESS';
export const FETCH_FAIL = 'FAILURE';
export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';
export const EDIT_FRIEND_START = 'EDIT_FRIEND_START';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAIL = 'EDIT_FAIL';

//action creators
export const login = creds => dispatch => {
      dispatch({ type: LOGIN_START });
      return axios
            .post('http://localhost:5000/api/login', creds)
            .then(res => {
                  console.log('login success', res)
                  localStorage.setItem('token', res.data.payload)
                  dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
            })
            .catch(err => {
                  console.log('login error', err);
                  dispatch({ type: LOGIN_FAIL, payload: err.data });
            })
}
export const getFriends = () => dispatch => {
      dispatch({ type: FETCH_FRIENDS });
      axios
            .get('http://localhost:5000/api/friends')
            .then( res => {
                  console.log('fetch success', res.data)
                  dispatch({ type: FETCH_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                  console.log('fetch fail', err)
                  dispatch({ type: FETCH_FAIL, payload: err.data})
            })
} 