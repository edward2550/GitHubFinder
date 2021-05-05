import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
