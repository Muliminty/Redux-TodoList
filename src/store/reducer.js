import { TODO_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypeName'
const todoListData = {
    inputValue: '请输入待办事件',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.'
    ]
}
export default (state = todoListData, actions) => {

    if (actions.type == TODO_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = actions.value;
        return newState
    }
    if (actions.type == ADD_ITEM) {

        let newState = JSON.parse(JSON.stringify(state));

        newState.list.push(state.inputValue)
        return newState
    }
    if (actions.type == DEL_ITEM) {

        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(actions.value, 1)

        return newState
    }
    return state
}