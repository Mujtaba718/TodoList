import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
 
class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  //Creating delete event handler
  delete(key) {
    this.props.delete(key);
  }
 
  createTasks(item) {
    return <li onClick={(e) => this.delete(item.key, e)} 
               key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries; 
    var listItems = todoEntries.map(this.createTasks); //array of li elements
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
            {listItems}
        </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;