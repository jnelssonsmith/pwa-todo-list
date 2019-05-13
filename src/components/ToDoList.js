import React from 'react';

import CheckBox from './Checkbox';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                {
                    label: 'My test todo',
                    done: false
                }
            ],
            value: '',
        }

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleTodoChange = this.handleTodoChange.bind(this);
        this._renderItems = this._renderItems.bind(this);
    }

    handleValueChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleKeyPress(e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
          this.setState(prevState => ({
              value: '',
              items: [
                  ...prevState.items,
                  {
                      label: prevState.value,
                      done: false,
                }
              ]
          }))
        }
    }

    handleTodoChange(index) {

    }

    _renderItems() {
        const { items } = this.state;

        if (items.length === 0) {
            return (<p className="todo__no-items">No items found. Add a to-do item above to get started.</p>)
        }

        return (
            <ul className="todo__list">
                {
                    items.map((item, i) => (
                        <li className="todo__item">
                            <CheckBox
                                checked={item.done}
                                onChange={this.handleTodoChange.bind(this, i)}
                                index={i}
                                label={item.label}
                            />
                        </li>
                    ))
                }
            </ul>
        )
        
    }

    render() {
        const { value } = this.state;
        return (
            <div class="todo__container">
                <div className="todo__input-container">
                    <input
                        onChange={this.handleValueChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder="Add to-do"
                        type="text"
                        value={value}
                    ></input>
                </div>
                {this._renderItems()}
            </div>
        );
    }

}

export default ToDoList;
