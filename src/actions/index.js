import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SELECTED_USER, FEATCH_WEATHER, FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from "./types";


const API_WEATHER_KEY = '34f1557739472b13ada6ec97cd09b901';
const WEATHER_ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+API_WEATHER_KEY;


const BLOG_ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const BLOG_API_KEY = '?key=illidanstormragesf46';



const ROOT_URL = 'http://localhost:3090';

export function SignInUser ( {login, password} ) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, {login, password})
            .then( response => {
                dispatch({ type:AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/projects');
            })
            .catch(() => {
                dispatch(authError('Bad Login Info...'));
            })
    }
}
export function SignUpUser( {email, login, password} ) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, {email, login, password})
            .then(response => {
                dispatch({ type:AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/projects');
            })
            .catch(() => {
                dispatch(authError('Email or Login is in use...'));
            })
    }
}
export function signOutUser() {
    localStorage.removeItem('token');
    return {
        type:UNAUTH_USER
    }
}
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}
export function selectedUser(user) {
    return {
        type:SELECTED_USER,
        payload: user
    }
}
export function featchWeather(city) {
    const url = `${WEATHER_ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FEATCH_WEATHER,
        payload: request
    }
}
export function fetchPosts() {
    const url = `${BLOG_ROOT_URL}/posts${BLOG_API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}
export function fetchPost(id) {
    const request = axios.get(`${BLOG_ROOT_URL}/posts/${id}${BLOG_API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}
export function createPost(props) {
    const request = axios.post(`${BLOG_ROOT_URL}/posts${BLOG_API_KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    }
}
export function deletePost(id) {
    const request = axios.delete(`${BLOG_ROOT_URL}/posts/${id}${BLOG_API_KEY}`);
    return {
        type: DELETE_POST,
        payload: request
    }
}