import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Collapse} from 'antd'
const Panel = Collapse.Panel

const text = `
    this is a react-demo by antd : )
`

export default class Antd extends Component {
    render () {
        return (
            <Collapse defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" disabled>
              <p>{text}</p>
            </Panel>
          </Collapse>
        )
    }
}