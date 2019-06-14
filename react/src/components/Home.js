import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userAction'
import './home.css'
import { 
    Container,
    Title,
    Button,
 } from 'bloomer'
 import Login from './Login.jsx'
 import Process from './Process.jsx'
 

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
         const { authenticated } = this.props.user
         let homeReal;

         if (authenticated) {

             homeReal = (
                <Container style={{marginTop: '-15%'}}
                         hasTextAlign="centered">

                  <Title isSize={1}>find the album | 
                  <Button onClick={() => 
                          window.open('https://findalbum-backend.herokuapp.com/api/auth/logout', "_self")} 
                          isSize={'medium'} 
                    style={{
                      backgroundColor:'red',
                      border: 'none',
                      color: 'white',
                      display: 'inline',
                      fontFamily: 'Signika',
                      borderRadius: '15px',
                    }}>Logout</Button>
                </Title>

                    <Process />

              </Container>
             )
         }else{
             homeReal = <Login />
         }

          return (
              <div>
                   {homeReal}
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