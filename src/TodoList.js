import React, { Component } from 'react'
import { Button, Input, List } from 'antd';
import store from './store'
import { todoInputAction, addItemAction, delItemAction } from './store/actionCreates'
import 'antd/dist/antd.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: store.getState().inputValue,
            list: store.getState().list
        }
        store.subscribe(this.storeChange)


    }
    todoChange = (e) => {
        const action = todoInputAction(e.target.value)
        console.log('action: ', action);

        store.dispatch(action)
    }
    // 新增
    todoButton = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    delItem = (index) => {
        const action = delItemAction(index)
        store.dispatch(action);
    }
    storeChange = () => {
        this.setState(store.getState());
    }

    render() {
        return (
            <div className="todo-list">
                <div className="box">
                    <Input placeholder={this.state.inputValue} onChange={this.todoChange} value={this.state.inputValue} />
                    <Button type="primary" onClick={this.todoButton}>创建</Button>
                </div>

                <div className="list-box">
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={() => this.delItem(index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;