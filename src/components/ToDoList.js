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
            isLoading: true,
        }

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleTodoChange = this.handleTodoChange.bind(this);
        this._renderItems = this._renderItems.bind(this);
        this._writeToLocalStorage = this._writeToLocalStorage.bind(this);
    }

    componentDidMount() {
        const savedItemsStr = localStorage.getItem('items') || "[]"
        const savedItems = JSON.parse(savedItemsStr);
        this.setState({
            isLoading: false,
            items: savedItems
        })
    }

    _writeToLocalStorage() {
        const { items } = this.state;
        const serialisedItems = JSON.stringify(items);
        localStorage.setItem('items', serialisedItems)
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
          }), this._writeToLocalStorage)
        }
    }

    handleTodoChange(index) {
        this.setState(prevState => ({
            items: [
                ...prevState.items.slice(0, index),
                {
                    ...prevState.items[index],
                    done: !prevState.items[index].done
                },
                ...prevState.items.slice(index + 1)
            ]
        }), this._writeToLocalStorage)
    }

    _renderItems() {
        const { items, isLoading } = this.state;

        if (isLoading) {
            return (<p className="todo__no-items">Loading Items...</p>) 
        }
        if (items.length === 0) {
            return (<p className="todo__no-items">No items found. Add a to-do item above to get started.</p>)
        }

        return (
            <ul className="todo__list">
                {
                    items.map((item, i) => (
                        <li className="todo__item" key={`todo-item-${i}`}>
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
            <div className="todo__container">
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
