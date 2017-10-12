import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';
 
class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);
  
    this.state = {
      items: [] //We are defining items array/property that will be responsible for storing all of the various items that you can enter
    };

    // Making the addItem event handler
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  addItem(e) {
    var itemArray = this.state.items; //store the current value of our items state object
 
    if (this._inputElement.value !== "") {
      //if input field is not empty then unshift or add the value to the beginning of the array 'items'
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );
    }
    
    this.setState({
      items: itemArray
    });
 
    this._inputElement.value = "";

    //console.log(itemArray);
   
    e.preventDefault(); // We are overriding this event's default behavior. The reason has to do with how form submission works. By default, when you submit a form, the page reloads and clears everything out. We definitely don't want that. By calling preventDefault we block the default behavior.
  };

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render(){
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                   placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem} />
      </div>
    );
  }
};

export default TodoList;