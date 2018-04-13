import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA } from '../constants'  // 引入action类型名常量


export const increase = num => {
    return {
        type: INCREASE,
        amount: num
    }
}

export const decrease = num => {
    return {
        type: DECREASE,
        amount: num
    }
}

export const clearData = () => {
    return {
        type: CLEARDATA
    }
}

export const getSuccess = json => {
    return {
        type: GETSUCCESS,
        json
    }
}

//异步操作
function fetchPost () {
    return dispatch => {
        return fetch('data.json')
        .then(res => {console.log(res); return res.json()})
        .then(data => {dispatch(data)})
        .catch((err) => {console.log(err.message)})
    }
}


export function fetchPostsIfNeeded () {
    return (dispatch, getState) => {
        return dispatch(fetchPost())
    }
}