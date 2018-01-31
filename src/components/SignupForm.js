import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField'

const SignupForm = ({
    onSubmit,
    onChange, 
    errors,
    user,

}) => (
    <div className='container signup-form'>
        <form action="/" onSubmit={onSubmit}>
            <h2>Sign Up</h2>
            
            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <TextField floatingLabelText="Name" className="form-control" type="text" name="name" id="name" errorText={errors.name} onChange={onChange} value={user.name}/>
            </div>

            <div className="field-line">
                <TextField floatingLabelText="Name" className="form-control" type="text" name="email" id="email" errorText={errors.email} onChange={onChange} value={user.email}/>
            </div>

            <div className="field-line">
                <TextField floatingLabelText="Name" className="form-control" type="password" name="password" id="name" errorText={errors.password} onChange={onChange} value={user.password}/>
            </div>

            <button type="submit" label="Create New Account" />

            <h4>
                Already have an account? 
                <Link to={'/login'}>Log In</Link>
            </h4>

        </form>
    </div>
)

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    
}

export default SignupForm
