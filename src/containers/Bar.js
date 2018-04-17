import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, clearData } from '../actions/count.js'

class Bar extends Component {
    render () {
        const {lists, fetchPostsIfNeeded, clearData} = this.props;

        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-default" onClick={ () => fetchPostsIfNeeded() }>加载数据</button>
                    <button type="button" className="btn btn-default" onClick={ () => clearData() }>清除数据</button>
                </div>
                {lists.map((item, index) => {
                    return <div className="well well-sm" key={ index }><a href={item.url}>{ item.title }</a></div>
                })}
            </div>

        )
    }
}

const getList = state => {
    return {
        lists: state.update.data
    }
}

export default connect(getList, {fetchPostsIfNeeded, clearData})(Bar)