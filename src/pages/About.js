import React, { useEffect } from 'react';
import { setCookie } from '../utils/cookie';
import { useScrollToBottom } from '../hooks';

// Components
export const About = () => {
    useEffect(() => setCookie('aboutPageVisited', 'true', 3), []);
    useScrollToBottom(() => {
        console.log('scrolled to the bottom')
        setCookie('scrolledToBottomOnAbout', 'true', 3)
    });
    return (
        <div className="page-about">
            <h1>About Page</h1>
            <p>Welcome to the about page. Scroll down to trigger a cookie!</p>
            <p>Cookies will expire in 3 days</p>
        </div>
    )
};
