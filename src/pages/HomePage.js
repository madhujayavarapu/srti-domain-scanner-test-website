import React, { useEffect } from 'react';
import { setCookie } from '../utils/cookie';
import { useScrollToBottom } from '../hooks';

// Components
export const Home = () => {
  useEffect(() => setCookie('homePageVisited', 'true', 7), []);
  useScrollToBottom(() => setCookie('scrolledToBottomOnHome', 'true', 7));
  return (
    <div className="page-home">
        <h1>Home Page</h1>
        <p>Welcome to the home page. Scroll down to trigger a cookie!</p>
        <p>Cookies will expire in 7 days</p>
    </div>
  )
};
