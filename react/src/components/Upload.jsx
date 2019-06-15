import React, { Component } from 'react'
import './home.css'
import Loading from './Loading.jsx'
import { connect } from 'react-redux'
import { getAlbum } from '../store/actions/albumAction'
import PropTypes from 'prop-types'

class Upload extends Component {

    constructor() {
        super()
        this.state = {
            loading : false
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        let form_data = new FormData()
        form_data.append('avatar', e.target.files[0])
        
        this.props.getAlbum(form_data)
        this.setState({loading:true})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.album) {
            this.setState({loading:false})
        }
    }

    render () {
        let shouldRender;

        if (this.state.loading) {
            shouldRender = <Loading />
        }else{
            shouldRender = (
                <div className="file-upload">
                <div className="image-upload-wrap">
                    <form>
                        <input className="file-upload-input" type='file' 
                            onChange={this.onChange}
                            accept="image/*" />
                    </form>

                        <div className="drag-text">
                            <h3>Drag and drop or selected a album cover</h3>
                        </div>
                </div>

                    {/* <div className="file-upload-content">
                        <img className="file-upload-image" src="#" />
                    </div> */}
        </div>
            )
        }
        return (
            <div>{shouldRender}</div>
        )
    }
}

Upload.propTypes = {
    getAlbum : PropTypes.func.isRequired,
    album    : PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    album   : state.album
 })


export default connect(mapStateToProps, { getAlbum })(Upload)
