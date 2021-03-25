import {createStore} from 'vueX'
import todolist from './todolist';
export default createStore({
    debug : true,
    modules:{
        todolist,
    },
})