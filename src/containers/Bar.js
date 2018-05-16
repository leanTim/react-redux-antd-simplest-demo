import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPostIfNedded, refreshData} from '../actions/count.js'

class Bar extends Component {
    render () {
        const {lists, fetchPostIfNedded, refreshData} = this.props;
        return (
            

            <div>
                <div className="btn-group">
                    <button type="button" className="btn brn-primary" onClick={ () =>fetchPostIfNedded() } >加载数据</button>
                    <button type="button" className="btn brn-primary" onClick={ () =>refreshData() } >清除数据</button>
                </div>
                {lists.map((ele, index) => 
                    <div className="well well-sm" key={index}><a href={ele.url}>{ele.title}</a></div>
                )}

            </div>
        )
    }
}

const getList = (state) => {
    console.log(state.update.data)
    return {
        lists: state.update.data
    }
}

export default connect(getList, {fetchPostIfNedded, refreshData})(Bar)