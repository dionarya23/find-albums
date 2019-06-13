import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userAction'
import './home.css'
import { 
    Container,
    Title,
    Button,
    Columns,
    Column
 } from 'bloomer'
import { Subtitle } from 'bloomer/lib/elements/Subtitle';

class Home extends Component {
    static propTypes = {
        getUser: PropTypes.func.isRequired,
        user   : PropTypes.object.isRequired
      }
    
      static defaultProps = {
        user: {}
      }

      constructor(){
          super()
          this.state = {
            loading: false,
            song: false
          }

          this.onChange = this.onChange.bind(this)
      }

      componentWillMount() {
          this.props.getUser();
      }

      onChange(e) {
            

        this.setState({
            loading: true
        })
      }


      render() {
         const { authenticated, user } = this.props.user
         let thisIsHome;

            if (!this.state.loading) {
                    if (this.state.song) {
                        thisIsHome = (
                            <div>
                                <Subtitle isSize={2}>divide ed sheeran album cover</Subtitle>
                                <iframe id="spotify-embed-iframe" 
                                        src="https://open.spotify.com/embed?uri=spotify:album:3T4tUhGYeRNVUGevb0wThu" 
                                        width="300" height="480" frameborder="0" 
                                        allowtransparency="true" allow="encrypted-media">
                                </iframe>

                            </div>
                        )
                    }else{
                thisIsHome = (<div className="file-upload">
                <div className="image-upload-wrap">
                    <input className="file-upload-input" type='file' 
                           onChange={this.onChange}
                           accept="image/*" />
                    <div className="drag-text">
                        <h3 style={{
                            fontFamily: 'Signika'
                        }}>Drag and drop or selected a album cover</h3>
                    </div>
                </div>

                <div className="file-upload-content">
                    <img className="file-upload-image" src="#" alt="your image" />
                </div>
                </div>)
                    }
            } else {
                thisIsHome = ( <Columns isCentered>
                    <Column>
    
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
    
                        </Column>
                        </Columns>)
               
            }
          return (
              <Container style={{
                  marginTop: '-15%'
              }} hasTextAlign="centered">

                  <Title isSize={1}>find the album | 
                  <Button onClick={() => window.open('http://localhost:5000/api/logout', "_self")} isSize={'medium'} style={{
                      backgroundColor:'red',
                      border: 'none',
                      color: 'white',
                      display: 'inline',
                      fontFamily: 'Signika',
                      borderRadius: '15px',
                    }}>Logout</Button>
                </Title>

               
                    {thisIsHome}
               
              </Container>
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