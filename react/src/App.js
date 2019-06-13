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
import {  Hero, HeroBody, HeroFooter, 
          Container, Title } from 'bloomer'


class App extends Component {

  render () {
    return (
      <Provider store={ store }>
           <Hero isFullHeight={true} 
                style={{backgroundColor:'#1f87ff'}}
                isColor="dark"
                isSize="large">
        <HeroBody style={{display:'block'}}>
          <Home />
        </HeroBody>
          <HeroFooter>
            <Container style={{marginTop:'-5%'}}
                        hasTextAlign='centered'>

                    <Title isSize={5}>Made with <span role="image">❤️</span> 
                        By <a style={{textDecoration:'none', color:'white'}} 
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
