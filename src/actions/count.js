import {INCREASE, DECREASE, GETSUCCESS, LOADTATA, REFRESHDATA} from '../constants.js'
import 'whatwg-fetch'


export const increase = n => {
    return {
        type: INCREASE,
        count: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        count: n
    }
}

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}

function fetchPost () {
    return dispatch => {
        fetch('data.json')
        .then(res => {console.log(res); return res.json()})
        .then(data => {dispatch(getSuccess(data))})
        .catch(err => {console.log(err)})
    }

}

export function fetchPostIfNedded () {
    return (dispatch, getState) => {
        return dispatch(fetchPost())
    }

}
