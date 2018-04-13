import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {increase, decrease} from '../actions/count.js'

class Home extends Component {

    render () {
        const {number, increase, decrease} = this.props
        return (
            <div>
                <p>这里显示的是当前值: <span className="badge">{number}</span></p>
                <button type="button" className="btn btn-primary" onClick={() => increase(1)}>+1按钮</button>
                <button type="button" className="btn btn-primary" onClick={() => decrease(1)}>-1按钮</button>
            </div>
        )
    }
}

const getNum = (state) => {
    return {
        number: state.update.number
    }
}

export default connect(getNum, {increase, decrease})(Home)

