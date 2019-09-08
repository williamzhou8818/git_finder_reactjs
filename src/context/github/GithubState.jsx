import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../type';


const GithubState = prop => {
    const  initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users

    const searchUsers = async text => {

        setLoading();
    
        const res =  await axios.get(`https://api.github.com/search/users?q=${text}`);
    
       //setUsers(res.data.items);
     
        dispatch({ 
            type: SEARCH_USERS,
            payload: res.data.items
        });
        
    };
    

    // Get User
    const getUser = async (username) => {
       setLoading();
       const res = await axios.get(`https://api.github.com/users/${username}`);
   
       dispatch({type: GET_USER, payload: res.data});
   
     }

    // Get Repos
    const getUserRepos = async username => {

        setLoading()
    
        const res = await axios.get( `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    
      }
    
    // Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS});
    // Set Loading

    const setLoading = () =>  dispatch({type: SET_LOADING});


    return <GithubContext.Provider 
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading ,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {prop.children}
    </GithubContext.Provider>
}

export default GithubState;