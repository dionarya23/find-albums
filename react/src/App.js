import React, { Component } from 'react'

/**
 * REDUX STUFF IN HERE
 */
import { Provider } from 'react-redux'
import store from './store'

/**
 * Component Stuf
 */

import Home from './components/Home'
import { Hero, HeroBody, 
        HeroFooter,
        Container, Title,
        Subtitle, Button
      } from 'bloomer'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
          <Hero isFullHeight={true} 
                style={{
                  backgroundColor:'#1f87ff'
              }}
                isColor="dark"
           isSize="large">
            <HeroBody>
            {/* <Home /> */}
                <Container style={{
              marginTop:'-8%'
            }} hasTextAlign='centered'>
                     <Title style={{
                       fontSize:'6em'
                     }} isSize={1} >
                      find the album
                     </Title>
                     <Subtitle isSize={5}>
                       temukan playlist hanya dengan mengupload cover album artist favoritmu
                     </Subtitle>
                   
                    <Button onClick={() => window.open('http://localhost:5000/api/auth', "_self")} isSize={'medium'} style={{
                      backgroundColor:'#03CA5F',
                      border: 'none',
                      color: 'white',
                      fontFamily: 'Signika',
                      borderRadius: '15px',
                    }}>SignIn With Spotify</Button>
               
                </Container>
            </HeroBody>
          <HeroFooter>
            <Container style={{
            marginTop:'-5%'
          }} hasTextAlign='centered'>

                <Title isSize={5}>Made with ❤️ 
                By <a style={{textDecoration:'none', color:'white'}} 
                  target="_blank" 
                  href="http://github.com/dionarya6661"> Dion Arya Pamungkas</a>
              </Title>
              
            </Container>
            </HeroFooter>
          </Hero>
      </Provider>
    )
  }
}

export default App
