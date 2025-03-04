import React, { useEffect } from 'react';
import { setCookie } from '../utils/cookie';
import { useScrollToBottom } from '../hooks';
import { useParams } from 'react-router-dom';

// Components
export const EditProfile = () => {
    const { id, name } = useParams()

  useEffect(() => setCookie('editProfile__' + id, 'true', 3), [id]);
  useScrollToBottom(() => setCookie('scrolledToBottomOnEditProfile__' + id, 'true', 3));


  return (
    <div className="page-edit-profile">
        <h1>Edit Profile Page</h1>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Cookies will expire in 3 days</p>
    </div>
  )
};
