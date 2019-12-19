import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <body>
      <div className="container-signin">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <form className="form-signin" onSubmit={this.onSignUp}>
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" 
                     placeholder="Email address" 
                     name="email"
                    value={email}
                     required autofocus  onChange={this.handleChange}/>
                    <label for="inputEmail">Email address</label>
                  </div>
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" class="form-control"
                     name="password"
                     value={password}
                    placeholder="Password" 
                    required 
                     onChange={this.handleChange}/>
                    <label for="inputPassword">Password</label>
                  </div>
                  <div className="form-label-group">
                    <input type="password"
                     id="inputConfirmationPassword" 
                     class="form-control"
                     name="passwordConfirmation"
                     value={passwordConfirmation}
                     placeholder="Confirm Password" required  onChange={this.handleChange}/>
                    <label for="inputConfirmationPassword">Confirm Password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign UP</button>
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

export default withRouter(SignUp)
