import React from 'react'  // 引入React
import { render } from 'react-dom' // 引入render方法
import { Provider } from 'react-redux' // 利用Provider可以使我们的 store 能为下面的组件所用
import { Router, browserHistory } from 'react-router'

import DevTools from './src/containers/DevTools'  // 引入Redux调试工具DevTools
import routes from './src/routes'   // 引入路由配置

render(
    <div>
        <Router history={browserHistory} routes={routes} />
        <DevTools />
    </div>
    ,
    document.getElementById('mount')
)
