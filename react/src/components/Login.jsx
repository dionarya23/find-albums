import React from 'react'
import {
    Container, Title,
    Subtitle, Button
  } from 'bloomer'

function Login() {
        return(
            <Container style={{marginTop:'-8%'}}
                       hasTextAlign='centered'>
                <Title style={{fontSize:'6em'}} 
                       isSize={1} >
                        find the album
                </Title>

                      <Subtitle isSize={5}>
                        temukan playlist hanya dengan mengupload cover
                         album artist favoritmu
                      </Subtitle>
                    
                      <Button onClick={() => window.open(process.env.REACT_APP_LOGIN_URL, "_self")} 
                              isSize={'medium'} 
                              style={{
                                backgroundColor:'#03CA5F',
                                border: 'none',
                                color: 'white',
                                fontFamily: 'Signika',
                                borderRadius: '15px',
                      }}>SignIn With Spotify</Button>
                
                  </Container>   
    )
}

export default Login