import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <span className="navbar-brand">
                            <Link to="/" >redux</Link>
                        </span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/index">计数器</Link>
                        </li>
                        <li>
                            <Link to="/foo">静态数据</Link>
                        </li>
                        <li>
                            <Link to="/bar">动态数据</Link>
                        </li>
                        <li>
                            <Link to="/antd">结合antd</Link>
                        </li>
                    </ul>
                </nav>
                <div className="panel panel-default">
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )        
    }
}