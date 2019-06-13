import React, { Component } from 'react'
import { Subtitle } from 'bloomer'

class Result extends Component {
    constructor() {
        super()
    }


    render () {
        return (
            <div>
            <Subtitle isSize={2}>divide ed sheeran album cover</Subtitle>
               <iframe id="spotify-embed-iframe" 
                       src="https://open.spotify.com/embed?uri=spotify:album:3T4tUhGYeRNVUGevb0wThu" 
                       width="300" height="480" frameborder="0" 
                       allowtransparency="true" allow="encrypted-media">
               </iframe>
            </div>
        )
    }
}

export default Result