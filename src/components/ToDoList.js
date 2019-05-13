import React from 'react';

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

    _renderItems() {
        const { items } = this.state;

        if (items.length === 0) {
            return (<p className="todo__no-items">No items found. Add a to-do item above to get started.</p>)
        }

        return (
            <ul>
                {
                    items.map((item, i) => (
                        <li className="todo__item">
                            <span>{item.label}</span>
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
                <div className="todo__items-container">
                    {this._renderItems()}
                </div>
            </div>
        );
    }

}

export default ToDoList;
