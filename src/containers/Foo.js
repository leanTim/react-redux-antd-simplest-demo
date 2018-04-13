import React, {Component, PropTypes} from 'react'
import List from '../components/List.js'
import {connect} from 'react-redux'

 class Foo extends Component {

    render () {
        const {lists} = this.props
        return (
            <div>
                <ul className="list-group">
                    {lists.map((item, index) => {
                        return <List text={item.text} key={index}></List>
                    })}
                </ul>
            </div>
        )
    }
}

Foo.PropTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

const getList = (state) => {
    return {lists: state.update.staticData}
}

export default connect(getList)(Foo)