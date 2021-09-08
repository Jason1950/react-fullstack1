import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users : [
            {
                id : '1',
                login :'jason1950',
                html_url : 'https://github.com/jason1950',
                avatar_rul : 'https://avatars.githubusercontent.com/u/45868260?s=60&v=4'
            },
            {
                id : '2',
                login :'Qeolee',
                html_url : 'https://github.com/Qeolee',
                avatar_rul : 'https://avatars.githubusercontent.com/u/82988889?s=100&v=4'
            },
            {
                id : '3',
                login :'albert-hg',
                html_url : 'https://github.com/albert-hg',
                avatar_rul : 'https://avatars.githubusercontent.com/u/47311038?v=4'
            }
        ]
    }
    
    render() {
        const {users} = this.state
        return (
            <div style={userPageStyle}>
                {users.map((obj)=>(
                    <UserItem key={obj.id} user={obj} />
                ))}
            </div>
        );
    }
}

const userPageStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
