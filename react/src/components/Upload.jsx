import React, { Component } from 'react'

import './home.css'
import Loading from './Loading.jsx'

class Upload extends Component {

    constructor() {
        super()
        this.state = {
            loading = false
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {

    }

    render () {
        let shouldRender;

        if (this.state.loading) {
            shouldRender = <Loading />
        }else{
            shouldRender = (
                <div className="file-upload">
                <div className="image-upload-wrap">
                        <input className="file-upload-input" type='file' 
                            onChange={this.onChange}
                            accept="image/*" />

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
            {shouldRender}
        )
    }
}

export default Upload
