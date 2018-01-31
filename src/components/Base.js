import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'

const Base = ({children}) => (
    <div>
        <div className="top-bar">
            <IndexLink to="/">Home</IndexLink>
            <IndexLink to="/login">Log in</IndexLink>
            <IndexLink to="/signup">Sign up</IndexLink>

        </div>

        {children}

    </div>

)

Base.propTypes = {
    children: PropTypes.object.isRequired
}

export default Base
