// component to process SignupForm:
import React, {PropTypes} from 'react'
import SignupForm from './SignupForm.js'

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: ''
            }
        }
        // bind event handlers
        this.changeUser = this.changeUser.bind(this)
        this.processForm = this.processForm.bind(this)
    }

    // change the user obj:
    changeUser(e) {
        const field = e.target.name
        const user = this.state.user
        user[field] = e.target.value

        this.setState({
            user
        })
    }
    // on submit, process form
    processForm(e) {
        e.preventDefault()

        console.log('name: ' + this.state.user.name)
        console.log('email: ' + this.state.user.email)
        console.log('password: ' + this.state.user.password)
        
    }

    render() {
        return (
            <SignupForm 
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            user={this.state.user}
            />

        )
    }

}

export default SignupPage
