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
export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

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
                  dispatch({ type: LOGIN_FAIL, payload: err });
            })
}
export const getFriends = () => dispatch => {
      dispatch({ type: FETCH_FRIENDS });
      axios
            .get('http://localhost:5000/api/friends')
            .then(res => {
                  console.log('fetch success', res)
                  dispatch({ type: FETCH_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                  console.log('fetch fail', err)
                  dispatch({ type: FETCH_FAIL, payload: err})
            })
} 
export const addFriend = friend => dispatch => {
      dispatch({ type: ADD_FRIEND_START });
      axios 
            .post('http://localhost:5000/api/friends', friend)
            .then(res => {
                  console.log('add success', res)
                  dispatch({ type: ADD_SUCCESS, payload: res.data })
            })
            .catch(err => {
                  console.log('add fail', err)
                  dispatch({ type: ADD_FAIL, payload: err })
            })
}
export const editFriend = friend => dispatch => {
      dispatch({ type: EDIT_FRIEND_START });
      axios
            .put('http://localhost:5000/api/friends/:id', friend)
            .then(res => {
                  console.log('edit success', res)
                  dispatch({ type: EDIT_SUCCESS, payload: res.data })
            })
            .catch(err => {
                  console.log('edit fail', err)
                  dispatch({ type: EDIT_FAIL, payload: err })
            })
}
export const deleteFriend = id => dispatch => {
      dispatch({ type: DELETE_START });
      axios
            .delete(`http://localhost:5000/api/friends${id}`)
            .then (res => {
                  console.log('delete success', res)
                  dispatch({ type: DELETE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                  console.log('delete fail', err)
                  dispatch({ type: DELETE_FAIL, payload: err})
            })
}