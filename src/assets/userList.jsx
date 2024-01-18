import React from 'react';
import Grid from '@mui/material/Grid';
import UserCard from './card';

const UsersList = ({ users }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UsersList;
