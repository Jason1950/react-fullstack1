import React, { Component } from 'react'

class UserItem extends Component {
    constructor(){
        super();
        this.user = {
            id : 'Jason',
            user_url : 'https://github.com/jason1950'
        }
    }

    render() {
        return (
            <div>
                UserItem
            </div>
        );
    }
}

export default UserItem
