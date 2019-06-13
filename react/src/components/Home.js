import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userAction'

class Home extends Component {
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
         const { authenticated, user } = this.props.user
         console.log(this.props.user)
          return (
          <div>
                
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
  
  export default connect(mapStateToProps, dispatchToProps)(Home);