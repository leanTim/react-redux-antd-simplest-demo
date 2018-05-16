import React, {Component} from 'react';
import {connect} from 'react-redux'
import List from '../components/List.js'

class Foo extends Component {
    render () {
        const {staticData} = this.props

        return (
            <div>
                <ul>
                    {staticData.map((ele, index) => 
                        <List text={ele.text} key={index}></List>
                    )}
                </ul>
            </div>
        )
    }
}

const getStaticData = (state) => {
    return {
        staticData: state.update.staticData
    }
}

export default connect(getStaticData)(Foo)

