import React, {
    Component
} from 'react'

import {connect} from 'react-redux'
import { getAlbum } from '../store/actions/albumAction'
import { changeLoading } from '../store/actions/loadingAction'
import PropTypes from 'prop-types';
import Upload from './Upload.jsx'
import Result from './Result.jsx'


class Process extends Component {
    constructor(){
        super()

        this.state = {
            isDone: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.album) {
            this.setState({
                isDone:true
            })
        } 

        this.setState({
            isDone: nextProps.loading
        })
    }

    render(){
        let shouldRender

        if (this.state.isDone) {
            shouldRender = <Result album={this.props.album} />
        } else {
            shouldRender = <Upload />
        }

        return(
            <div>{shouldRender}</div>
        )
    }
}


Process.propTypes = {
    getAlbum: PropTypes.func.isRequired,
    album   : PropTypes.object.isRequired,
    loading : PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    album : state.album,
    loading: state.loading
 })

const dispatchToProps = (dispatch) => ({
   getAlbum: () => dispatch(getAlbum()),
   changeLoading: () => dispatch(changeLoading())
})

export default connect(mapStateToProps, dispatchToProps)(Process)