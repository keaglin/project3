// ref's: 
// https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-react-user-sign-in--cms-28568
// 


import React, {Component} from 'react'

class Login extends Component {

    render() {
        // post to axios:
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(function (res) {
            console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })

        return (
            <form method="post" action="/login">
                <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="text" name="email" id="email" />
                </div>
            
                <div class="form-group">
                <label for="email">Password</label>
                <input class="form-control" type="password" name="password" id="password" />
                </div>
            
                <input class="btn btn-default" type="submit" />
            </form>
        )
    }
}

export default Login
