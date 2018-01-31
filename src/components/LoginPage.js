import React, {PropTypes} from 'react'
import LoginForm from './LoginForm'

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        }

        // bind event handlers

    }

    processForm(e) {
        e.preventDefault()
        console.log('email: ' + this.state.email)
        console.log('password: ' + this.state.password)
    }

    changeUser(e) {
        const field = e.target.value
        const user = this.state.user
        user[field] = e.target.value

        this.setState({
            user
        })
    }

    render() {
        return (
            <LoginForm 
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        )
    }

}

export default LoginPage
