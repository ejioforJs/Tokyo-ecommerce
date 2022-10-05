import React from 'react'
import { LineScaleParty } from 'react-pure-loaders'

class LoadingBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    render() {
        return(
            <div className='p-auto'>
                <LineScaleParty color={'rgb(255,54,93)'} loading= {this.state.loading} />
            </div>
        )
    }
}

export default LoadingBox