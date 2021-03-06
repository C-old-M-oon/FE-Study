import * as types from './mutation-type'

const mutations = {
    [types.SETSTATE](state, obj) {
        for(let key in obj) {
            !obj.name ? state[key] = obj[key] : state[obj.name][key] = obj[key]
        }
    },
    [types.SETMSG](state, str) {
        state.msg = str
    },
}

export default mutations