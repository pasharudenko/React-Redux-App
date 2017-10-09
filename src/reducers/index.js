import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import usersList from './firstProject/users_list';
import usersDetails from './firstProject/users_reducer';
import WeatherReducer from './weatherApp/weather_reducer';
import PostsReducer from './react-router-App/reducer_posts';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    users: usersList,
    singleUser: usersDetails,
    weather: WeatherReducer,
    posts: PostsReducer
});

export default rootReducer;
