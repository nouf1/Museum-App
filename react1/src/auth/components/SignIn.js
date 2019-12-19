import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (  
    
    <body>
      {/* <div className="git"></div> */}
    <div className="container-signin">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin" onSubmit={this.onSignIn}>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus 
                  name="email"
                  value={email}
                  onChange={this.handleChange}/>
                  <label for="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" 
                  name="password"
                   value={password}
                  placeholder="Password" required  onChange={this.handleChange}/>
                  <label for="inputPassword">Password</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                  <label className="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
    )
  }
}

export default withRouter(SignIn)
