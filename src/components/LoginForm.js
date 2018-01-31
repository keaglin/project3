import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField'

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <div className="container">
        <form action="/" onSubmit={onSubmit}>
            <h2>Log In</h2>

            <TextField floatingLabelText="Email" name="email" errorText={errors.email} onChange={onChange} value={user.email} />

            <TextField floatingLabelText="Password" name="password" errorText={errors.password} onChange={onChange} value={user.password} />

            <button type="submit" label="Log in"/>

            <h4>
                Don't have an account? 
                <Link to={'/signup'}>Create one</Link>
            </h4>
        </form>
    
    
    </div>
)

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired    
    
}



export default LoginForm
