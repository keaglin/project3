import React, {Component} from 'react'
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton.js'
import SignupForm from './SignupForm.js'

class LoginControl extends Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    //////
    render() {
        const isLoggedIn = this.state.isLoggedIn

        let button = null

        button = isLoggedIn ?
        <LogoutButton onClick={this.handleLogoutClick} /> :
        button = <LoginButton onClick={this.handleLoginClick} />
        

        return (
            <div>
                <SignupForm 
                    onSubmit={(e) => console.log('submitted')}
                    onChange={(e) => console.log('changed')}
                    errors ={{email: 'invalid'}}
                    user={{ email: 'jane@doe.com', name: 'Jane Doe' }}
                />
                {button}
            </div>
        )
    }
}

export default LoginControl
