import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import StartingPage from './components/startingPage';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import SignOut from './components/auth/signout';
import Projects from './components/projects';
import FirstProject from './components/firstProject/firstProject';
import YouTubeApp from './components/youtubeApp/index';
import WeatherApp from './components/weatherApp/app';
import ReactRouterApp from './components/react-router-App/posts_index';
import PostsShow from './components/react-router-App/posts_show'
import NewPostForm from './components/react-router-App/posts_new';

import RequireAuth from './components/auth/require_authentication';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk,ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={StartingPage}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signout" component={SignOut}/>
            <Route path="/firstproject" component={RequireAuth(FirstProject)}/>
            <Route path="/youtubeapp" component={RequireAuth(YouTubeApp)}/>
            <Route path="/WeatherApp" component={RequireAuth(WeatherApp)}/>
            <Route path="/ReactRouterApp" component={RequireAuth(ReactRouterApp)}/>
            <Route path="/posts/:id" components={RequireAuth(PostsShow)}/>
            <Route path="/newPost" components={RequireAuth(NewPostForm)}/>
            <Route  path="/projects" component={RequireAuth(Projects)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
