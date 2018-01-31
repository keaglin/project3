import Base from './components/Base.js'
import LoginControl from './components/LoginControl.js'
import LoginPage from './components/LoginPage.js'
import SignupPage from './components/SignupPage.js'

const routes = {
    // use base comp as wrapper for all:
    component: Base,
    childRoutes: [
        {
            path: '/',
            component: LoginControl
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/signup',
            component: SignupPage
        },

    ]
}

export default routes
