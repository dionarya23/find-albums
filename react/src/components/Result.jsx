import React, { Component } from 'react'
import { Subtitle, Button } from 'bloomer'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { changeLoading } from '../store/actions/loadingAction'
import { Column } from 'bloomer/lib/grid/Column';
import { Columns } from 'bloomer/lib/grid/Columns';


class Result extends Component {

    render () {
        return (
            <div>
            <Subtitle isSize={2}>{this.props.album.label}</Subtitle>
            <div style={{
                    padding: '.5em',
                    borderRadius: '3px',
                    backgroundColor: '#f8f8f8',
                    display: 'inline-block'}}>
               <iframe id="spotify-embed-iframe" 
                       src={"https://open.spotify.com/embed?uri="+this.props.album.spotify}
                       width="300" height="480" frameborder="0" 
                       allowtransparency="true" allow="encrypted-media">
               </iframe>
               </div>
            <Columns style={{marginTop:'2%'}}>
                <Column>
                <Button onClick={() => this.props.changeLoading(false)} 
                          isSize={'medium'} 
                    style={{
                      backgroundColor:'#03CA5F',
                      border: 'none',
                      color: 'white',
                      display: 'inline',
                      fontFamily: 'Signika',
                      borderRadius: '15px',
                    }}>Coba Lagi</Button>
                </Column>
                </Columns>
             
            </div>
        )
    }
}

Result.propTypes = {
    album: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    changeLoading: PropTypes.func.isRequired
}

export default connect(null, {changeLoading})(Result)