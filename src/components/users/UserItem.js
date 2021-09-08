import React, { Component } from 'react'

class UserItem extends Component {
    constructor(){
        super();
        this.state = {
            id : 'id',
            login :'jason1950',
            html_url : 'https://github.com/jason1950',
            avatar_rul : 'https://avatars.githubusercontent.com/u/45868260?s=60&v=4'
        };
    }

    stateNotConstructor = {
        id : 'id',
        login :'jason1950',
        html_url : 'https://github.com/jason1950',
        avatar_rul : 'https://avatars.githubusercontent.com/u/45868260?s=60&v=4'
    };

    render() {
        const {login, html_url, avatar_rul} = this.stateNotConstructor
        return (
            <div className="card text-center">
                <img 
                    src={avatar_rul}
                    alt=''
                    className="round-img"
                    style={{width:'60px'}}
                />
                <h2>
                    {login}
                </h2>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem
