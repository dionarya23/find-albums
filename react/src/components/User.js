import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userAction'

class User extends Component {
    static propTypes = {
        getUser: PropTypes.func.isRequired,
        user   : PropTypes.object.isRequired
      }
    
      static defaultProps = {
        user: {}
      }

      componentWillMount() {
          this.props.getUser();
      }


      render() {
         const { authenticated } = this.props.user
         console.log(this.props.user)
          return (
            <div>
                <h2>What's Up ?</h2>

                {authenticated ? (
                    <h1>You Login</h1>
                    <h2>hello {this.props.user.profile.displayName}</h2>
                    <button onClick={() => window.open('http://localhost:5000/api/auth/logout', "_self")}>logout</button>
                ) : (
                    <button onClick={() => window.open('http://localhost:5000/api/auth', "_self")}>SigIn With Spotify</button>
                )}
          </div>
          )
      }
}

const mapStateToProps = (state) => ({
    user : state.user
  })
  
  const dispatchToProps = (dispatch) => ({
     getUser: () => dispatch(getUser())
  })
  
  export default connect(mapStateToProps, dispatchToProps)(User);