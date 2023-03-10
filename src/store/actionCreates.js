import { TODO_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypeName'
export const todoInputAction = (value) => ({
    type: TODO_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (value) => ({
    type: DEL_ITEM,
    value
})