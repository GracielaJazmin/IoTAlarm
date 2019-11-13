import React from 'react';

const UserContext = React.createContext({});

export const UserProvide = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;

React.createContext(true)