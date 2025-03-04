import React, { useEffect } from 'react';
import { setCookie } from '../utils/cookie';
import { useScrollToBottom } from '../hooks';
import { Link } from 'react-router-dom';

// Components
export const Profile = () => {
  const profiles = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'John' },
    { id: 6, name: 'Jane' }
  ]

  useEffect(() => setCookie('profilePageVisited', 'true', 1), []);
  useScrollToBottom(() => setCookie('scrolledToBottomOnProfile', 'true', 1));

  return (
    <div className="page-profile">
        <h1>Profile Page</h1>
        <p>Welcome to the home page. Scroll down to trigger a cookie!</p>
        <p>Cookies will expire in 1 day.</p>

        <div className="profile-list">
            {(profiles || []).map(({ id, name }) => (
                <div key={id} className='profile-card'>
                <h2>Profile Info:</h2>
                <p><strong>Name:</strong> {name || 'Unknown'}</p>
                { id && <p><strong>ID:</strong> {id}</p>}

                <div className='d-flex'>
                  <Link to={`/profile/${id}/${name}/edit`}>Edit</Link>
                  <Link to={`/profile/${id}/${name}/delete`} style={{ marginLeft: '10px' }}>Delete</Link>
                </div>
              </div>
            ))}
        </div>

    </div>
  )
};
